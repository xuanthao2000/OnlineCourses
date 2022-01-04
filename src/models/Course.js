import mongoose from 'mongoose';
const schema = mongoose.Schema;

const Course = new schema({
    name: {type: String, minLength:1, maxLength:255, required: true},
    description: {type: String, maxLength:255,required: true},
    image: {type: String, maxLength:500},
    slug:{type: String,required: true},
    videoID:{type: String,required: true},
},{
    timeStamp: true,
})

export default mongoose.model('Course',Course)