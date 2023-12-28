const mongoose = require("mongoose");
const blacklistSchema = mongoose.Schema({
    token: String,
}, {
    versionKey: false
})
const BlackListModel = mongoose.model("list", blacklistSchema);
module.exports = { BlackListModel };