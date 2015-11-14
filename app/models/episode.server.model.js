'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var EpisodeSchema = new Schema({
	titre: {
		type: String,
		default: '',
	},
	numero: {
		type: Number,
		min: 1,
		required: 'Number of episode required'
	},
	saison: {
		type: Number,
		min: 1,
		required: 'Number of saison required'
	},
	manga: {
		type: Schema.ObjectId,
		ref: 'Manga'
	},
	liens: [{
		url: {
			type: String,
			default: '',
			required: 'Url required'
		},
		trusted: {
			type: Number,
			min: 0,
			max: 100,
			required: 'Trusted figure is required'
		}
	}]
});

mongoose.model('Episode', EpisodeSchema);
