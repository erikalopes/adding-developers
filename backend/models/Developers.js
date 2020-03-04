const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Developers = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   phoneNumber: {
      type: Number
   },
   linkedin:  {
      type: String
   },
   city: {
      type: String,
   },
   state: {
      type: String,
   },
   shift: {
      type: String,
   }
}, {
   collection: 'developers'
})

module.exports = mongoose.model('Developers', Developers)