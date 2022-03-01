import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

/* GET users listing. */
router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.show)


router.put('/:id', flightsCtrl.update)

//POST- 3000/
router.post('/', flightsCtrl.create)
router.post('/:id/tickets', flightsCtrl.createTicket)

router.delete('/:id', flightsCtrl.delete)

export {
  router
}
