const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const errorHandler = require('errorhandler')
const mongoDriver = require('mongodb').MongoClient

const routes = require('./routes')
const app = express()

const DB_URL =  process.env.MONGODB_URI || 'mongodb://localhost:27017'
const DATABASE = 'heroku_cfc3g6ss'
const PORT = process.env.PORT || 8080

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')))

mongoDriver.connect(DB_URL, function (err, client) {
  if (err) throw err;
  let db = client.db(DATABASE);
  let collection = db.collection('students');

  app.use(function (req, res, next) {
    req.collection = collection;
    next();
  });

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
  });

  app.post('/api/csv/students/', routes.students.fromCSV)

  app.get('/api/students', routes.students.getStudents);

  app.get('/api/students/:id', routes.students.getStudent);

  app.post('/api/login', function(req, res){
    if(req.body.password == "mokhles" && req.body.username == "admin"){
      res.send("e1oIojaEj54tfSqPgAIqiBb9YrlAXXHp")
    } else {
      res.send("you are trying to hack us :o").status(403)
    }
  })

  app.post('/api/check', function(req, res){
    if(req.body.token == "e1oIojaEj54tfSqPgAIqiBb9YrlAXXHp"){
      res.send({
        admin: true
      })
    } else {
      res.send("you are trying to hack us :o").status(403)
    }
  })

  app.post('/api/students', routes.students.addStudent);

  app.put('/api/students/:id', routes.students.updateStudent);

  app.delete('/api/students/:id', routes.students.removeStudent);

  app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
  });
});


app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));
