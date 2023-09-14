const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max: 280,
      min: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toLocaleDateString()
    },
    username: {
      type: String,
      required: true,

    },
    reactions: [
      reactionSchema
    ]

    ,

  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
