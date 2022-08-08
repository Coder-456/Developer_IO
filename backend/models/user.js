const mongoose1 = require('mongoose')
const dbURI_user = USERS_DB_URI
mongoose1.connect(dbURI_user)

const Schema = mongoose1.Schema

const userSchema = new Schema({
    userID : {type: String, required: [true, "Username is required !"]}
})

const User = mongoose1.model('User', userSchema)

module.exports = User

