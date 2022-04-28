const Bootcamp = require("../models/BootcampModel");

exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            data: bootcamps
        });
    } catch(err){
        res.status(400).json({ success: false, message: err});
    }
}

exports.getBootcamp = (req, res, next) => {    
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}

exports.createBootcamp = async (req, res, next) => {   
    try{
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch(err){
        res.status(400).json({ success: false, message: err.errors});
    }

}

exports.updateBootcamp = (req, res, next) => {    
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

exports.deleteBootcamp = (req, res, next) => {    
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}