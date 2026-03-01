const express     = require('express');
const router      = express.Router();
const ctrl        = require('../controllers/reservationController');
const { protect } = require('../middleware/authMiddleware');

router.post('/',          ctrl.createReservation);
router.get('/',  protect, ctrl.getAllReservations);
router.put('/:id/status', protect, ctrl.updateStatus);

module.exports = router;