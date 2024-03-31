import express from 'express';
import { deleteUser, test, updateUser } from '../controlers/user.controler.js';
import { verifyToken } from '../utlis/verifyUser.js';

const router = express.Router();

router.get('/test',test);
router.put('/update/:userId',verifyToken ,updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);

export default router;