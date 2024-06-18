import { Router } from "express";
import UserRouter from "./user.route";

const router = Router();
router.use("/user", UserRouter);

export default router;
