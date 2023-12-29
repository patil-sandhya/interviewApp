const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
const { connection } = require("./db");
require('dotenv').config();
const openAi = require("openai");
const { interviewRouter } = require("./Router/InterviewRouter");
const { userRouter } = require("./Router/UserRouter");
const { chatRouter } = require("./Router/ChatRouter");

app.use(cors())
app.use("/interview", interviewRouter);
app.use("/user", userRouter);
app.use("/chat", chatRouter);

const openai = new openAi({
    apiKey: process.env.AI_KEY
})

app.post("/openai", async (req, res) => {
    try {
      const prompt = req.body.content
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: req.body,
            max_tokens: 1000
        });
        res.status(200).send({role:"assistant",content:response.choices[0].message.content});
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(8000, async () => {
    try {
        await connection;
        console.log("Server Is Running At PORT 8000")
    } catch (error) {
        console.log(error);
    }
});