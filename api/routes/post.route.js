import express from 'express';
import {verifyToken} from '../utlis/verifyUser.js';
import { create, deletepost, getposts } from '../controlers/post.controller.js';

const router = express.Router();

router.post('/create',verifyToken, create)
router.get('/getposts',getposts)
router.delete('/deletepost/:postId/:userId',verifyToken,deletepost);


export default router;