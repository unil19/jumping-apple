import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from "./Bar.js";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
  },
});

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider theme={theme}>
    		<div className="App">
		        <Bar></Bar>
		        <p style={{color:"#666"}}>网站建设中...</p>
		     </div>
	   </MuiThemeProvider>
    );
  }
}

export default App;
