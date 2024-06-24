import authenticate from "@/middlewares/authenticate.middleware.js";
import validateBody from "@/middlewares/validate.middleware.js";
import SongController from "@controllers/song.controller.js";
import {
	createSongSchema,
	updateSongSchema,
} from "@validations/song.validation.js";
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
