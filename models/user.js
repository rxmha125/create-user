const mongoose = require("mongoose");

// Use environment variable for connection string (for local or production)
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/testapp1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error: ', err));

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
});

module.exports = mongoose.model('user', userSchema);
