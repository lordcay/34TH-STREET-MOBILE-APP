
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3000;
// const cors = require('cors');

// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// app.use(cors());

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.use(express.json());

// const jwt = require('jsonwebtoken');

// mongoose
// //   .connect('mongodb+srv://street:street@93@cluster0.9ymc0.mongodb.net/')
//   .connect('mongodb+srv://street:street@93@cluster0.9ymc0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(error => {
//     console.log('Error connecting to MongoDB', error);
//   });

// app.listen(port, () => {
//   console.log('Server is running on 3000');
// });

// const User = require('./models/user');
// const Chat = require('./models/message');

// const generateToken = user => {
//   // Define your secret key used to sign the token
//   const secretKey = crypto.randomBytes(32).toString('hex');

//   // Define the token payload (you can include any user data you want)
//   const payload = {
//     userId: user._id,
//     email: user.email,
//     // Add any other user data you want to include
//   };

//   // Generate the token with the payload and secret key
//   const token = jwt.sign(payload, secretKey, {expiresIn: '1d'}); // Token expires in 1 hour

//   return token;
// };

// // Backend Route to Create User and Generate Token
// app.post('/register', async (req, res) => {
//   try {
//     // Extract user data from the request body
//     const userData = req.body;

//     // Create a new user using the User model
//     const newUser = new User(userData);

//     await newUser.save();

//     const secretKey = crypto.randomBytes(32).toString('hex');

//     // Generate a token for the new user (you may use JWT or any other token generation mechanism)
//     const token = jwt.sign({userId: newUser._id}, secretKey, {expiresIn: '1d'});
//     // Return the new user data along with the token
//     res.status(201).json({token});
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// });

// // app.get('/user', async (req, res) => {
// //   try {
// //     // Get the user details based on the user ID from the authentication token
// //     const userId = req.user.id; // Assuming the user ID is stored in the request object after authentication
// //     const user = await User.findById(userId);

// //     if (!user) {
// //       return res.status(404).json({message: 'User not found'});
// //     }

// //     res.status(200).json(user);
// //   } catch (error) {
// //     console.error('Error fetching user details:', error);
// //     res.status(500).json({message: 'Internal server error'});
// //   }
// // });

// //fetch users data
// app.get('/users/:userId', async (req, res) => {
//   try {
//     const {userId} = req.params;

//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(500).json({message: 'User not found'});
//     }

//     return res.status(200).json({user});
//   } catch (error) {
//     res.status(500).json({message: 'Error fetching the user details'});
//   }
// });

// //endpoint to login
// app.post('/login', async (req, res) => {
//   try {
//     const {email, password} = req.body;

//     //check if the user exists already
//     const user = await User.findOne({email});
//     if (!user) {
//       return res.status(401).json({message: 'Invalid email or password'});
//     }

//     //check in password is correct
//     if (user.password !== password) {
//       return res.status(401).json({message: 'Invalide password'});
//     }

//     const secretKey = crypto.randomBytes(32).toString('hex');

//     const token = jwt.sign({userId: user._id}, secretKey, {expiresIn: '1d'});

//     return res.status(200).json({token});
//   } catch (error) {
//     res.status(500).json({message: 'login failed'});
//   }
// });

// app.get('/matches', async (req, res) => {
//   try {
//     const {userId} = req.query;

//     // Fetch user's dating preferences and type
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({message: 'User not found'});
//     }

//     let filter = {}; // Initialize filter as an empty object

//     if (user.gender === 'Men') {
//       filter.gender = 'Women';
//     } else if (user.gender === 'Women') {
//       filter.gender = 'Men';
//     }

//     // Construct query based on dating preferences and type
//     let query = {
//       _id: {$ne: userId},
//     };

//     // if (user.datingPreferences && user.datingPreferences.length > 0) {
//     //   filter.datingPreferences = user.datingPreferences;
//     // }
//     if (user.type) {
//       filter.type = user.type; // Assuming user.type is a single value
//     }

//     const currentUser = await User.findById(userId)
//       .populate('matches', '_id')
//       .populate('likedProfiles', '_id');

//     // Extract IDs of friends
//     const friendIds = currentUser.matches.map(friend => friend._id);

