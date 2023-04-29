const Client = require('../models/clientModel')
const mongoose = require('mongoose')

// get all clients
const getClients = async (req, res) => {
  const clients = await Client.find({}).sort({createdAt: -1})

  res.status(200).json(clients)
}

// get a single client
const getClient = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such client'})
  }

  const client = await Client.findById(id)

  if (!client) {
    return res.status(404).json({error: 'No such client'})
  }

  res.status(200).json(client)
}

// create a new client
const createClient = async (req, res) => {
  const {title, load, reps} = req.body

  // add to the database
  try {
    const client = await Client.create({ title, load, reps })
    res.status(200).json(client)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a client
const deleteClient = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such client'})
  }

  const client = await Client.findOneAndDelete({_id: id})

  if(!client) {
    return res.status(400).json({error: 'No such client'})
  }

  res.status(200).json(client)
}

// update a client
const updateClient = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such client'})
  }

  const client = await Client.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!client) {
    return res.status(400).json({error: 'No such client'})
  }

  res.status(200).json(client)
}

module.exports = {
  getClients,
  getClient,
  createClient,
  deleteClient,
  updateClient
}