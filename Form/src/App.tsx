import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
	const [login, setLogin] = useState(false);

	return (
		<>
			{login ? (
				<>
					<Login />
					<span>
						Don't have account? &nbsp; &nbsp;
						<a className="m-4" onClick={() => setLogin(false)}>
							SignUp
						</a>
					</span>
				</>
			) : (
				<>
					<SignUp />
					<span>
						Already a member ?&nbsp; &nbsp;
						<a className="m-4" onClick={() => setLogin(true)}>
							Login
						</a>
					</span>
				</>
			)}
		</>
	);
}

export default App;
