import { Router } from "express";

const PlaylistRouter = Router();
PlaylistRouter.get("/search", (req, res) => {});
PlaylistRouter.get("/search-public", (req, res) => {});
PlaylistRouter.get("/search-shared", (req, res) => {});

PlaylistRouter.post("/", (req, res) => {});
PlaylistRouter.put("/:id", (req, res) => {});
PlaylistRouter.delete("/:id", (req, res) => {});

PlaylistRouter.post("/share", (req, res) => {});
PlaylistRouter.get("/shared", (req, res) => {});

export default PlaylistRouter;
