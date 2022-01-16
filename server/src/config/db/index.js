const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/hust_web', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('db connected');
  } catch (error) {
    console.log('db connect fail');
  }
}

module.exports = { connect };
