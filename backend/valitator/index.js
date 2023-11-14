import { validationResult } from "express-validator";

export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let erroList = errors.array().map((error) => error.msg);
        return res.status(400).json({
            message: erroList[0],
        });
    }
    next();
    }