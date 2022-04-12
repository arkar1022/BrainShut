import './App.css';
import Theme from './theme';
// import { ThemeProvider } from 'styled-components';
import {ThemeProvider,} from '@mui/material/styles';
import { LogReg, Home, Category, DeveloperIntro, AccountSetting, Leaderboard, Quiz, ForgotPassword} from './Pages';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={Theme}>
      <Routes>
        <Route path="/" element={<LogReg/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/developerintro" element={<DeveloperIntro/>}/>
        <Route path="/accountsetting" element={<AccountSetting/>}/>
        <Route path="/leaderboard" element={<Leaderboard/>}/> 
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;