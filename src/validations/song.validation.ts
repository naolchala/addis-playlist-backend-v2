import Joi from "joi";

export interface CreateSongBody {
	playlistID: string;
	title: string;
	artist: string;
	album?: string;
	deezerURL?: string;
	duration?: number;
	releaseYear?: number;
}

export type UpdateSongBody = Partial<Omit<CreateSongBody, "playlistID">>;

export const createSongSchema = Joi.object({
	playlistID: Joi.string().required(),
	title: Joi.string().required(),
	artist: Joi.string().required(),
	album: Joi.string().optional(),
	deezerURL: Joi.string().optional(),
	duration: Joi.number().optional(),
	releaseYear: Joi.number().optional(),
});

export const updateSongSchema = Joi.object({
	title: Joi.string().optional(),
	artist: Joi.string().optional(),
	album: Joi.string().optional(),
	deezerURL: Joi.string().optional(),
	duration: Joi.number().optional(),
	releaseYear: Joi.number().optional(),
});
