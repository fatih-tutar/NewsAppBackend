
const News = require('../news/news');
const imageProcess = require('../util/imageProcess');

const createNews = async (req, res) => {
    const news = new News();
    const id = news.createId();

    try {
        const imageName = await imageProcess(req, id);
        news.create(req.body, id, imageName); // http://localhost:3000/image-name
        res.json({success: true, message: 'Post created successfully.'});
    } catch (error) {
        res.json({success: false, message: 'Something went wrong, server error!'});
        console.log('Error while creating news', error.message);
    }

}

module.exports = {
    createNews
}