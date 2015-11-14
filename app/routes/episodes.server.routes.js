'use strict';

/**
 * Module dependencies.
 */
var usersController = require('../../app/controllers/users.server.controller'),
	episodesController = require('../../app/controllers/episodes.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/episodes')
		.get(episodesController.list)
		.post(usersController.requiresLogin, episodesController.create);

	app.route('/episodes/:episodeId')
		.get(episodesController.read)
		.put(usersController.requiresLogin, episodesController.hasAuthorization, episodesController.update)
		.delete(usersController.requiresLogin, episodesController.hasAuthorization, episodesController.delete);

	// Finish by binding the article middleware
	app.param('episodeId', episodesController.episodeByID);
};
