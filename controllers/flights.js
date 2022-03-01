import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: "Add Flight"
  })
}

function create(req, res) {
  for(let key in req.body) {
    if(req.body[key] === '') delete req.body[key]
  }
  const flight = new Flight(req.body)
  flight.save(function(error){
    if (error) return res.render('flights/new')
    res.redirect('/flights')
  })
}

function index(req, res) {
  Flight.find({}, function(error, flights){
    res.render('flights/index', {
      flights,
      error,
      title: 'All Flights',
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function(error, flight) {
    res.render('flights/show', {
      flight: flight,
      title: 'Flight Details',
    })
  })
}

function createTicket(req, res) {
  Flight.findById(req.params.id, function(error, flight) {
    flight.tickets.push(req.body)
    flight.save(function(error) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function(error, flight){
    res.redirect('/flights')
  })
}

function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.id, req.body, function(error, flight) {
    res.redirect(`/flights/${flight._id}`)
  })
}

function edit(req, res) {
  Flight.findById(req.params.id, function(error, flight){
    res.render('flights/edit', {
      flight,
      error,
      title: "Edit Flight",
    })
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  createTicket,
  deleteFlight as delete,
  update,
  edit,
}