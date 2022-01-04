import mongoose from 'mongoose';
const schema = mongoose.Schema;

const Account = new schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    sex: {type: String, required: true},
    avatar: {type: String, required: true},
    phone: {type: String, required: true},
    isAdmin: {type: Boolean, required: true},
},{
    timestamp: true,
})

export default mongoose.model('Account', Account)