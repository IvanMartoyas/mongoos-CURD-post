//        сохранение фото 
// ................................
const path = require('path');
const fs = require('fs');

class FileService { 
    deleteFunc(name) {//удаляяет фото
    //ранее была ошибка в том что название старого фото оказывалось неверным, дело в том что в постмане я не менял имя фото 
        try {
            fs.unlinkSync('./uploads/' + name)
        //file removed
        } catch(err) {
            console.error(err)
        }
    }

    saveFile (file) {
        try {
            let filename = file.filename

            return filename;

        } catch (e) {
            console.log(e)
        }
    }


    deleteFile (name) {
        this.deleteFunc(name)
    }

    updateFile(oldData, file) {

        this.deleteFunc(oldData.picture);

        return file.filename;

    }
}


module.exports = new FileService();