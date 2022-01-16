const Post = require('../models/Post')

class HomeController {

    // [GET] /
    index(req, res) {
        Post.find({}, function (err, posts) {
            if (!err) res.json(posts);
            else next(err);
        })

        // New.find({})
        //     .then(news => {
        //         news = news.map(newz => newz.toObject());
        //         res.render('home', { news })
        //     })
        //     .catch(err => next(err));
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new HomeController;
