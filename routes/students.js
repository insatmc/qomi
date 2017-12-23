let mongo = require('mongodb')

module.exports = {
  getStudents (req, res) {
    req.collection.find({}).toArray(function (err, docs) {
      if (err) throw err
      res.send(docs)
    })
  },
  getStudent (req, res) {
    let o_id = new mongo.ObjectID(req.params.id)
    console.log(typeof o_id)
    req.collection.find({'_id': o_id}).toArray(function (err, student) {
      console.log(err)
      console.log(student)
      if (err) throw err
      res.send(student)
    })
  },
  addStudent (req, res, next) {
    req.collection.insertOne(req.body)
    .then(function (result) {
      res.status(201).send(result)
    })
    .catch(function (error) {
      next('Internal server error')
    })
  },
  updateStudent (req, res, next) {
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
  },
  removeStudent (req, res) {
    let o_id = new mongo.ObjectID(req.params.id)

    req.collection.remove(
      {'_id': o_id},
      {
        justOne: true
      }
    )
    res.send('Document removed')
  }
}
