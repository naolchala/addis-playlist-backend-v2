import { Router } from "express";

const PlaylistRouter = Router();
PlaylistRouter.get("/search", () => {});
PlaylistRouter.get("/search-public", () => {});
PlaylistRouter.get("/search-shared", () => {});

PlaylistRouter.post("/", () => {});
PlaylistRouter.put("/:id", () => {});
PlaylistRouter.delete("/:id", () => {});

PlaylistRouter.post("/share", () => {});
PlaylistRouter.get("/shared", () => {});

export default PlaylistRouter;
