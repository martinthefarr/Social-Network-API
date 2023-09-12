const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
      max_length: 50,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "err invalid email"
      ]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
        ref: 'thought',
    }]
      
      
    ,
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user',
    }],
  },

  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
userSchema.virtual("friendcount").get(function(){
  return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;
