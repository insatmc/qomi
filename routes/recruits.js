let mongo = require('mongodb')
let fs = require('fs')
var url = require('url')

module.exports = {

  getRecruitsRequests (req, res) {
    req.collection.find({}).toArray(function (err, docs) {
      if (err) throw err
      res.status(200).send(docs)
    })
  },

  getRecruitsRequest (req, res) {
    let o_id = new mongo.ObjectID(req.params.id)
    console.log(typeof o_id)
    req.collection.find({'_id': o_id}).toArray(function (err, RecruitsRequest) {
      if (err) throw err
      res.send(RecruitsRequest)
    })
  },

  addRecruitsRequest (req, res, next) {
    req.collection.insert(req.body)
    .then(function (result) {
      res.status(201).send(result)
    })
    .catch(function (error) {
      next('Internal server error')
    })
  },

  updateRecruitsRequest (req, res, next) {
    if (req.user && req.user.role === 'admin') {
      let o_id = new mongo.ObjectID(req.params.id)

      req.collection.update(
        {'_id': o_id},
        {
          $set: req.body
        }, function (err, results) {
          if (err) throw err
          console.log('document updated')
        }
      )
      res.send('Object has been updated')
    } else {
      res.send('you are trying to hack us :o').status(403)
    }
  },

  removeRecruitsRequest (req, res) {
    var url_parts = url.parse(req.url, true)
    var query = url_parts.query
    if (query.token == 'e1oIojaEj54tfSqPgAIqiBb9YrlAXXHp') {
      let o_id = new mongo.ObjectID(req.params.id)

      req.collection.remove(
        {'_id': o_id},
        {
          justOne: true
        }
      )
      res.send('Document removed')
    } else {
      res.send('you are trying to hack us :o').status(403)
    }
  }

}
