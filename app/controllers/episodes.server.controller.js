'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
errorHandler = require('./errors.server.controller'),
Episode = mongoose.model('Episode'),
_ = require('lodash');

/**
 * Create a episode
 */
exports.create = function(req, res) {
	var episode = new Episode(req.body);

	episode.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(episode);
		}
	});
};

/**
 * Show the current manga
 */
exports.read = function(req, res) {
	res.json(req.episode);
};

/**
 * Update a manga
 */
exports.update = function(req, res) {
	var episode = req.episode;

	episode = _.extend(episode, req.body);

	episode.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(episode);
		}
	});
};

/**
 * Delete an article
 */
exports.delete = function(req, res) {
	var episode = req.episode;

	episode.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(episode);
		}
	});
};

/**
 * List of episode
 */
exports.list = function(req, res) {
	Episode.find().sort('name').exec(function(err, episodes) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(episodes);
		}
	});
};

/**
 * episode middleware
 */
exports.episodeByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'episode is invalid'
		});
	}

	Episode.findById(id).exec(function(err, article) {
		if (err) return next(err);
		if (!article) {
			return res.status(404).send({
				message: 'episode not found'
			});
		}
		req.episode = episode;
		next();
	});
};

/**
 * episode authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if ( _.includes(req.user.roles, "admin") ) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
