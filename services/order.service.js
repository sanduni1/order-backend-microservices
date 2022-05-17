const Order = require('../models/order.model');

const addOrder = async (request, response) => {

  const order = new Order(request.body);

  console.log(order);


  await order.save((error, user) => {
    if(error){
      response.status(500).json({ error: error.message });
      console.log(error.message)
    }
    else{
      response.status(200).
      json({
        success: true,
        order: order
      })
    }
  });
}

const getOrder = async(request, response) => {
  try {
    User.findById(request.params.id, (error, data) => {
      if (error) {
        response.status(500).json({error: error.message});
      } else {
        response.status(200).json({
          success: true,
          order: data
        })
      }
    })
  } catch (e) {
    console.log(e);
  }
}
const getOrders = async (request, response) => {

  try{
    const order = await Order.find();
    response.status(200).
    json({
      success: true,
      order: order
    })
  } catch (error) {
    response.status(404).json({
      success: false,
      error: error.message
    });
  }
}

//change
const updateOrder = async (request, response) => {
  const order = new Order(request.body);

  await Order.findByIdAndUpdate(request.body._id,order,
    (error,order) => {
      if(error){
        console.log(error);
        response.status(500).json({ error: error.message });
      }
      else{
        response.status(200).
        json({
          success: true,
          order: order
        })
      }
    });
}

const deleteOrder = async (request, response) => {
  await Order.findByIdAndRemove(request.params.id,(error,order) => {
    if(error){
      response.status(500).json({ error: error.message });
    }
    else{
      response.status(200).
      json({
        success: true,
        order: order
      })
    }
  })
}




module.exports = {
  getOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder
}