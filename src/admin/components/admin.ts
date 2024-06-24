import AdminJS from "adminjs";
import User from "@models/user/index.js";
import * as AdminJSMongoose from "@adminjs/mongoose";
import * as AdminJSExpress from "@adminjs/express";
import Playlist from "@models/playlist/index.js";
import Song from "@models/song/index.js";
import passwordsFeature from "@adminjs/passwords";
import * as bcrypt from "bcrypt";
import { Components, componentLoader } from "./index.js";

AdminJS.registerAdapter({
	Resource: AdminJSMongoose.Resource,
	Database: AdminJSMongoose.Database,
});

const admin = new AdminJS({
	componentLoader,
	resources: [
		{
			resource: User,
			features: [
				passwordsFeature({
					componentLoader,
					properties: {
						encryptedPassword: "password",
						password: "newPassword",
					},
					hash: (password) => bcrypt.hash(password, 10),
				}),
			],
			options: {
				navigation: {
					name: "Users",
					icon: "User",
				},
				properties: {
					photoURL: {
						components: {
							list: Components.ProfilePicture,
						},
					},
					password: {
						isVisible: false,
					},
				},
				listProperties: [
					"id",
					"firstName",
					"lastName",
					"email",
					"photoURL",
					"role",
				],
				showProperties: [
					"id",
					"firstName",
					"lastName",
					"email",
					"photoURL",
					"role",
				],
			},
		},
		{
			resource: Playlist,
			options: {
				navigation: {
					name: "Playlist",
					icon: "Music",
				},
			},
		},
		{
			resource: Song,
		},
	],
});
const adminRouter = AdminJSExpress.buildRouter(admin);

admin.watch();

export { adminRouter, admin };
