//          работа с базой
// ...............................
const Post = require('../model/Post');// подлкючаю файл с моделью (БД)
const fileService = require('../service/FileService');// работа с файлами

class PostServiсe {
// PostServiсe это кодовая прослойка между клиентом, роутами и БД
// здесь осущесвтляеться работа только с базой

    async createPost (post, picture) {
        const fileName = fileService.saveFile(picture)
      
        const createdPost = await Post.create({ ...post, picture: fileName });
        return createdPost;
    }
    async update(post, picture) {
            
        if(!post._id) {
            res.status(400).json({message: "Id не указан"});
        }

        const fileName = fileService.updateFile(post ,picture)

        console.log("fileName ",fileName);
        post.picture = fileName;

        // { new: true } означает вернуть обновлённую версию
        const postUpdate = await Post.findByIdAndUpdate(post._id, post, { new: true } );

       return postUpdate
    }

    async delete(post) {

        const {id} = post;

        if(!id) {
            return res.status(400).json({message: "id не указан "})
        }

        const postFind = await Post.findByIdAndDelete(id);

        fileService.deleteFile(postFind.picture);

        return postFind
    }
    async getAll(post) {

        const posts = await Post.find();
        return posts;  
    }

    async getOne(post) {

        const {id} = post;

        if(!id) {
            res.status(400).json({message: "Id не указан"})
        }

        const postOne = await Post.findById({ _id: id });
        
        return postOne
    }

    async rundom(post) {

        const count = await Post.countDocuments();
        const random = Math.floor( Math.random() * count );
        
        const i_random = await Post.findOne().skip(random)

        return i_random

    }
}

module.exports = new PostServiсe();