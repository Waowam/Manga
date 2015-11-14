'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var MangaSchema = new Schema({
	nom: {
		type: String,
		default: '',
		required: 'Name cannot be blank'
	},
	annee_parution: {
		type: Number,
		default: ''
	},
	fini: {
		type: Boolean,
		default: false
	},
	auteur: {
		type: [String],
		default: []
	},
	studio: {
		type: String,
		default: ''
	},
	genre: {
		type: [String],
		default: ''
	},
	image: {
		type: String,
		default: ''
	},
	licence: {
		type: Boolean,
		default: false
	},
	description: {
		type: String,
		default: ''
	},
	score: {
		type: Number,
		default: 0
	}
});

mongoose.model('Manga', MangaSchema);
