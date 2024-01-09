import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "/src/Page/Login";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" Component={Login} />
				{/* <Route path="/movie/:id" Component={MovieDetails}/> */}
				{/* <Route path="/:id" Component={Test}/> */}
			</Routes>
		</Router>
	);
};

export default App;
