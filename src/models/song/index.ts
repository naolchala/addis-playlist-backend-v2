import { model } from "mongoose";
import songSchema from "./schema";
import { ISong, SongModel } from "./types";

const Song = model<ISong, SongModel>("Song", songSchema);

export default Song;
