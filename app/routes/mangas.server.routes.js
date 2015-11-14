'use strict';

/**
 * Module dependencies.
 */
var usersController = require('../../app/controllers/users.server.controller'),
	mangasController = require('../../app/controllers/mangas.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/mangas')
		.get(mangasController.list)
		.post(usersController.requiresLogin, mangasController.create);

	app.route('/mangas/:mangaId')
		.get(mangasController.read)
		.put(usersController.requiresLogin, mangasController.hasAuthorization, mangasController.update)
		.delete(usersController.requiresLogin, mangasController.hasAuthorization, mangasController.delete);

	// Finish by binding the article middleware
	app.param('mangaId', mangasController.mangaByID);
};
