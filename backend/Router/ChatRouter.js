const express = require("express");
const { ChatModel } = require("../Model/ChatModel");
const chatRouter = express.Router();

chatRouter.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const data = await ChatModel.find({ user_id: id })
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong.", "err": error })
    }
})

chatRouter.get("/singleData/:id", async (req, res) => {
    const {id} = req.params;
   
    try {
        const data = await ChatModel.findOne({ _id: id })
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong.", "err": error })
    }
})


chatRouter.post("/add", async (req, res) => {
    try {
        let data = new ChatModel(req.body);
        await data.save();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = { chatRouter };