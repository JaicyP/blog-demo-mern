
import express, { Router } from 'express';
import { addUser, getBlogs, getBlog, editBlog, deleteBlog } from '../controller/userController.js'


const router = express.Router();

router.post('/add', addUser)
router.get('/all',getBlogs)
router.get('/:id', getBlog)
router.put('/:id', editBlog)
router.delete('/:id', deleteBlog)


export default router;