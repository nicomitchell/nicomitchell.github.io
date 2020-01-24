
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
        "PR": "Veja o meu currículo"
    }
    render() {
        history.push("/")
        const { lang } = this.state;
        return (
            <div className="App" style={{ margin: "0px", background: "#EFE2BA", padding: "0px" }}>
                <Router history={history}>
                    <Switch>
                        <Route path="/">
                            <Box boxShadow="0px 2px 4px -2px #AB9246" background="#4056A1" color="#F13C20" padding="20px" >
                                <Box fontWeight="normal" fontFamily="Bebas Neue" fontSize="80px" textShadow="0px 2px 4px -2px #2a3869">
                                    <Box style={{ flexDirection: 'row', justifyContent: 'flex-end', color: "#EFE2BA" }} fontFamily="Roboto" fontSize="14px" display="flex">
                                        <Box color={lang == "EN" ? "#F13C20" : "#EFE2BA"} onClick={() => this.setState({ lang: "EN" })}>EN</Box>
                                        |<Box color={lang == "ES" ? "#F13C20" : "#EFE2BA"} onClick={() => this.setState({ lang: "ES" })}>ES</Box>
                                        |<Box color={lang == "PR" ? "#F13C20" : "#EFE2BA"} onClick={() => this.setState({ lang: "PR" })}>PR</Box>  </Box>
                                    Nicolas Mitchell
                                </Box>
                            </Box>
                            <Box boxShadow="0px 2px 4px -2px #AB9246" borderRadius="20px" background="#4056A1" fontFamily="Roboto" color="#EFE2BA" paddingX="20px" paddingY="100px" maxWidth="60%" marginX="auto" marginY="50px">
                                <Box style={{ textAlign: 'center' }}>
                                    <h1> {this.textMap[lang]} </h1>
                                    <h2><a style={{ color: '#F13C20' }} href="http://nico-mitchell.com/resume/resume-plain.pdf">{this.textMap2[lang]}</a></h2>
                                </Box>
                                <Box marginX="auto" maxWidth="200px">
                                    <a href="https://github.com/nicomitchell"><Icon name="github" width="100px" fill="#EFE2BA" /></a>
                                    <a href="https://www.linkedin.com/in/nicolas-mitchell-b22185149/"><Icon name="linkedin" width="100px" fill="#EFE2BA" /></a>
                                </Box>
                            </Box>
                        </Route>
                    </Switch>
                </Router>
                <Box display="flex" height="500px" />
            </div >
        );
    }
}

export default App;