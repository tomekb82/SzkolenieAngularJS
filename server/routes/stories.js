var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

function onError(err, response) {
    console.log(err);
    response.end;
}

MongoClient.connect('mongodb://localhost:27017/stories', function(err, db) {
  if (err) throw Error("Mongodb connection error...");

  router.post('/', function(request, response) {
      var user = request.body;
      db.collection('stories').insertOne(user, function(err, result) {
          if (err) onError(err, response);
          response.send(result);
      });
  });

  router.get('/:id', function(request, response) {
      db.collection('stories').find({'_id': new ObjectID(request.params.id)}, function(err, result) {
          if (err) onError(err, response);
          response.send(result);
      });
  });

    router.get('/', function(request, response) {
        db.collection('stories').find().toArray(function(err, result) {
            if (err) onError(err, response);
            response.send(result);
        });
    });

    router.delete('/:id', function(request, response) {
        db.collection('stories').findOneAndDelete({'_id': new ObjectID(request.params.id)}, function(err) {
            if (err) onError(err, response);
            response.writeHead(200);
            response.end();
        });
    });

    router.put('/:id', function(request, response) {
        var user = request.body;
        user._id = new ObjectID(user._id);
        db.collection('stories').findOneAndUpdate({'_id': user._id}, user, function(err) {
            if (err) onError(err, response);
            response.writeHead(200);
            response.end();
        });
    });

});

module.exports = router;
