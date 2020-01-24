
import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Icon from "../components/icons/icons"
import Box from "ui-box";
import history from '../modules/history';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: "EN",
        };

    }
    textMap = {
        "EN": "This website is under construction!",
        "ES": "Este sitio está en construcción!",
        "PR": "Este site está em construção!"
    }
    textMap2 = {
        "EN": "View my resume",
        "ES": "Vea mi currículum",
        "PR": "Olhe o meu currículo"
    }
    render() {
        history.push("/")
        const { lang } = this.state;
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route path="/">
                            <Box background="#000044" color="#FFFFFF" padding="20px" >
                                <Box fontWeight="thick" fontFamily="Roboto" fontSize="50px">
                                    <Box style={{ flexDirection: 'row', justifyContent: 'flex-end' }} fontFamily="Roboto" fontSize="12px" display="flex">
                                        <Box color={lang == "EN" ? "#44DBB3" : "#FFFFFF"} onClick={() => this.setState({ lang: "EN" })}>EN</Box>
                                        |<Box color={lang == "ES" ? "#44DBB3" : "#FFFFFF"} onClick={() => this.setState({ lang: "ES" })}>ES</Box>
                                        |<Box color={lang == "PR" ? "#44DBB3" : "#FFFFFF"} onClick={() => this.setState({ lang: "PR" })}>PR</Box>  </Box>
                                    Nicolas Mitchell
                                </Box>
                            </Box>
                            <Box background="#084068" fontFamily="Roboto" color="#FFFFFF" paddingX="20px" paddingY="100px" maxWidth="60%" marginX="auto" marginY="50px">
                                <Box style={{ textAlign: 'center' }}>
                                    <h1> {this.textMap[lang]} </h1>
                                    <h2><a href="http://nico-mitchell.com/resume/resume-plain.pdf">{this.textMap2[lang]}</a></h2>
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