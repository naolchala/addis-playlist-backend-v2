import { Router } from "express";

const SongRouter = Router();

SongRouter.post("/", (req, res) => {});
SongRouter.get("/", (req, res) => {});
SongRouter.get("/:id", (req, res) => {});
SongRouter.put("/:id", (req, res) => {});
SongRouter.delete("/:id", (req, res) => {});

export default SongRouter;
