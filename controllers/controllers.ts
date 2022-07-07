import { Request, Response } from "express";
import { queryRanking } from "../repositories/index.js";
import { battleService } from "../services/index.js";

export function postBattle(req : Request, res: Response){
    const { firstUser, secondUser } : {firstUser: string, secondUser: string} = req.body;
    battleService(firstUser, secondUser);
    res.send(battleService)
};

export function getRanking(req : Request, res: Response){
    const result = queryRanking();
    res.send(result)
};