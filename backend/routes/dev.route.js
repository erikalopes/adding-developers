const express = require('express');
const app = express();
const devRoute = express.Router();

let Developers = require('../models/Developers');


// Add dev
devRoute.route('/create').post((req, res, next) => {
  Developers.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Developers
devRoute.route('/').get((req, res) => {
  Developers.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Developers
devRoute.route('/read/:id').get((req, res) => {
  Developers.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Developers
devRoute.route('/update/:id').put((req, res, next) => {
  Developers.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Developers
devRoute.route('/delete/:id').delete((req, res, next) => {
  Developers.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = devRoute;