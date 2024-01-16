import React from "react";
import { Box } from "@mui/material";
import Sidebar from "/src/components/sidebar.jsx";

export default class Member extends React.Component {
	render() {
		return (
			<Box className="flex bg-primary-abu">
				<Sidebar />

				<Box className="flex flex-row p-20 h-screen">
					<h1 className="text-2xl font-bold">Member</h1>

					<Box className="flex h-4/5 rounded-lg bg-white shadow-lg">
						<h1>Content</h1>
					</Box>
				</Box>
			</Box>
		);
	}
}
