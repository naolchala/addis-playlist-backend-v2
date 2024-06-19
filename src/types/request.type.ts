import { Express, Request } from "express";

export interface RequestWithUser extends Request {
	userId?: string;
}

export interface RequestWithFile extends RequestWithUser {
	file?: Express.Multer.File;
}
