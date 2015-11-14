'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
errorHandler = require('./errors.server.controller'),
Manga = mongoose.model('Manga'),
_ = require('lodash');

/**
 * Create a manga
 */
exports.create = function(req, res) {
	var manga = new Manga(req.body);

	manga.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(manga);
		}
	});
};

/**
 * Show the current manga
 */
exports.read = function(req, res) {
	res.json(req.manga);
};

/**
 * Update a manga
 */
exports.update = function(req, res) {
	var manga = req.manga;

	manga = _.extend(manga, req.body);

	manga.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(manga);
		}
	});
};

/**
 * Delete an article
 */
exports.delete = function(req, res) {
	var manga = req.manga;

	manga.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(manga);
		}
	});
};

/**
 * List of Manga
 */
exports.list = function(req, res) {
	Manga.find().sort('name').exec(function(err, mangas) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(mangas);
		}
	});
};

/**
 * Manga middleware
 */
exports.mangaByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Manga is invalid'
		});
	}

	Manga.findById(id).exec(function(err, article) {
		if (err) return next(err);
		if (!article) {
			return res.status(404).send({
				message: 'Manga not found'
			});
		}
		req.manga = manga;
		next();
	});
};

/**
 * Manga authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if ( _.includes(req.user.roles, "admin") ) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
