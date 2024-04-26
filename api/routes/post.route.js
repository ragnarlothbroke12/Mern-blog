import express from 'express';
import {verifyToken} from '../utlis/verifyUser.js';
import { create } from '../controlers/post.controller.js';

const router = express.Router();

router.post('/create',verifyToken, create)


export default router;
