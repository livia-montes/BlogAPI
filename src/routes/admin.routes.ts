import { Router } from 'express'
import * as adminController from '../controllers/admin.controller'

export const adminRoutes = Router()

adminRoutes.post('/posts', adminController.addPost)
adminRoutes.put('/posts/:slug', adminController.editPost)
adminRoutes.put('/posts/:slug', adminController.deletePost)
adminRoutes.put('/posts', adminController.getAllPosts)
adminRoutes.put('/posts/:slug', adminController.getPost)