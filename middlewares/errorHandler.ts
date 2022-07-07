import { Request, Response, NextFunction } from "express";

export function errorHandler(error: { type: string; message: string }, req: Request, res: Response, next: NextFunction) {
    if (error.type === "notFound") return res.sendStatus(404);
    if(error.type === "invalidFormat") return res.sendStatus(400);
};