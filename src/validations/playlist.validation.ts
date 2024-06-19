import Joi from "joi";

export interface CreatePlaylistBody {
	label: string;
	desc: string;
	visibility: "PUBLIC" | "PRIVATE";
}

export const CreatePlaylistBodySchema = Joi.object({
	label: Joi.string().required(),
	desc: Joi.string(),
	visibility: Joi.string().valid("PUBLIC", "PRIVATE").default("PRIVATE"),
});
