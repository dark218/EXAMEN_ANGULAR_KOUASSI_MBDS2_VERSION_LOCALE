const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require("../middleware/check-auth");
const checkDocAuth = require("../middleware/check-docAuth");
mongoose = require('mongoose');

const Matiere = require('../models/matiere');

const DIR = "images";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});

// Multer Mime Type Validation
var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
router.post("", upload.single("avatar1"), (req, res, next) => {
    const url = req.protocol + '://' + req.get("host");
    const matiere = new Matiere({

        nommat: req.body.nommat,
        nomprof: req.body.nomprof,
        avatar1: url + '/images/' + req.file.filename,

    });
    matiere.save().then(createdMatiere => {
        res.status(201).json({
            message: 'Matiere Added Successfully',
            matiere: {
                ...createdMatiere,
                id: createdMatiere._id

            }
        });
    });
});


router.put("/:id", upload.single("avatar1"), (req, res, next) => {

    let avatar1 = req.body.avatar1;

    if (req.file) {
        const url = req.protocol + '://' + req.get("host");
        avatar1 = url + "/images/" + req.file.filename;
    };
    const matiere = new Matiere({
        _id: req.body.id,
        nommat: req.body.nommat,
        nomprof: req.body.nomprof,
        avatar1: avatar1
    });
    console.log(matiere);
    Matiere.updateOne({ _id: req.params.id }, matiere).then(result => {
        console.log(result);
        res.status(200).json({ message: "Update Successful !" });
    });
});

router.get("", (req, res, next) => {
    Matiere.find().then(documents => {
        res.status(200).json({
            message: 'matiere added sucessfully',
            matieres: documents
        });
    });
});

router.get("/:id", (req, res, next) => {
    Matiere.findById(req.params.id).then(matiere => {
        if (matiere) {
            res.status(200).json(matiere);
        } else {
            res.status(200).json({ message: 'Matiere not found' });
        }
    });
});


router.delete("/:id", checkAuth, (req, res, next) => {
    Matiere.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: 'Matiere deleted!' });
    });
});

module.exports = router;