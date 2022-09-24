import React, {Suspense, lazy} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Router, Routes} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import * as PropTypes from "prop-types";

/*const DialogsContainer = lazy(() => {
    import('./components/Dialogs/DialogsContainer')
})*/


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar
                />
                <div className='content'>
                    <React.Suspense fallback={<div>lo</div>}>
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
                            <Route path="/messages/*" element={<DialogsContainer/>}
                            />
                            <Route path="/login" element={
                                <Login/>
                            }/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>


        );
    }
}

let AppContainer = connect((state) => ({
    initialized: state.app.initialized
}), {initializeApp})(App);
const MainApp = () => {
    return <Provider store={store}>
        <HashRouter >
            <AppContainer/>
        </HashRouter>
    </Provider>

}

export default MainApp