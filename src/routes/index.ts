import { Router } from "express";
import UserRouter from "./user.route.js";
import PlaylistRouter from "./playlist.route.js";
import SongRouter from "./song.route.js";

const router = Router();
router.use("/user", UserRouter);
router.use("/playlist", PlaylistRouter);
router.use("/songs", SongRouter);

export default router;
