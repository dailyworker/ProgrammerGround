import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import * as StyledComponent from './style';

const LoginPage = () => {
	const [token, setToken] = useState([]);
	useEffect(() => {
		const local = location.search;
		const params = queryString.parse(local);
		const options = {
			mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		};

		if (Object.keys(params).length > 0) {
			const getToken = async () => {
				const v: any = await axios.post(
					'http://localhost:8080/jwtLogin',
					params,
					options,
				);
				setToken(v);
			};
			getToken();
		}
	}, []);
	return (
		<>
			<StyledComponent.GlobalStyle />
			<StyledComponent.LoginContainer>
				<StyledComponent.LoginLogo />
				<StyledComponent.LoginButtonContainer>
					<StyledComponent.LoginButton>
						<a href="http://localhost:8080/oauth2/authorization/github">
							Sign In With GitHub
							<StyledComponent.GithubLogo />
						</a>
					</StyledComponent.LoginButton>
				</StyledComponent.LoginButtonContainer>
			</StyledComponent.LoginContainer>
		</>
	);
};

export default LoginPage;
