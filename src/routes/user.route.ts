import { Router } from "express";

const UserRouter = Router();
UserRouter.post("/login", (req, res) => {
	res.send("User Router");
});

UserRouter.post("/register", (req, res) => {
	res.send("User Router");
});

export default UserRouter;
