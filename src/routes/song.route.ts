import { Router } from "express";

const SongRouter = Router();

SongRouter.post("/", () => {});
SongRouter.get("/", () => {});
SongRouter.get("/:id", () => {});
SongRouter.put("/:id", () => {});
SongRouter.delete("/:id", () => {});

export default SongRouter;
