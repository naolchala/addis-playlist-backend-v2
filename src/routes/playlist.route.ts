import authenticate from "@/middlewares/authenticate.middleware";
import FileMiddlewares from "@/middlewares/file.middleware";
import validateBody from "@/middlewares/validate.middleware";
import PlaylistController from "@controllers/playlist.contoller";
import { CreatePlaylistBodySchema } from "@validations/playlist.validation";
import { Router } from "express";

const PlaylistRouter = Router();
PlaylistRouter.use(authenticate);
PlaylistRouter.get("/search", () => {});
PlaylistRouter.get("/search-public", () => {});
PlaylistRouter.get("/search-shared", () => {});

PlaylistRouter.post(
	"/",
	FileMiddlewares.playlistImageUpload,
	validateBody(CreatePlaylistBodySchema),
	PlaylistController.createPlaylist
);
PlaylistRouter.put("/:id", () => {});
PlaylistRouter.delete("/:id", () => {});

PlaylistRouter.post("/share", () => {});
PlaylistRouter.get("/shared", () => {});

export default PlaylistRouter;
