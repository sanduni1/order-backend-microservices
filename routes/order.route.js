const express = require('express');
const router = express.Router();

const OrderService = require('../services/order.service');

module.exports = () => {

  router.get('/', OrderService.getOrders);
  router.get('/:id', OrderService.getOrder);
  router.post('/', OrderService.addOrder);
  router.put('/', OrderService.updateOrder);
  router.delete('/:id', OrderService.deleteOrder);

  return router;
}