const routes = require('express').Router();
const multer = require('multer');
const uploadConfig = require('./config/upload');

const postController = require('./app/controllers/PostController');


const upload = multer(uploadConfig);


routes.get('/postagens', postController.index);
routes.post('/postagens', upload.single('imagem'), postController.store);
routes.delete('/postagens/:id', postController.destroy);





module.exports = routes;