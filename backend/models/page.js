const mongoose2 = require('mongoose')
const dbURI_page = PAGES_DB_URI
mongoose2.createConnection(dbURI_page)

const Schema = mongoose2.Schema

const pageSchema = new Schema({
    title: {type: String, required: [true, "Title is required !"]},
    detail: {type: String, required: [true, "Detail is required !"]},
    brief: {type: String, required: [true, "Brief is required !"]},
    developer: {type: String, required: [true, "Developer is required !"]}
})

const Page = mongoose2.model('Page', pageSchema)

module.exports = Page


