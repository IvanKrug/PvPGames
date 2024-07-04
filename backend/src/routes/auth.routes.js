import { Router } from 'express';
import { login, register, logout, profile } from '../controllers/auth.controller.js';
import {autRequierd} from '../middlewares/validateToken.js'
const router = Router()

router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

router.get('/profile',autRequierd, profile);

export default router;
