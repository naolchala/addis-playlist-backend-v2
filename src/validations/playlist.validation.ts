// eslint-disable-next-line import/no-cycle
import { PlaylistVisibility } from "@models/playlist/types";
import Joi from "joi";

export interface CreatePlaylistBody {
	label: string;
	desc: string;
	visibility: PlaylistVisibility;
}

export const CreatePlaylistBodySchema = Joi.object({
	label: Joi.string().required(),
	desc: Joi.string(),
	visibility: Joi.string().valid("PUBLIC", "PRIVATE").default("PRIVATE"),
});

export interface EditPlaylistBody {
	label: string;
	desc: string;
	visibility: PlaylistVisibility;
}

export const EditPlaylistBodySchema = Joi.object({
	label: Joi.string(),
	desc: Joi.string(),
	visibility: Joi.string().valid("PUBLIC", "PRIVATE"),
});

export interface SearchPlaylistQuery {
	keyword?: string;
	orderBy?: "label" | "createdAt";
	orderDirn?: "asc" | "desc";
	visibility?: PlaylistVisibility;
}

export const SearchPlaylistQuerySchema = Joi.object({
	keyword: Joi.string(),
	orderBy: Joi.string().valid("label", "createdAt"),
	orderDirn: Joi.string().valid("asc", "desc"),
	visibility: Joi.string().valid("PUBLIC", "PRIVATE"),
});

export interface SharePlaylistBody {
	email: string;
}

export const SharePlaylistBodySchema = Joi.object({
	email: Joi.string().email().required(),
});
