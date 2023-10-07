import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useStore } from "../store";
import { counterDown, counterUp } from "../store/counter/counter-actions";
import { logout } from "../store/auth/auth-actions";
import { Link } from "react-router-dom";

const HomePage = () => {
	const { counterState, dispatchCounter, authState, dispatchAuth } = useStore();
	const { counter } = counterState;
	const { isUserLogin, user } = authState;
	console.log(counterState);

	const handleLogout = () => {
		const result = window.confirm("Are you sure to logout?");
		if (!result) return;
		dispatchAuth(logout());
	};
	return (
		<div>
			<h1>
				Hello {user.firstName} {user.lastName}
			</h1>
			<h2>
				{isUserLogin ? (
					<Button variant="danger" onClick={handleLogout}>
						Logout
					</Button>
				) : (
					<Button variant="primary" as={Link} to="/login">
						Login
					</Button>
				)}
			</h2>
			<ButtonGroup>
				<Button
					variant="warning"
					onClick={() => dispatchCounter(counterDown())}
				>
					-
				</Button>
				<Button variant="secondary" disabled>
					{counter}
				</Button>
				<Button variant="info" onClick={() => dispatchCounter(counterUp())}>
					+
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default HomePage;
