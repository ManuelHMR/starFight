import { Request, Response } from "express";
import { queryRanking } from "../repositories/fighterRepositories.js";
import * as battleService from "../services/battleService.js";

export async function battle(req: Request, res: Response) {
    const { firstUser, secondUser } : {firstUser: string, secondUser: string} = req.body;
  
    if (!firstUser || !secondUser) {
      return res.sendStatus(422);
    }
  
    const battleResult = await battleService.battle(firstUser, secondUser);
    res.send(battleResult);
  }

export function getRanking(req : Request, res: Response){
    const result = queryRanking();
    res.send(result)
};