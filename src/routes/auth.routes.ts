import { Router } from 'express'
import * as authController from '../controllers/auth.controller'

export const authRoutes = Router()

authRoutes.post('/singin', authController.singIn)
authRoutes.post('/singup', authController.singUp)
authRoutes.post('/validade', authController.validate)