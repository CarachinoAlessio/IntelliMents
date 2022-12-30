import './App.css';
import {theme} from "./theme";
import {useEffect, useState} from 'react'
import {Container, Drawer, ThemeProvider} from "@mui/material";
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import NavbarComp from "./layout/NavbarComp";
import {LoginComp} from "./components/LoginComp";
import HomePageComp from "./layout/HomePageComp";
import {DataContext} from "./DataContext";
import {Navigate} from "react-router";
import MiniDrawer from "./layout/Drawer";
import {StoriesComp} from "./components/StoriesComp";
import {NewsComp} from "./components/NewsComp";
import {ExchangeComp} from "./components/ExchangeComp";
import {InvestorsComp} from "./components/InvestorsComp";
import {AboutComp} from "./components/AboutComp";
import {HelpComp} from "./components/HelpComp";


function App() {
    return (
        <Router>
            <App2/>
        </Router>
    )
}

function App2() {

    const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();


    const doLogout = async () => {
        //await API.logOut();
        //setEnableSelectCourses(false)
        //setLoggedIn(false);
        //setStudent({});
        navigate('/');
    }

    return (
        <ThemeProvider theme={theme}>
            <DataContext.Provider value={{
                // coursesInContext: coursesInContext
            }}>
                <Routes>

                    <Route path='/' element={<><Layout loggedIn={loggedIn} //student={student} setStudent={setStudent}
                                                       doLogout={doLogout}></Layout></>}>
                        <Route path='/' element={!loggedIn ? <>
                            <div style={{paddingTop: '50px'}}></div>
                        </> : <Navigate to='/home'/>}></Route>
                        <Route path='/home' element={loggedIn ? <HomePageComp loggedIn={loggedIn}></HomePageComp> :
                            <Navigate to='/login'/>}/>
                        <Route path='/login' element={<LoginComp loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                            //setStudent={setStudent}
                            //setSearchingPlan={setSearchingPlan}
                        ></LoginComp>}></Route>
                        <Route path='/stories' element={<StoriesComp></StoriesComp>}></Route>
                        <Route path='/news' element={<NewsComp></NewsComp>}></Route>
                        <Route path='/investors' element={<InvestorsComp></InvestorsComp>}></Route>
                        <Route path='/exchange' element={<ExchangeComp></ExchangeComp>}></Route>
                        <Route path='/about' element={<AboutComp></AboutComp>}></Route>
                        <Route path='/help' element={<HelpComp></HelpComp>}></Route>
                    </Route>

                    <Route path='*' element={<h1>Error 404, Page Not Found</h1>}/>
                </Routes>
            </DataContext.Provider>
        </ThemeProvider>


    );
}

function Layout(props) {

    let {param} = useParams();

    let {student, setStudent, loggedIn} = props

    if (param !== undefined && param !== 'login')
        return <h1>404 Page not found</h1>

    return (
        <div>
            <header>
                <MiniDrawer></MiniDrawer>
            </header>
            <Container maxWidth="lg" sx={{marginTop: '70px'}}>
                <main>
                    {
                        <Outlet/>
                    }

                </main>
            </Container>

        </div>
    );


}

export default App;
