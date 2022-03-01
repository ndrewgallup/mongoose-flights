import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)

//POST- 3000/
router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)

export {
  router
}
