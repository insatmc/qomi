  const path = require('path')
  const express = require('express')
  const logger = require('morgan')
  const bodyParser = require('body-parser')
  const errorHandler = require('errorhandler')
  const mongoDriver = require('mongodb').MongoClient

  const routes = require('./routes')
  const app = express()

  const DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017'
  const DATABASE = 'heroku_cfc3g6ss'
  const PORT = process.env.PORT || 8080

  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(express.static(path.join(__dirname, 'dist')))

  var cookieParser = require('cookie-parser')
  var session = require('express-session')
  var mongoose = require('mongoose')
  var passport = require('passport')
  var User = require('./models/user')
  const LocalStrategy = require('passport-local').Strategy

  mongoose.connect(DB_URL)
  var db = mongoose.connection

  // BodyParser Middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())

  // Express Session
  app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
  }))

  // Passport init
  app.use(passport.initialize())
  app.use(passport.session())

  app.post('/register', function (req, res) {
    var password = req.body.password
    var password2 = req.body.password2
    console.log(req.body)
    if (password == password2) {
      var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      })

      console.log(newUser)

      User.createUser(newUser, function (err, user) {
        if (err) throw err
        res.send(user).end()
      })
    } else {
      res.status(500).send("{errors: \"Passwords don't match\"}").end()
    }
  })

  passport.use('local', new LocalStrategy(
  function (username, password, done) {
    User.getUserByUsername(username, function (err, user) {
      console.log(user)
      if (err) throw err
      if (!user) {
        return done(null, false, {message: 'Unknown User'})
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err
        if (isMatch) {
          return done(null, user)
        } else {
          return done(null, false, {message: 'Invalid password'})
        }
      })
    })
  }))

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
      done(err, user)
    })
  })

  app.post('/login',
    passport.authenticate('local'),
    function (req, res) {
      res.send(req.user.id)
    }
  )

  app.get('/user', function (req, res) {
    res.send(req.user)
  })

  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })

  mongoDriver.connect(DB_URL, function (err, client) {
    if (err) throw err
    let db = client.db(DATABASE)
    let collection = db.collection('students')

    app.use(function (req, res, next) {
      req.collection = collection
      next()
    })

    app.get('/', function (req, res) {
      res.sendFile(__dirname + '/dist/index.html')
    })

    app.post('/api/csv/students/', routes.students.fromCSV)

    app.get('/api/students', routes.students.getStudents)

    app.get('/api/students/:id', routes.students.getStudent)

    app.post('/api/login', function (req, res) {
      if (req.body.password == '+QA}pR57b6NQ_?scL+' && req.body.username == 'admin') {
        res.send('e1oIojaEj54tfSqPgAIqiBb9YrlAXXHp')
      } else {
        res.status(403).send('you are trying to hack us :o')
      }
    })

    app.post('/api/check', function (req, res) {
      if (req.body.token == 'e1oIojaEj54tfSqPgAIqiBb9YrlAXXHp') {
        res.send({
          admin: true
        })
      } else {
        res.send('you are trying to hack us :o').status(403)
      }
    })

    app.post('/api/students', routes.students.addStudent)

    app.put('/api/students/:id', routes.students.updateStudent)

    app.delete('/api/students/:id', routes.students.removeStudent)

    let recruitsCollection = db.collection('recruits')

    app.use(function (req, res, next) {
      req.collection = recruitsCollection
      next()
    })

    app.get('/api/recruits', routes.recruits.getRecruitsRequests)

    app.get('/api/recruits/:id', routes.recruits.getRecruitsRequest)

    app.post('/api/recruits', routes.recruits.addRecruitsRequest)

    app.put('/api/recruits/:id', routes.recruits.updateRecruitsRequest)

    app.delete('api/recruits/:id', routes.recruits.removeRecruitsRequest)

    app.get('/*', function (req, res) {
      res.sendFile(__dirname + '/dist/index.html')
    })
  })

  app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
))
