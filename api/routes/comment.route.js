import express from "express";
import { verifyToken } from "../utlis/verifyUser.js";
import { createComment, editComment, getPostComments, likeComment } from "../controlers/comment.controler.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);

export default router;
