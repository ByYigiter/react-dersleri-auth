import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { loginFail, loginSuccess } from "../store/auth/auth-actions";
import { useStore } from "../store";

const API_BASE_URL = "https://carrental-v3-backend.herokuapp.com";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const { dispatchAuth } = useStore();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const auth = {
			email: email,
			password: password,
		};
		try {
			setLoading(true);
			const respAuth = await axios.post(`${API_BASE_URL}/login`, auth);
			const token = respAuth.data.token;

			const authHeader = { Authorization: `Bearer ${token}` };
			const respUser = await axios.get(`${API_BASE_URL}/user`, {
				headers: authHeader,
			});

			// dispatchAuth({type:"LOGIN_SUCCESS",payload:respUser.data})
			dispatchAuth(loginSuccess(respUser.data));
			console.log(respUser.data);

			navigate("/");
		} catch (error) {
			alert(error.response.data.message);
			dispatchAuth(loginFail());
		} finally {
			setLoading(false);
		}
	};
	return (
		<Container>
			<Form onSubmit={handleLogin}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required={true}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required={true}
					/>
				</Form.Group>

				<Button variant="primary" type="submit" disabled={loading}>
					{loading && <Spinner animation="border" variant="danger" size="sm" />}
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default LoginPage;
