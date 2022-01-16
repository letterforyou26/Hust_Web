const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  title: { type: String, default: 'Bách khoa Hà Nội kỷ niệm Ngày nhà giáo Việt Nam 20/11', minlength: 1, maxlength: 255, required: true },
  thumbnail: { type: String, default: 'https://www.hust.edu.vn/image/journal/article?img_id=606310&t=1641118527019', required: true },
  content: { type: String, required: true },
  author: { type: String },
  createdAt: { type: Date, default: Date.now },
  type: { type: String }
});

module.exports = mongoose.model('post', Post);
                          // => courses