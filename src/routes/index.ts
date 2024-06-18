import { Router } from "express";
import UserRouter from "./user.route";
import PlaylistRouter from "./playlist.route";
import SongRouter from "./song.route";

const router = Router();
router.use("/user", UserRouter);
router.use("/playlist", PlaylistRouter);
router.use("/songs", SongRouter);

export default router;
