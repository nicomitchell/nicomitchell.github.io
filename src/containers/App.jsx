
import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Icon from "../components/icons/icons"
import Box from "ui-box";
import history from '../modules/history';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Box background="#084068">
                    <Box fontFamily="Roboto" color="#FFFFFF"> Hello, World! </Box>
                    <Icon name="github" width="100px" fill="#55EFC4" />
                    <Icon name="linkedin" width="100px" fill="#55ECC4" />
                </Box>
            </div>
        );
    }
}

export default App;