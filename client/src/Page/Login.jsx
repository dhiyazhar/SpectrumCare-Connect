import React from "react";
import { Box, FormControl, TextField, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

export default function Login() {
	const control = async (data) => {
		const response = await axios.post(
			"http://localhost:4000/control",
			data
		);
		if (response.data != "not found") {
			window.location.replace(
				`http://localhost:5173/dashboard`
			);
		} else {
			alert("email atau password salah");
		}
	};

	return (
		<Box className="w-screen min-h-screen md:h-screen flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 bg-gradient-to-r from-primary-login-start to-primary-login-end">
			<div className="flex flex-col items-center justify-center w-full md:h-full">
				<div className="w-full bg-white	 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="flex flex-col items-center">
						<img
							className="mx-auto py-7"
							src="src/assets/logo.png"
							alt="SpectrumCare-Connect"
						/>

						<h1 className="flex items-center text-2xl font-bold text-primary-ijo-kan">
							LOGIN
						</h1>
					</div>

					<div className="mx-7 p-6 space-y-4">
						<form
							id="form"
							action="https://localhost:5000"
							method="post"
						>
							<div className="space-y-4">
								<Email />
								<Password />
								<FormControlLabel
									control={
										<Checkbox
											value="remember"
											color="ijokan"
										/>
									}
									label="Remember me"
								/>
							</div>
						</form>

						<div className="py-7">
							<Button
								variant="contained"
								color="ijokan"
								className="w-full text- 3xl text-white font-bold rounded-lg text-center"
								onClick={() => {
									const email =
										document.getElementsByName("email")[0]
											.value;
									const password =
										document.getElementsByName(
											"password"
										)[0].value;

									control({
										email: email,
										password: password,
									});
								}}
							>
								SIGN IN
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Box>
	);
}

class Email extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
		};
	}

	render() {
		return (
			<div className="flex flex-col">
				<label htmlFor="email" className="py-2">
					Email
				</label>

				<FormControl className="font-">
					<TextField
						required={+true}
						type="email"
						name="email"
						id="outlined-required"
						variant="outlined"
						placeholder="name@spectrumcare.rumahsakit.id"
						autoComplete="email"
					></TextField>
				</FormControl>
			</div>
		);
	}
}

class Password extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="flex flex-col">
				<label htmlFor="email" className="py-2">
					Password
				</label>

				<FormControl className="font-">
					<TextField
						required={true}
						type="password"
						name="password"
						id="outlined-required"
						variant="outlined"
						placeholder="********"
					/>
				</FormControl>
			</div>
		);
	}
}
