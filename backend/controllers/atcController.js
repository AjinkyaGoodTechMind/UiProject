const UserSchema = require("../schemas/userSchema");
const ProjectSchema = require("../schemas/projectOfficeSchema");
const StudentSchema = require("../schemas/studentSchema");
const AtcSchema = require("../schemas/atcSchema");
const createError = require("http-errors");

const atcController = {
  getAtc: async (req, res, next) => {
    try {
      const atc = await AtcSchema.find();
      res.json(atc);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  getProjectOffice: async (req, res, next) => {
    try {
      const atc = await ProjectSchema.find();
      res.json(atc);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  getStudent: async (req, res, next) => {
    try {
      const atc = await StudentSchema.find();
      res.json(atc);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },

  update: async (req, res, next) => {
    try {
      const image = req.file;
      if (image) {
        const filePath = `/${image.destination}/${image.filename}`;

        await UserSchema.findOneAndUpdate({ _id: req.user._id }, { $set: { ...req.body, profilePic: filePath } });
      } else {
        await UserSchema.findOneAndUpdate({ _id: req.user._id }, { $set: { ...req.body } });
      }

      res.sendStatus(204);
    } catch (error) {
      return next(createError.InternalServerError(error));
    }
  },
};

module.exports = atcController;
