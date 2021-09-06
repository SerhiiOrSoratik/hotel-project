import { Router } from "express";
import { Request, Response } from "express";
import { VisitorController } from "../controllers/visitor-contorller";
export const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, roomId, startDate, endDate } = req.body;
  res.json(VisitorController.addVisitor(name, roomId, startDate, endDate));
});

router.get("/free", async (req: Request, res: Response) => {
  const params: any = req.query;
  res.json(await VisitorController.getFreeRoom(params));
});
