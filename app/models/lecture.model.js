'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var LectureSchema = new Schema({
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    presenter: {
        type: Schema.Types.ObjectId,
        ref: 'Presenter'
    },
    time: {
        type: Schema.Types.Date
    },
    vimeoLink: {
        type: Schema.Types.String
    },
    zoomLink: {
        type: Schema.Types.String
    },
    imageLink: {
        type: Schema.Types.String
    },
    status: {
        type: Schema.Types.Boolean,
        default: true
    },
    createdAt: {
        type: Schema.Types.Date
    },
    updatedAt: {
        type: Schema.Types.Date
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Credential'
    }
});

if (!LectureSchema.options.toJSON) {
    LectureSchema.options.toJSON = {};
}
LectureSchema.options.toJSON.transform = function(doc, ret, options) {
    delete ret.__v;
};

LectureSchema.plugin(deepPopulate, {} );

module.exports = mongoose.model('Lecture', LectureSchema);