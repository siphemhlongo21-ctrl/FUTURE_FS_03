const express     = require('express');
const router      = express.Router();
const ctrl        = require('../controllers/menuController');
const { protect } = require('../middleware/authMiddleware');

router.get('/',                   ctrl.getMenu);
router.get('/category/:category', ctrl.getMenuByCategory);
router.post('/',      protect,    ctrl.addMenuItem);
router.put('/:id',    protect,    ctrl.updateMenuItem);
router.delete('/:id', protect,    ctrl.deleteMenuItem);

module.exports = router;