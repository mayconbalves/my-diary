const Discovery = require('../models/discovery.model')

module.exports = {
  async discovery_create(req, res) {
    const discovery = await Discovery.create({
      found: req.body.found,
      description: req.body.description,
      dateTime: req.body.dateTime,
      comments: req.body.comments
    })

    return res.json(discovery)
  },

  async discovery_list(req, res) {
    const discovery = await Discovery.find({})

    return res.json(discovery)
  }
}
