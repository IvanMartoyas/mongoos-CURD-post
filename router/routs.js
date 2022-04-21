const express = require('express');

// сохранение фото
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })



const router = express.Router();
const PostControllers = require("../Controllers/PostController");



router.get('/', PostControllers.getForm);


router.post('/new', upload.single('picture'), PostControllers.createPost)
router.get('/posts', PostControllers.getAll)
router.get('/findpost/:id', PostControllers.getOne)
router.put('/update/', upload.single('picture1'), PostControllers.update)
router.delete('/delete/:id', PostControllers.delete)
router.get('/rundom', PostControllers.rundom)



module.exports = router;