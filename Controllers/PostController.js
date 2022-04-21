const path = require("path");
const PostServiсe = require("../service/PostServiсe");

class PostControllers {
    getForm (req, res)  {
        try {
            res.sendFile(path.join(__dirname, "../statik/index.html"));
      
        } catch (e) {
            res.status(500).json(e)
        }
    };

    async createPost (req, res) {

        try {
            // console.log('createPost')
            // console.log("fieldname ", req.file)
            const post = await PostServiсe.createPost(req.body,req.file)
        
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {

        try {
            res.json( await PostServiсe.getAll())
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostServiсe.getOne(req.params);
            res.json( post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {

        try {
            const post = await PostServiсe.update(req.body, req.file);
            res.json( post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {

        try {
            const post = await PostServiсe.delete(req.params);
            res.json( post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async rundom(req, res) {

        try {
            const post = await PostServiсe.rundom();
            res.json( post)
            
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new PostControllers();