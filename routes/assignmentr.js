const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require("../middleware/check-auth");
const checkDocAuth = require("../middleware/check-docAuth");

const Assignmentr = require('../models/assignmentr');
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
router.post("", upload.single("avatar1"), checkAuth, (req, res, next) => {
    const url = req.protocol + '://' + req.get("host");
    const assignmentr = new Assignmentr({

        nomdevoir: req.body.nomdevoir,
        nomeleve: req.body.nomeleve,
        datederendu: req.body.datederendu,
        nommatiere: req.body.nommatiere,
        nompof: req.body.nomprof,
        avatar1: url + '/images/' + req.file.filename,
        note: req.body.note,
        remarque: req.body.remarque
    });
    assignmentr.save().then(createdAssignmentr => {
        res.status(201).json({
            message: 'Assignment Added Successfully',
            assignmentrId: createdAssignmentr._id
        });

    });

});

router.put("/:id", upload.single("avatar1"), checkAuth, (req, res, next) => {
    let avatar1 = req.body.avatar1;
    if (req.file) {
        const url = req.protocol + '://' + req.get("host");
        avatar1 = url + "/images/" + req.file.filename;
    };
    const assignmentr = new Assignmentr({
        _id: req.body.id,

        nomdevoir: req.body.nomdevoir,
        nomeleve: req.body.nomeleve,
        datederendu: req.body.datederendu,
        nommatiere: req.body.nommatiere,
        nomprof: req.body.nomprof,
        avatar1: avatar1,
        note: req.body.note,
        remarque: req.body.remarque
    });
    Assignmentr.updateOne({ _id: req.params.id }, assignmentr).then(result => {
        console.log(result);
        res.status(200).json({ message: "Update Successful !" });
    });
});

router.get("", (req, res, next) => {
    Assignmentr.find().then(documents => {
        res.status(200).json({
            message: 'Assignment added sucessfully',
            assignmentsr: documents
        });
    });
});


router.get("/:id", (req, res, next) => {
    Assignmentr.findById(req.params.id).then(assignmentr => {
        if (assignmentr) {
            res.status(200).json(assignmentr);
        } else {
            res.status(200).json({ message: 'Assignment not found' });
        }
    });
});

router.delete("/:id", checkAuth, (req, res, next) => {
    Assignmentr.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: 'Assignment deleted!' });
    });
});

module.exports = router;