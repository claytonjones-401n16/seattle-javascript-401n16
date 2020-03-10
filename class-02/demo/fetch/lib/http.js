'use strict';

const superagent = require('superagent');

class HTTP {

  constructor() {
  }

  fetch(opts) {
    if (opts) {

      let fakeResult = {
        count: 2,
        results: [
          { name: 'Luke Skywalker' },
          { name: 'R2D2' }
        ]
      };

      this.render(fakeResult);
    }
  }

  render(results) {
    console.log(results);
  }

}

module.exports = HTTP;
