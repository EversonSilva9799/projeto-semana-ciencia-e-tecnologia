const query = require('../../database/connection');

class Post {
	getAll() {
		const sql = `CALL spGetPostagens()`;

		const postagens = query(sql);

		return postagens;
	}

	get(id, chavePesquisa) {
		const sql = `CALL spGetPostagem(?, ?)`;

		const postagem = query(sql, [ id, chavePesquisa ]);

		return postagem;
	}

	insert({ autor, filename, legenda, uniqueStore }) {
		const sql = `CALL spCadastrarPostagem(?, ?, ?, ?)`;
		const inserted = query(sql, [ autor, legenda, filename, uniqueStore ]);

		return inserted;
	}

	destroy(id) {
		const sql = `CALL spDeletarPostagem(?)`;

		const deleted = query(sql, [ id ]);

		return deleted;
	}
}

module.exports = new Post();