//     // Extract IDs of crushes
//     const crushIds = currentUser.likedProfiles.map(crush => crush._id);

//     console.log('filter', filter);

//     // Fetch matches based on query
//     const matches = await User.find(filter)
//       .where('_id')
//       .nin([userId, ...friendIds, ...crushIds]);

//     return res.status(200).json({matches});
//   } catch (error) {
//     console.error('Error fetching matches:', error);
//     res.status(500).json({message: 'Internal server error'});
//   }
// });

// // Endpoint for liking a profile
// app.post('/like-profile', async (req, res) => {
//   try {
//     const {userId, likedUserId, image, comment} = req.body;

//     // Update the liked user's receivedLikes array
//     await User.findByIdAndUpdate(likedUserId, {
//       $push: {
//         receivedLikes: {
//           userId: userId,
//           image: image,
//           comment: comment,
//         },
//       },
//     });
//     // Update the user's likedProfiles array
//     await User.findByIdAndUpdate(userId, {
//       $push: {
//         likedProfiles: likedUserId,
//       },
//     });

//     res.status(200).json({message: 'Profile liked successfully'});
//   } catch (error) {
//     console.error('Error liking profile:', error);
//     res.status(500).json({message: 'Internal server error'});
//   }
// });

// app.get('/received-likes/:userId', async (req, res) => {
//   try {
//     const {userId} = req.params;

//     const likes = await User.findById(userId)
//       .populate('receivedLikes.userId', 'firstName imageUrls prompts')
//       .select('receivedLikes');

//     res.status(200).json({receivedLikes: likes.receivedLikes});
//   } catch (error) {
//     console.error('Error fetching received likes:', error);
//     res.status(500).json({message: 'Internal server error'});
//   }
// });

// //endpoint to create a match betweeen two people
// app.post('/create-match', async (req, res) => {
//   try {
//     const {currentUserId, selectedUserId} = req.body;

//     //update the selected user's crushes array and the matches array
//     await User.findByIdAndUpdate(selectedUserId, {
//       $push: {matches: currentUserId},
//       $pull: {likedProfiles: currentUserId},
//     });

//     //update the current user's matches array recievedlikes array
//     await User.findByIdAndUpdate(currentUserId, {
//       $push: {matches: selectedUserId},
//     });

//     // Find the user document by ID and update the receivedLikes array
//     const updatedUser = await User.findByIdAndUpdate(
//       currentUserId,
//       {
//         $pull: {receivedLikes: {userId: selectedUserId}},
//       },
//       {new: true},
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//   }


//     // If the user document was successfully updated
//     res.status(200).json({message: 'ReceivedLikes updated successfully'});

//   } catch (error) {
//     res.status(500).json({message: 'Error creating a match', error});
//   }
// });

// // Endpoint to get all matches of a specific user
// app.get('/get-matches/:userId', async (req, res) => {
//   try {
//     const {userId} = req.params;

//     // Find the user by ID and populate the matches field
//     const user = await User.findById(userId).populate(
//       'matches',
//       'firstName imageUrls',
//     );

//     if (!user) {
//       return res.status(404).json({message: 'User not found'});
//     }

//     // Extract matches from the user object
//     const matches = user.matches;

//     res.status(200).json({matches});
//   } catch (error) {
//     console.error('Error getting matches:', error);
//     res.status(500).json({message: 'Internal server error'});
//   }
// });

// io.on('connection', socket => {
//   console.log('a user is connected');

//   socket.on('sendMessage', async data => {
//     try {
//       const {senderId, receiverId, message} = data;

//       console.log('data', data);

//       const newMessage = new Chat({senderId, receiverId, message});
//       await newMessage.save();

//       //emit the message to the receiver
//       io.to(receiverId).emit('receiveMessage', newMessage);
//     } catch (error) {
//       console.log('Error handling the messages');
//     }
//     socket.on('disconnet', () => {
//       console.log('user disconnected');
//     });
//   });
// });

// http.listen(8000, () => {
//   console.log('Socket.IO server running on port 8000');
// });

// app.get('/messages', async (req, res) => {
//   try {
//     const {senderId, receiverId} = req.query;

