import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/common.scss';
import App from './App';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path="login" element={<LoginPage/>}/>
                    {/*<Route path="signup" element={<SignupPage/>}/>*/}
                </Route>
                {/*<Route path='/user/:' element={<ChattingPage/>}/>*/}
                <Route path="*" element={
                    <p>웁스! 뭔가 잘못되었습니다ㅠ</p>
                }/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
