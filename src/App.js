import React, { Component } from "react";
import logo from "./logo.svg";
import Hello from "./components/hello";
import Card from "./components/card";
import Footer from "./components/Footer"
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Container maxWidth="sm">
				<Hello />
				<Card />
        <Footer/>
			</Container>
		</React.Fragment>
	);
}

export default App;
