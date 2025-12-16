import express from "express";

import { createContacts, getContacts } from "../controller/contactController.js";

const contactRouter = express.Router();

contactRouter.post("/", createContacts);
contactRouter.get("/", getContacts);

export default contactRouter;