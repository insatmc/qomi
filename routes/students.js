let mongo = require('mongodb')
let csv = require('fast-csv')
let fs = require('fs')
var url = require('url')

module.exports = {
  getStudents (req, res) {
    req.collection.find({}).toArray(function (err, docs) {
      if (err) throw err
      res.status(200).send(docs)
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
    if (req.body.token == 'e1oIojaEj54tfSqPgAIqiBb9YrlAXXHp') {
      req.collection.insert(req.body)
      .then(function (result) {
        res.status(201).send(result)
      })
      .catch(function (error) {
        next('Internal server error')
      })
    } else {
      res.send('you are trying to hack us :o').status(403)
    }
  },
  fromCSV (req, res) {
    if (req.body.token == 'e1oIojaEj54tfSqPgAIqiBb9YrlAXXHp') {
      var stream = fs.createReadStream(__dirname + '/../dist/resumes.csv')

      var csvStream = csv()
          .on('data', function (data) {
            let studentArray = data
               // fullName, image, location, disponibility, lookingFor1/lookingFor2, html/css, @usertwitter, person@mail.com, gituser, /in/userlinkeding, cvUrl
            let studentObj = {
              fullName: studentArray[0],
              image: studentArray[1],
              location: studentArray[2],
              disponibility: studentArray[3],
              lookingFor: studentArray[4].split('/'),
              skills: studentArray[5].split('/'),
              contacts: {
                twitter: studentArray[6],
                mail: studentArray[7],
                github: studentArray[8],
                linkedin: studentArray[9]
              },
              cv: studentArray[10]
            }
            req.collection.insert(studentObj)
               .then(function (result) {
                 console.log(result)
               })
               .catch(function (error) {
                 next('Internal server error')
               })
          })
          .on('end', function () {
            res.send('Parsing DONE').status(200).end()
            console.log('done')
          })

      stream.pipe(csvStream)
    } else {
      res.send('you are trying to hack us :o').status(403)
    }
  },
  updateStudent (req, res, next) {
    if (req.body.token == 'e1oIojaEj54tfSqPgAIqiBb9YrlAXXHp') {
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
  removeStudent (req, res) {
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
