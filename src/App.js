import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import React from "react";
import Login from "./Components/Login/Login";
import RedirectPage from "./Components/GoogleAuthredurectPage/googleAuthRedirect";
import PageNotFoundPage from "./Components/404/404";
import HomePage from "./Components/Home/Home";
import CampaignPage from "./Components/Campaign/Campaign";
import {Layout} from "antd";
import Wrapper from "./layout";
import AddCampaign from "./Components/Campaign/AddCampaign";
import NewCampaign from "./Components/Campaign/NewCampaign";

function App() {
  return (
    <Router>
        <Wrapper>
       <Routes>
           <Route path={'/login'} element={<Login/>} />
           <Route path={'/redirect'} element={<RedirectPage/>}/>
            <Route path={'/'} element={<HomePage/>}/>
           <Route path={'/campaign'} element={<CampaignPage/>}/>
           <Route path={'/campaign/add'} element={<NewCampaign/>}/>
           <Route path={'*'} element={<PageNotFoundPage/>}/>
       </Routes>
        </Wrapper>
    </Router>
  );
}

export default App;
