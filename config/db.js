const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB=mongoose.connect('mongodb://localhost:27017/tododatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

module.exports=connectDB