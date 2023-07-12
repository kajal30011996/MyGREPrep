import express from "express";
import { createTopic, getTopic } from "../controllers/topicController";

const topicRouter = express.Router();

topicRouter.post("/create", createTopic);
topicRouter.get("/get-topic", getTopic);

export default topicRouter;