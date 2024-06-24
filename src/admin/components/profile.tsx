import { ShowPropertyProps } from "adminjs";
import React from "react";

function ProfilePicture(props: ShowPropertyProps) {
	const { property, record } = props;
	const url = record.params[property.name];
	return (
		<img
			src={url}
			alt="Profile"
			referrerPolicy="origin-when-cross-origin"
		/>
	);
}

export default ProfilePicture;
