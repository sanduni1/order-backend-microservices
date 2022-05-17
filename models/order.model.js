const Mongoose = require('mongoose');

const orderSchema = new Mongoose.Schema({
  orderID: {
    type: String,
    required: true
  },
  orderCustomerID: {
    type: String
  },
  orderType: {
    type: String
  },
  orderNumber: {
    type: String
  },
  orderdescription: {
    type: String
  }
})

module.exports = Mongoose.model('Order', orderSchema);