//     console.log(senderId);
//     console.log(receiverId);

//     const messages = await Chat.find({
//       $or: [
//         {senderId: senderId, receiverId: receiverId},
//         {senderId: receiverId, receiverId: senderId},
//       ],
//     }).populate('senderId', '_id name');

//     res.status(200).json(messages);
//   } catch (error) {
//     res.status(500).json({message: 'Error in getting messages', error});
//   }
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const app = express();
// const port = 3000;

// const uri = "mongodb://street:street@93@cluster0.9ymc0.mongodb.net/";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB Atlas via MongoClient.");
//   } catch (error) {
//     console.error("MongoClient connection failed:", error);
//   }
// }

// async function connectWithMongoose() {
//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB Atlas via Mongoose.");
//   } catch (error) {
//     console.error("Mongoose connection failed:", error);
//   }
// }

// async function initializeConnections() {
//   await connectToMongoDB();
//   await connectWithMongoose();
// }

// initializeConnections();

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });



// Last modified

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 4000;
// const cors = require('cors');

// const http = require('http').createServer(app);
// const io = require('socket.io')(http);

// app.use(cors());

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.use(express.json());

// const jwt = require('jsonwebtoken');

// mongoose
// //   .connect('mongodb://street:street@93@cluster0.9ymc0.mongodb.net/')
//   // .connect('mongodb+srv://streets:streets@cluster0.o9x1z.mongodb.net/')
//   .connect('mongodb+srv://caleb:caleb@cluster0.f2o21.mongodb.net/')
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(error => {
//     console.log('Error connecting to MongoDB', error);
//   });

// app.listen(port, () => {
//   console.log('Server is running on 4000');
// });

// const User = require('./models/user');
// const Chat = require('./models/message');

// const generateToken = user => {
//   // Define your secret key used to sign the token
//   const secretKey = crypto.randomBytes(32).toString('hex');

//   // Define the token payload (you can include any user data you want)
//   const payload = {
//     userId: user._id,
//     email: user.email,
//     // Add any other user data you want to include
//   };

//   // Generate the token with the payload and secret key
//   const token = jwt.sign(payload, secretKey, {expiresIn: '1d'}); // Token expires in 1 hour

//   return token;
// };


// // Backend Route to Create User and Generate Token

// app.post('/register', async (req, res) => {
//   try {
//     const { firstName, email, password, dateOfBirth, gender, type, location, lookingFor, hometown } = req.body;

//     // Check if all required fields are provided
//     if (!firstName || !email || !password || !dateOfBirth || !gender || !type || !location || !lookingFor || !hometown) {
//       return res.status(400).json({ error: "All required fields must be provided." });
//     }

//     // Create a new user
//     const newUser = new User(req.body);
//     await newUser.save();

//     // Generate token
//     const secretKey = crypto.randomBytes(32).toString('hex');
//     const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: '1d' });

//     res.status(201).json({ token, message: "User registered successfully!" });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Backend Route to Create User and Generate Token
// // app.post('/register', async (req, res) => {
// //   try {
// //     // Extract user data from the request body
// //     const userData = req.body;

// //     // Create a new user using the User model
// //     const newUser = new User(userData);

// //     await newUser.save();

// //     const secretKey = crypto.randomBytes(32).toString('hex');

// //     // Generate a token for the new user (you may use JWT or any other token generation mechanism)
// //     const token = jwt.sign({userId: newUser._id}, secretKey, {expiresIn: '1d'});
// //     // Return the new user data along with the token
// //     res.status(201).json({token});
// //   } catch (error) {
// //     console.error('Error creating user:', error);
// //     res.status(500).json({error: 'Internal Server Error'});
// //   }
// // });

// // app.get('/user', async (req, res) => {
// //   try {
// //     // Get the user details based on the user ID from the authentication token
// //     const userId = req.user.id; // Assuming the user ID is stored in the request object after authentication
// //     const user = await User.findById(userId);

// //     if (!user) {
// //       return res.status(404).json({message: 'User not found'});
// //     }

// //     res.status(200).json(user);
// //   } catch (error) {
// //     console.error('Error fetching user details:', error);
// //     res.status(500).json({message: 'Internal server error'});
// //   }
// // });

// //fetch users data
// app.get('/users/:userId', async (req, res) => {
//   try {
//     const {userId} = req.params;

//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(500).json({message: 'User not found'});
//     }

//     return res.status(200).json({user});
//   } catch (error) {
//     res.status(500).json({message: 'Error fetching the user details'});
//   }
// });

// //endpoint to login
// app.post('/login', async (req, res) => {
//   try {
//     const {email, password} = req.body;

//     //check if the user exists already
//     const user = await User.findOne({email});
//     if (!user) {
//       return res.status(401).json({message: 'Invalid email or password'});
//     }

//     //check in password is correct
//     if (user.password !== password) {
//       return res.status(401).json({message: 'Invalide password'});
//     }

//     const secretKey = crypto.randomBytes(32).toString('hex');

//     const token = jwt.sign({userId: user._id}, secretKey, {expiresIn: '1d'});

//     return res.status(200).json({token});
//   } catch (error) {
//     res.status(500).json({message: 'login failed'});
//   }
// });



// app.get('/matches', async (req, res) => {
//   try {
//     const { userId } = req.query;

//     // Find the current user
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     let filter = { _id: { $ne: userId } }; // Exclude current user

//     // Match based on gender preferences
//     if (user.gender === 'Men') {
//       filter.gender = 'female'; // Looking for women
//     } else if (user.gender === 'Women') {
//       filter.gender = 'Men'; // Looking for men
//     }

//     // Ensure type (Straight, Gay, Bi) is matching
//     if (user.type) {
//       filter.type = user.type; 
//     }

//     // Exclude already liked/matched users
//     const currentUser = await User.findById(userId)
//       .populate('matches', '_id')
//       .populate('likedProfiles', '_id');

//     const excludedIds = [
//       userId,
//       ...currentUser.matches.map(m => m._id),
//       ...currentUser.likedProfiles.map(lp => lp._id),
//     ];

//     const matches = await User.find(filter).where('_id').nin(excludedIds);

//     return res.status(200).json({ matches });
//   } catch (error) {
//     console.error('Error fetching matches:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });



// // app.get('/matches', async (req, res) => {
// //   try {
// //     const { userId } = req.query;
// //     const user = await User.findById(userId);
// //     if (!user) return res.status(404).json({ message: 'User not found' });

// //     let filter = { gender: user.gender === 'Male' ? 'Female' : 'Male' };
// //     filter.type = user.type;

// //     const currentUser = await User.findById(userId)
// //       .populate('matches', '_id')
// //       .populate('likedProfiles', '_id');

// //     const friendIds = currentUser.matches.map(friend => friend._id);
// //     const crushIds = currentUser.likedProfiles.map(crush => crush._id);

// //     const matches = await User.find(filter).where('_id').nin([userId, ...friendIds, ...crushIds]);

// //     res.status(200).json({ matches });
// //   } catch (error) {
// //     console.error('Error fetching matches:', error);
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // });


// // app.get('/matches', async (req, res) => {
// //   try {
// //     const {userId} = req.query;

// //     // Fetch user's dating preferences and type
// //     const user = await User.findById(userId);
// //     if (!user) {
// //       return res.status(404).json({message: 'User not found'});
// //     }

// //     let filter = {}; // Initialize filter as an empty object

// //     if (user.gender === 'Men') {
// //       filter.gender = 'Women';
// //     } else if (user.gender === 'Women') {
// //       filter.gender = 'Men';
// //     }

// //     // Construct query based on dating preferences and type
// //     let query = {
// //       _id: {$ne: userId},
// //     };

// //     // if (user.datingPreferences && user.datingPreferences.length > 0) {
// //     //   filter.datingPreferences = user.datingPreferences;
// //     // }
// //     if (user.type) {
// //       filter.type = user.type; // Assuming user.type is a single value
// //     }

// //     const currentUser = await User.findById(userId)
// //       .populate('matches', '_id')
// //       .populate('likedProfiles', '_id');

// //     // Extract IDs of friends
// //     const friendIds = currentUser.matches.map(friend => friend._id);

// //     // Extract IDs of crushes
// //     const crushIds = currentUser.likedProfiles.map(crush => crush._id);

// //     console.log('filter', filter);

// //     // Fetch matches based on query
// //     const matches = await User.find(filter)
// //       .where('_id')
// //       .nin([userId, ...friendIds, ...crushIds]);

// //     return res.status(200).json({matches});
// //   } catch (error) {
// //     console.error('Error fetching matches:', error);
// //     res.status(500).json({message: 'Internal server error'});
// //   }
// // });




// // Endpoint for liking a profile






// app.post('/like-profile', async (req, res) => {
//   try {
//     const {userId, likedUserId, image, comment} = req.body;

//     // Update the liked user's receivedLikes array
//     await User.findByIdAndUpdate(likedUserId, {
//       $push: {
//         receivedLikes: {
//           userId: userId,
//           image: image,
//           comment: comment,
//         },
//       },
//     });
//     // Update the user's likedProfiles array
//     await User.findByIdAndUpdate(userId, {
//       $push: {
//         likedProfiles: likedUserId,
//       },
//     });

//     res.status(200).json({message: 'Profile liked successfully'});
//   } catch (error) {
//     console.error('Error liking profile:', error);
//     res.status(500).json({message: 'Internal server error'});
//   }
// });

// app.get('/received-likes/:userId', async (req, res) => {
//   try {
//     const {userId} = req.params;

//     const likes = await User.findById(userId)
//       .populate('receivedLikes.userId', 'firstName imageUrls prompts')
//       .select('receivedLikes');

//     res.status(200).json({receivedLikes: likes.receivedLikes});
//   } catch (error) {
//     console.error('Error fetching received likes:', error);
//     res.status(500).json({message: 'Internal server error'});
//   }
// });

// //endpoint to create a match betweeen two people
// app.post('/create-match', async (req, res) => {
//   try {
//     const {currentUserId, selectedUserId} = req.body;

//     //update the selected user's crushes array and the matches array
//     await User.findByIdAndUpdate(selectedUserId, {
//       $push: {matches: currentUserId},
//       $pull: {likedProfiles: currentUserId},
//     });

//     //update the current user's matches array recievedlikes array
//     await User.findByIdAndUpdate(currentUserId, {
//       $push: {matches: selectedUserId},
//     });

//     // Find the user document by ID and update the receivedLikes array
//     const updatedUser = await User.findByIdAndUpdate(
//       currentUserId,
//       {
//         $pull: {receivedLikes: {userId: selectedUserId}},
//       },
//       {new: true},
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//   }


//     // If the user document was successfully updated
//     res.status(200).json({message: 'ReceivedLikes updated successfully'});

//   } catch (error) {
//     res.status(500).json({message: 'Error creating a match', error});
//   }
// });

// // Endpoint to get all matches of a specific user
// app.get('/get-matches/:userId', async (req, res) => {
//   try {
//     const {userId} = req.params;

//     // Find the user by ID and populate the matches field
//     const user = await User.findById(userId).populate(
//       'matches',
//       'firstName imageUrls',
//     );

//     if (!user) {
//       return res.status(404).json({message: 'User not found'});
//     }

//     // Extract matches from the user object
//     const matches = user.matches;

//     res.status(200).json({matches});
//   } catch (error) {
//     console.error('Error getting matches:', error);
//     res.status(500).json({message: 'Internal server error'});
//   }
// });

// io.on('connection', socket => {
//   console.log('a user is connected');

//   socket.on('sendMessage', async data => {
//     try {
//       const {senderId, receiverId, message} = data;

//       console.log('data', data);

//       const newMessage = new Chat({senderId, receiverId, message});
//       await newMessage.save();

//       //emit the message to the receiver
//       io.to(receiverId).emit('receiveMessage', newMessage);
//     } catch (error) {
//       console.log('Error handling the messages');
//     }
//     socket.on('disconnet', () => {
//       console.log('user disconnected');
//     });
//   });
// });

// http.listen(8000, () => {
//   console.log('Socket.IO server running on port 8000');
// });

// app.get('/messages', async (req, res) => {
//   try {
//     const {senderId, receiverId} = req.query;

//     console.log(senderId);
//     console.log(receiverId);

//     const messages = await Chat.find({
//       $or: [
//         {senderId: senderId, receiverId: receiverId},
//         {senderId: receiverId, receiverId: senderId},
//       ],
//     }).populate('senderId', '_id name');

//     res.status(200).json(messages);
//   } catch (error) {
//     res.status(500).json({message: 'Error in getting messages', error});
//   }
// });




// last working

// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const crypto = require('crypto');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config(); // Load environment variables

// const app = express();
// const port = 4000;

// // Enable CORS
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.json());

// const User = require('./models/user');
// const Chat = require('./models/message');

// const SECRET_KEY = process.env.JWT_SECRET || 'defaultsecretkey'; // Use environment variable

// // Connect to MongoDB
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(error => console.error('Error connecting to MongoDB:', error));

// // Start Server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// // Generate JWT Token
// const generateToken = user => {
//   return jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1d' });
// };

// // User Registration
// app.post('/register', async (req, res) => {
//   try {
//     const { firstName, email, password } = req.body;
//     // const { firstName, email, password, dateOfBirth, gender, type, location, lookingFor, hometown } = req.body;

//     // if (!firstName || !email || !password || !dateOfBirth || !gender || !type || !location || !lookingFor || !hometown) {
//     if (!firstName || !email || !password ) {
//       return res.status(400).json({ error: 'All required fields must be provided.' });
//     }

//     // Check if the email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email is already registered.' });
//     }

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create and save new user
//     const newUser = new User({
//       ...req.body,
//       password: hashedPassword, // Store hashed password
//     });

//     await newUser.save();

//     // Generate token
//     const token = generateToken(newUser);

//     res.status(201).json({ token, message: 'User registered successfully!' });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // User Login
// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Compare password with hashed password
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Generate token
//     const token = generateToken(user);

//     return res.status(200).json({ token });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Login failed' });
//   }
// });

// // Fetch User Data
// app.get('/users/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     return res.status(200).json({ user });
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching user details' });
//   }
// });

// // Find Matches
// // app.get('/matches', async (req, res) => {
// //   try {
// //     const { userId } = req.query;

// //     // Find current user
// //     const user = await User.findById(userId);
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }

