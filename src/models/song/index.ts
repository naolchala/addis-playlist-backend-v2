import { model } from "mongoose";
import songSchema from "./schema.js";
import { ISong, SongModel } from "./types.js";

const Song = model<ISong, SongModel>("Song", songSchema);

export default Song;
