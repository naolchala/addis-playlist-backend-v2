import authenticate from "@/middlewares/authenticate.middleware";
import validateBody from "@/middlewares/validate.middleware";
import SongController from "@controllers/song.controller";
import {
	createSongSchema,
	updateSongSchema,
} from "@validations/song.validation";
import { Router } from "express";

const SongRouter = Router();
SongRouter.use(authenticate);

SongRouter.post("/", validateBody(createSongSchema), SongController.createSong);
SongRouter.get("/", () => {});
SongRouter.get("/:id", () => {});
SongRouter.put(
	"/:id",
	validateBody(updateSongSchema),
	SongController.updateSong
);
SongRouter.delete("/:id", SongController.deleteSong);

export default SongRouter;
