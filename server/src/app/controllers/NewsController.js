const Post = require('../models/Post')

class NewsController {

    // [GET] /tin-tuc
    index(req, res) {
        Post.find({}, function (err, posts) {
            if (!err) res.json(posts);
            else next(err);
        })
    }

    // [GET] /tin-tuc/:slug
    show(req, res) {
        Post.findOne({ _id: req.params.slug }, function (err, post) {
            if (!err) {
                res.json(post);
            }
            else {
                next(err);
            }
        })
    }

    // [POST] /tin-tuc/create
    post(req, res) {
        console.log(req.body);
        const data = req.body;
        const post = new Post(data);
        post.save()
            .then(() => res.json({ 'message': 'Created successfully!' }))
            .catch(() => res.json({ 'message': 'Create failed!' }))
    }
}

module.exports = new NewsController;