// //     let filter = { _id: { $ne: userId } }; // Exclude current user

// //     // Match based on gender preferences
// //     if (user.gender === 'Men') {
// //       filter.gender = 'Women'; // Looking for women
// //     } else if (user.gender === 'Women') {
// //       filter.gender = 'Men'; // Looking for men
// //     }

// //     // Match based on type (Straight, Gay, Bi)
// //     if (user.type) {
// //       filter.type = user.type;
// //     }

// //     // Exclude already matched or liked users
// //     const currentUser = await User.findById(userId)
// //       .populate('matches', '_id')
// //       .populate('likedProfiles', '_id');

// //     const excludedIds = [
// //       userId,
// //       ...currentUser.matches.map(m => m._id),
// //       ...currentUser.likedProfiles.map(lp => lp._id),
// //     ];

// //     const matches = await User.find(filter).where('_id').nin(excludedIds);

// //     return res.status(200).json({ matches });
// //   } catch (error) {
// //     console.error('Error fetching matches:', error);
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // });


// // Find Matches - Show all users except the logged-in user and already matched/liked users
// app.get('/matches', async (req, res) => {
//   try {
//     const { userId } = req.query;

//     // Find current user
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     let filter = { _id: { $ne: userId } }; // Exclude current user

//     // Exclude already matched or liked users
//     const currentUser = await User.findById(userId)
//       .populate('matches', '_id')
//       .populate('likedProfiles', '_id');

//     const excludedIds = [
//       userId,
//       ...currentUser.matches.map(m => m._id),
//       ...currentUser.likedProfiles.map(lp => lp._id),
//     ];

//     // Fetch all users excluding the current user and previously matched/liked users
//     const matches = await User.find({ _id: { $nin: excludedIds } });

//     return res.status(200).json({ matches });
//   } catch (error) {
//     console.error('Error fetching matches:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());

// Database Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
