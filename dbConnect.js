const mongoose = require('mongoose');
const MONGODB_URI = mongodb+srv://<db_username>:Narutovs90@cluster0.7bhbc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;
if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');
mongoose.connect(MONGODB_URI, {
dbName: 'finly-db',
bufferCommands: false,
});
console.log('Connected to MongoDB');