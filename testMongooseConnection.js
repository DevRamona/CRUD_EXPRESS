const mongoose = require('mongoose');

mongoose.connect(  "mongodb+srv://ringabire:A8xLdQVosnkaOipU@cluster0.bw0on.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0"
    , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongoose connected to MongoDB!');
}).catch((error) => {
    console.error('Failed to connect with Mongoose:', error);
});
