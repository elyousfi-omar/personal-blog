const Blog = require('../models/blog');
const Notes = require('../models/notes');
const Project = require('../models/project');
const Course = require('../models/course');

const blog_index = (req, res) =>{
    Notes.find().sort({ createdAt: -1}).then((results => {notes=results}));
    Project.find().sort({ createdAt: -1}).then((res_p => {proj=res_p}));
    Course.find().sort({ createdAt: -1}).then((res_c => {cou=res_c}));
    Blog.find().sort({ createdAt: -1})
    .then((result) => {
        res.render('index', { title: 'My Blogs', blogs: result, notes:notes, proj:proj, cou:cou});
    })
    .catch((err) => {
        console.log(err);
    })
};

const project_create_get = (req, res) => {
    res.render('create_proj', {title: 'Write a project'});
};

const project_create_post = (req, res) => {
    const prj = new Project(req.body);
    prj.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
};

const course_create_get = (req, res) => {
    res.render('create_course', {title: 'Write a course name'});
};

const course_create_post = (req, res) => {
    const cr = new Course(req.body);
    cr.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
};

const note_create_get = (req, res) => {
    res.render('create_note', {title: 'Write a note'});
};

const note_create_post = (req, res) => {
    const noted = new Notes(req.body);
    noted.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
};

const blog_details = (req, res)=>{
    const id = req.params.id
    Blog.findById(id)
        .then((result) =>{
            res.render('blog', {title:'Blog', blog: result});
        })
        .catch((err)=>{
            res.status(404).render('404', {title:'Blog not found!'});
        });
};

const blog_create_get = (req, res) => {
    res.render('create', {title: 'Write a blog'});
};

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        })
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findByIdAndDelete(id)
        .then(result=>{
            res.json({redirect: '/blogs'});
        })
        .catch(err => console.log(err));
};

const note_delete = (req, res) => {
    const id_n = req.params.id;
    Notes.findByIdAndDelete(id_n)
        .then(result=>{
            res.json({redirect: '/blogs'});
        })
        .catch(err => console.log(err));
};

const proj_delete = (req, res) => {
    const id_p = req.params.id;
    Project.findByIdAndDelete(id_p)
        .then(result=>{
            res.json({redirect: '/blogs'});
        })
        .catch(err => console.log(err));
};

const course_delete = (req, res) => {
    const id_c = req.params.id;
    Course.findByIdAndDelete(id_c)
        .then(result=>{
            res.json({redirect: '/blogs'});
        })
        .catch(err => console.log(err));
};

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
    note_create_get,
    note_create_post,
    note_delete,
    project_create_get,
    project_create_post,
    proj_delete,
    course_create_get,
    course_create_post,
    course_delete
}