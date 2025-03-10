const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: { type: Boolean, default: false }, // New field for email verification
    verificationOTP: { type: String }, // Store OTP
    otpExpiresAt: { type: Date }, // OTP expiration time
    gender: {
      type: String,
      //  required: true,
    },
    dateOfBirth: {
      type: String,
      // required: true,
    },
    type: {
      type: String,
      // required: true,
    },
    location: {
      type: String,
      // required: true,
    },
    hometown: {
      type: String,
      // required: true,
    },
    datingPreferences: [
      {
        type: String,
      },
    ],
    lookingFor: {
      type: String,
      // required: true,
    },
    imageUrls: [
      {
        type: String, // Store URLs of profile pictures
      },
    ],
    prompts: [
      {
        question: {
          type: String,
          // required: true,
        },
        answer: {
          type: String,
          // required: true,
        },
      },
    ],
    //   genderPreference: {
    //     type: String,
    //     enum: ['male', 'female', 'both'],
    //     required: true,
    //   },
    //   ageRangePreference: {
    //     min: {
    //       type: Number,
    //       default: 18,
    //     },
    //     max: {
    //       type: Number,
    //       default: 99,
    //     },
    //   },
    likedProfiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    receivedLikes: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        image: {
          type: String,
          // required: true,
        },
        comment: {
          type: String,
        },
      },
    ],
    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    lastActive: {
      type: Date,
      default: Date.now,
    },
    visibility: {
      type: String,
      enum: ['public', 'hidden'],
      default: 'public',
    },
    blockedUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    notificationPreferences: {
      // Define notification preferences here
    },
  });


  // Hash password before saving user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

  // Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
