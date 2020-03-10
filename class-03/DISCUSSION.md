# Readings: Data Modeling & NoSQL Databases

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Reading

### Javascript Data Modeling

Why "Model Data?"

From a coding (and cognitive) standpoint, it's crucial that you can consistently describe "things" both physically (what properties do they have) and behaviorally (what can they do). Once defined, you can then create logic, workflows, and applications that use this information to get work done. Creating reusable models means not having to be explicit about this every time you need to modify/use data.

Javascript has a limited number of built-in data types.  This includes objects, arrays, strings, numbers, and booleans. Data modeling in Javascript is the process of taking a real world or conceptual idea and encoding it into Javascript's built in data types. Technically, there isn't a right or wrong way to model data in software development because it has been proven that any idea can be represented using any data structure. However, it is important to follow several practices to boost software readability and maintainability. Boolean values should be used when the data can have only two states. Numbers should be used when the data could support arithmetic operations. Strings should be used when the data is representing a natural language. Arrays should be used to bundle multiple pieces of like data. Objects should be used to bundle multiple pieces of different data.

### Modeling behaviors

#### CRUD - Basic Data Operations

- **CREATE** - Add a record to a data store
- **READ** - Retrieve a record from a data store
- **UPDATE** - Update a record within a data store
- **DELETE**  - Remove a record from a data store

#### Interfaces & Services -- The "Repository" design pattern

"A modeling technique providing common access points in an API (i.e. the CRUD methods) that is agnostic to the storage medium and techniques."

This is a layer of abstraction that sits between the code and the actual data source.

Consider the simple example below. We have a data model that seems to use PostgreSQL to store data. In another module, we create a new instance and then `.save()` and maybe `.delete()` records through it.  That client library (perhaps it's an express server) does not know (or care) how the `Location` actually works. It just calls the CRUD style methods that it provides. If at some later date, the developer of the `Location` data model changes the database from PostgreSQL to something else ... so long as the methods are the same, any other apps that use `Location` will work without any modification.

This represents a service that is loosely coupling the dependencies (specific data services) through behaviors

```javascript
let pg = require('pg');
class Location {

  constructor(schema) {}

  create(record) {
    // Run the SQL to save a record
  }
  delete() {}
  update() {}

}

// Some other module
let seattle = new Location();
seattle.create({city:'Seattle', ...});
seattle.delete();
```

#### Implementation

The specific means by which a data model interacts with a persistence layer (file, Mongo, Postgres, etc)

In the above example, this refers to the code in the methods that does the actual work. This can change, so long as the inputs and outputs of those methods remain the same.

#### Normalization and Validation

Sanity checking data to ensure that it conforms to the modeling rules, integrity checks, etc prior to doing any operations with it.

We've written a module that does this ... many database systems have libraries that do these tasks for you, in very consistent and predictable ways.  It's an expected layer of code safety that data services should provide.

## NoSQL Databases

### SQL

"Normal" or "Traditional" databases like Postgres, SQL Server, Oracle and the like are "Relational", in that they store data in rows and columns and link related records through a system of keys and pointers (Foreign Keys).

These databases are known for being highly structured. You create tables by identifying the columns, their data types, and rules.  You Query the data using a special language (SQL - Structured Query Language) designed to bring all of that data together.

SQL Databases (RDS) are great for reporting or tabular data.

### NoSQL

A "NoSQL" database is based on document storage. For example, rather than have information about a user, their order history, etc in many tables that you have to join together, a Document database puts all of that information into **One Record** that you can retrieve very quickly, having all of the data you want at your disposal.

Typically, Document data is keyed by an ID, so it acts like an Object, letting you find records in O(1) time.  Documents are not structure. They are pure JSON, storing and retrieving any data that you put into your JSON objects.  This makes them Flexible, but unstructured, hence the name.

Document databases are great for "Read-Heavy" usage and frequent aggregations.

We will be using [Mongo](https://www.mongodb.com) in this course to dive into NoSQL Systems.

#### NoSQL Data Modeling

When modeling data for a Document, it's best to start with considering the data you NEED, not the data that's available. In other words, work backwards.  You can create many different documents to shape the data you need for different purposes.  You do pay a price to write to multiple documents when related information changes, but the look up speed is worth it.

![structured data model](assets/rdb.png)
![nosql data model](assets/nosql.png)

#### ORMs (Mongoose)

Using raw JSON is flexible, but problematic.  Programmers don't like surprises.  Enter "Mongoose", and "ORM" for the Mongo database.

**ORM** - Object Relation Mapping

In other words, rules for Document databases. Mongoose is a Node library that makes it easy for developers to not only interface with a Mongo database, but reliably structure the data (without losing flexibility).  Mongoose provides 2 essential things to make this easy for you:

1. Schema - the rules to structure your data
1. CRUD methods (on steroids) to work easier with the data

#### A Mongoose "Schema"

```javascript
const players = mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true, uppercase: true, enum: ['P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'RF', 'CF'] },
  throws: { type: String, required: true, uppercase: true, enum: ['R', 'L'] },
  bats: { type: String, required: true, uppercase: true, enum: ['R', 'L'] },
  team: { type: String, required: true },
});
```

#### Mongoose Built-In CRUD Methods

(All return promises)

```javascript
    let newRecord = new schema(record);
    return newRecord.save();

    schema.findOneByIdAndDelete(id);

    schema(findById(id));

```

### Mongo DB Clients

#### Running a local mongodb server

`mongod --dbpath=[/PATH/TO/DATA/FOLDER]`

The above command will start a mongo db server(once you have it installed). Replace **/PATH/TO/DATA/FOLDER** with the actual path on your computer where you want mongo to store its data.

#### Accessing Mongo Data

- **Command Line Client** `mongo`
  - The stock client is the easiest way to view and query your data, right from your terminal.
- **Compass Client**
  - [Compass GUI Client](https://www.mongodb.com/products/compass) is a slick graphical client to view your mongo data
- **IDE Plugins** - Both VSCode and Webstorm have plugins that let you work with your database right in the editor.

In doubt? Refer to the **Mongo DB Cheatsheet** - Located in the [reference](../reference) folder of the class repository

## Additional Resources

### Cloud Databases

There are a few alternatives to running Mongo locally for your web servers

- [MLab](https://www.mlab.com/) - remotely hosted mongoDB systems.  Easily setup a free database (or pay for more horsepower). Works great with Heroku
- [Atlas](https://www.mongodb.com/cloud/atlas) - Cloud based, highly scalable Mongo DB
- [DynamoDB](https://aws.amazon.com/dynamodb/) - AWS NoSQL Database. Very highly scalable. Also provides a 'mongoose'-like ORM called 'dynamoose'
- [CosmosDB](https://cosmos.azure.com/) - The Microsoft Azure equivalent for Atlas and Dynamo

### Videos

- [sql vs nosql](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

### Bookmark / Skim

- [nosql vs sql](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)
- [nosql modeling techniques](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)
- [mongoose api](https://mongoosejs.com/docs/api.html#Model)
