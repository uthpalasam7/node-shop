require('dotenv').config();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

// Access the connection string from the environment variable
const uri = process.env.MONGO_URI;

let _db;

const mongoConnect = callback => {
    MongoClient.connect(uri).then(client => {
        console.log('Connected!');
        _db = client.db();
        callback();
    })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
