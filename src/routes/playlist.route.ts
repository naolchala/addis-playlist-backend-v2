import authenticate from "@/middlewares/authenticate.middleware.js";
import FileMiddlewares from "@/middlewares/file.middleware.js";
import validateBody, {
	validateSearchQuery,
} from "@/middlewares/validate.middleware.js";
import PlaylistController from "@controllers/playlist.controller.js";
import {
	CreatePlaylistBodySchema,
	EditPlaylistBodySchema,
	SearchPlaylistQuerySchema,
	SharePlaylistBodySchema,
} from "@validations/playlist.validation.js";
import { Router } from "express";

const PlaylistRouter = Router();

PlaylistRouter.use(authenticate);

PlaylistRouter.get(
	"/search",
	validateSearchQuery(SearchPlaylistQuerySchema),
	PlaylistController.searchPlaylist
);
PlaylistRouter.get(
	"/search-public",
	validateSearchQuery(SearchPlaylistQuerySchema),
	PlaylistController.searchPublicPlaylist
);

PlaylistRouter.get(
	"/search-shared",
	validateSearchQuery(SearchPlaylistQuerySchema),
	PlaylistController.searchSharedPlaylist
);

PlaylistRouter.post(
	"/",
	FileMiddlewares.playlistImageUpload,
	validateBody(CreatePlaylistBodySchema),
	PlaylistController.createPlaylist
);

PlaylistRouter.put(
	"/:id",
	validateBody(EditPlaylistBodySchema),
	PlaylistController.updatePlaylist
);

PlaylistRouter.delete("/:id", PlaylistController.deletePlaylist);

PlaylistRouter.post(
	"/:id/share",
	validateBody(SharePlaylistBodySchema),
	PlaylistController.sharePlaylist
);
PlaylistRouter.get("/:id/shared-users", PlaylistController.sharedUsers);

export default PlaylistRouter;
