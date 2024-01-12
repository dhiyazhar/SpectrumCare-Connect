import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MemberDashboard from "/src/Page/member";


const App = () => {

	let theme = createTheme({
		typography: {
			fontFamily: 'Poppins',
		},
	});

	theme = createTheme(theme, {
		palette: {
			ijokan: theme.palette.augmentColor({
				color: {
					main: '#007C5E',
				},
				name: 'ijokan',
			}),
		},
	});



	return (

		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" Component={MemberDashboard} />
					{/* <Route path="/movie/:id" Component={MovieDetails}/> */}
					{/* <Route path="/:id" Component={Test}/> */}
				</Routes>
			</Router>
		</ThemeProvider>
		
	);
};
 
export default App;
