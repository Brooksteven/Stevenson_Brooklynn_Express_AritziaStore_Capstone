import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true, lowercase: true },
    productName: { type: String, required: true, lowercase: true },
    productId: { type: String, required: true },
    quantity: { type: Number, min: 0, max: 100 },
    price: { type: Number, required: true, min: 0 }
},
{
    timestamps: true
})


const Order = mongoose.model('Order', orderSchema)

export default Order;