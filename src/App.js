import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (<BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar
                />
                <div className='content'>
                    <Routes>
                        <Route path='/profile/:userID' element=
                            <ProfileContainer/>
                        />
                        <Route path='/profile/' element=
                            <ProfileContainer/>
                        />
                        <Route path="/" element=
                            <ProfileContainer/>
                        />
                        <Route path="/messages/*" element=
                            <DialogsContainer/>
                        />
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>);
    }
}

export default connect((state) => ({
    initialized: state.app.initialized
}), {initializeApp})(App);
