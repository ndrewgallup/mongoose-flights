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
      flights: flights,
      error: error,
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

export {
  newFlight as new,
  create,
  index,
  show,
}