export default {
    mutipleMongooseObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    },
    // dung cho thang co 1 documents
    mongooseToObject: function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}