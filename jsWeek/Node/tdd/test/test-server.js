var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('Posts', function(){
	it('should list ALL posts on / GET', function(done){
		// create a request manager that uses our app
        var request = chai.request(app);

        // send a request
        request
          .get('/')
          .end(function(err, res){

                // check we got a 200 response
                res.should.have.status(200);

                // and that it's html
                res.should.be.html;

                res.text.should.match(/Welcome to the homepage/);

                // finish the test ( don't forget this! )
                done();

          });
      });

	it('matches correct post',function(done){

		var request = chai.request(app);
		request
			.get('/0')
			.end(function(err,res){
				res.should.have.status(200);
				res.should.be.html;
					
				res.text.should.match(/Show: 0/);
				res.text.should.match(/This is the first post/)
				done();
			});
	});

	 it('should add a SINGLE post on / POST' , function(done){
      var request = chai.request(app);

      request.post('/')
          .set('content-type', 'application/x-www-form-urlencoded') // set the form encoding type
          .send({'title': 'Test Post', 'body': 'Body Text'}) // the data to be posted
          .end(function(err, res){

            res.should.have.status(200);
            res.should.be.html;

            // we should end up back on the homepage
            res.text.should.match(/Welcome to the homepage/);

            // make another request to make sure it was created
            request
              .get('/3')
              .end(function(err, res){

                  res.should.have.status(200);
                  res.should.be.html;

                  // was the post correctly created
                res.text.should.match(/Test Post/);
                res.text.should.match(/Body Text/);

                done();
            });

         });

  	});
	 // describe a test for PUT
  it('should update a SINGLE post on /<id> PUT' , function(done){

    var request = chai.request(app);

    request.put('/2')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({'title': 'Updated Post', 'body': 'Updated Text'})
        .end(function(err, res){

          res.should.have.status(200);
          res.should.be.html;
          res.text.should.match(/Welcome to the homepage/);

          request
            .get('/2')
            .end(function(err, res){

                res.should.have.status(200);
                res.should.be.html;
                res.text.should.match(/Updated Post/);
                res.text.should.match(/Updated Text/);

                done();
            });

        });

  });
  it('should delete a SINGLE post on /<id> DELETE' , function(done) {

    var request = chai.request(app);

    request.delete('/3')
        .end(function(err, res){

          res.should.have.status(200);
          res.should.be.html;
          res.text.should.match(/Welcome to the homepage/);

          request
            .get('/3')
            .end(function(err, res){

                res.should.have.status(404);
                done();

            });

        });

  });
})
