const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DiscoverySchema = new Schema({
  found: { type: String, required: true, max: 200 },
  description: { type: String, required: true, max: 100 },
  dateTime: { type: String, required: true }
})

module.exports = mongoose.model('Discoverys', DiscoverySchema)
