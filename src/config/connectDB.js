import mongoose from 'mongoose';


async function connect(){
    
        
        await mongoose.connect('mongodb://127.0.0.1/blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }).then(() => console.log('MongoDB connection successful.'))
        .catch((error) => console.error("MongoDB connection failed:", error.message))
    
}

export default {connect}