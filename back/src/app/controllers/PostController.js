const Post = require('../models/Post');
const fs = require('fs');
const path = require('path');

class PostController {
	async index(req, res) {
		const postagens = await Post.getAll();

		return res.status(200).json(postagens[0]);
	}

	get(req, res) {}

	async store(req, res) {
		const { autor, legenda } = req.body;
		const { filename } = req.file;

		const uniqueStore = new Date().getTime().toString() + new Date().getTime().toString();

		const post = { autor, legenda, filename, uniqueStore };

		const inserted = await Post.insert(post);

		if (inserted.affectedRows === 1) {
			const postagem = await Post.get(uniqueStore, 1);

			req.io.emit('postagem', postagem[0][0]);
			return res.status(200).json({ status: true });
		}

		return res.status(500).json({ status: false });
	}

	update(req, res) {}

	async destroy(req, res) {
		const { id } = req.params;

		const postagem = await Post.get(id, 0);

		if (postagem[0].length === 1) {
			var { imagem } = postagem[0][0];
		} else {
			return res.json({ status: false });
		}

		const deleted = await Post.destroy(id);

		if (deleted.affectedRows === 0) {
			return res.json({ status: false });
		} else {
			try {
				fs.unlinkSync(path.resolve(__dirname, '..', '..', '..', 'uploads', imagem));
			} catch (err) {
				console.log(err);
			}
			req.io.emit('postagemRemovida', postagem[0][0]);
			return res.status(200).json({ status: true });
		}
	}
}

module.exports = new PostController();
