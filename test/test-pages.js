var expect  = require('chai').expect;
var request = require('request');

// it('Main page content', function(done) {
//     request('http://localhost:8080' , function(error, response, body) {
//         expect(body).to.equal('Hello World');
//         done();
//     });
// });

it('Base test', function(done) {
    expect(1).to.equal(1);
    done();
});