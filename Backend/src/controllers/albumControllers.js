import cloudinary from "../config/cloudinary.js";
import albumModel from "../models/albumModel.js"

const addAlbum = async (req,res) => {
    
    try{
        // console.log(req.body)
        const name = req.body.name;
        const desc = req.body.desc;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});

        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url
        }

        const album = albumModel(albumData);
        await album.save();
        res.json({success: true, message:"Album added"})
    }catch(err){
        // console.log(err)
        res.json({success:false})
    }

}

const listAlbum = async (req,res) => {

    try{
        const allAlbums = await albumModel.find({});
        res.json({success: true, albums: allAlbums})
    }catch(err){
        res.json({succcess:false})
    }

}

const removeAlbum = async (req,res) => {

    try{
        await albumModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Album removed"})
    }catch(err){
        res.json({success:false})
    }

}

export {addAlbum,listAlbum,removeAlbum};