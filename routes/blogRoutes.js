const express = require("express");
const router = express.Router();
const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');

router.get('/blogs', blogController.blog_index);

router.post('/blogs', blogController.blog_create_post);

router.get('/blogs/create', blogController.blog_create_get);


router.post('/notes', blogController.note_create_post);

router.get('/blogs/create_note', blogController.note_create_get);


router.post('/projects', blogController.project_create_post);

router.get('/blogs/create_proj', blogController.project_create_get);


router.post('/courses', blogController.course_create_post);

router.get('/blogs/create_course', blogController.course_create_get);


router.get('/blogs/:id', blogController.blog_details);

router.delete('/blogs/:id', blogController.blog_delete);

router.delete('/blogs/notes/:id', blogController.note_delete);

router.delete('/blogs/projects/:id', blogController.proj_delete);



module.exports = router;