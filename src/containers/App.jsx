
import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Icon from "../components/icons/icons"
import Box from "ui-box";
import history from '../modules/history';


class App extends Component {


    render() {
        history.push("/")
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route path="/">
                            <Box
                                background="#000044"
                                fontWeight="thick"
                                color="#FFFFFF"
                                fontFamily="Roboto"
                                padding="20px"
                                fontSize="50px"
                            >
                                Nicolas Mitchell
                            </Box>
                            <Box background="#084068" fontFamily="Roboto" color="#FFFFFF" paddingX="20px" paddingY="100px" maxWidth="60%" marginX="auto" marginY="50px">
                                <Box marginX="25%">
                                    <h1> This website is under construction! </h1>
                                </Box>
                                <Box marginX="auto" maxWidth="200px">
                                    <a href="https://github.com/nicomitchell"><Icon name="github" width="100px" fill="#55EFC4" /></a>
                                    <a href="https://www.linkedin.com/in/nicolas-mitchell-b22185149/"><Icon name="linkedin" width="100px" fill="#55ECC4" /></a>
                                </Box>
                            </Box>
                        </Route>
                    </Switch>
                </Router>
            </div >
        );
    }
}

export default App;