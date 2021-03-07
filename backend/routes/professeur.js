const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require("../middleware/check-auth");
const checkDocAuth = require("../middleware/check-docAuth");
mongoose = require('mongoose');

const Professeur = require('../models/professeur');

const DIR = 'images';

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
    const professeur = new Professeur({

        // nommat: req.body.nommat,
        nomprof: req.body.nomprof,
        avatar1: url + '/images/' + req.file.filename,

    });
    professeur.save().then(createdProfesseur => {
        res.status(201).json({
            message: 'Professeur Added Successfully',
            professeur: {
                ...createdProfesseur,
                id: createdProfesseur._id

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
    const professeur = new Professeur({
        _id: req.body.id,
        // nommat: req.body.nommat,
        nomprof: req.body.nomprof,
        avatar1: avatar1
    });
    console.log(professeur);
    Professeur.updateOne({ _id: req.params.id }, professeur).then(result => {
        console.log(result);
        res.status(200).json({ message: "Update Successful !" });
    });
});

router.get("", (req, res, next) => {
    Professeur.find().then(documents => {
        res.status(200).json({
            message: 'professeur added sucessfully',
            professeurs: documents
        });
    });
});

router.get("/:id", (req, res, next) => {
    Professeur.findById(req.params.id).then(professeur => {
        if (professeur) {
            res.status(200).json(professeur);
        } else {
            res.status(200).json({ message: 'Professeur not found' });
        }
    });
});

router.delete("/:id", checkAuth, (req, res, next) => {
    Professeur.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: 'Professeur deleted!' });
    });
});

module.exports = router;