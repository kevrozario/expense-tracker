const multer=require("multer");

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        const isCSV = file.mimetype.includes("csv");

        if (!isCSV) {
            return cb(new Error("must be a csv file"));
        } else {
            cb(null, true);
        }
    },

});

module.exports=upload;