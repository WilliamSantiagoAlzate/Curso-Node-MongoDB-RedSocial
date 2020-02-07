const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;

const commentSchema = new Schema({
    image_id: {type: ObjectId},
    name: {type: String},
    email: {type: String},
    comment: {type: String},
    gravatar: {type: String},
    timestamp: {type: Date, default: Date.now}
});

commentSchema.virtual('image')
    .set(function(image) {
        this._image = image;
    })
    .get(function() {
        return this._image;
    });

module.exports = model('Comment', commentSchema);