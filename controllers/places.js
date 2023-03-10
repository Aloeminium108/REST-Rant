const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models/index.js')

router.get('/', (req, res) => {
  db.Place.find()
    .then(places => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})  

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log(err)
      res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(_ => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', { place })
  }) 
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(_ => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {

    if (req.body.rant === "on") {
      req.body.rant = true
    } else {
      req.body.rant = false
    }

    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
  })
  .catch(err => {
    res.render('error404')
  })
})


module.exports = router