import { Request, Response, NextFunction } from "express";

export function validateSchema(schema) {
    return (req: Request, res: Response, next:NextFunction) => { 
      const {error} = schema.validate(req.body, {abortEarly: false});
      if (error) {
        throw {
            type: "invalidFormat",
            message: "Dados enviados no formato errado!"
        };
      }
      next();
    }
};