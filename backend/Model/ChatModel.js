const mongoose = require("mongoose");
const chatSchema = mongoose.Schema({
    user_id: String,
    interview_name: String,
    interviewee_name: String,
    VideoLink: String,
    score: String,
    conversation: Array,
    Interrview_Duration: String,
    Interview_Time: String
});
const ChatModel = mongoose.model("history", chatSchema);

module.exports = { ChatModel };