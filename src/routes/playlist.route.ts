import authenticate from "@/middlewares/authenticate.middleware";
import FileMiddlewares from "@/middlewares/file.middleware";
import validateBody, {
	validateSearchQuery,
} from "@/middlewares/validate.middleware";
import PlaylistController from "@controllers/playlist.contoller";
import {
	CreatePlaylistBodySchema,
	EditPlaylistBodySchema,
	SearchPlaylistQuerySchema,
	SharePlaylistBodySchema,
} from "@validations/playlist.validation";
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
