import express from 'express';
import {verifyToken} from '../utlis/verifyUser.js';
import { create, getposts } from '../controlers/post.controller.js';

const router = express.Router();

router.post('/create',verifyToken, create)
router.get('/getposts',getposts)


export default router;
