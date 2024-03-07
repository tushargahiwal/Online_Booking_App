import logo from './logo.svg';
import './App.css';
import UserRegComponent from './components/UserRegComponent';
import NavbarComponent from './components/NavbarComponent';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import Login from './components/LoginComponent';
import MovieList from './components/MovieList';
import TheaterList from './components/TheaterList';
import UserHomeComponent from './components/UserHomeComponent';
import LogoutComponent from './components/LogoutComponent';
import TheatreRegComponent from './components/TheatreRegistration';
import ShowAdd from './components/ShowAdd';
import UserProfile from './components/UserProfile';

function App() {
  return (
     <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
     */}
     {/* <UserRegComponent></UserRegComponent> */}
     <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/registration" element={<UserRegComponent/>}></Route>
         <Route path='/movielist' element={<MovieList></MovieList>}></Route>
         <Route path='/theaterlist' element={<TheaterList></TheaterList>}></Route>
         <Route path='/profile' element={<UserHomeComponent></UserHomeComponent>}></Route>
         <Route path='/logout' element={<LogoutComponent></LogoutComponent>}></Route>
         <Route path='/theaterregistration' element={<TheatreRegComponent></TheatreRegComponent>}></Route>
         <Route path='/showadd' element={<ShowAdd></ShowAdd>}></Route>
         <Route path='/profile1' element={<UserProfile></UserProfile>}></Route>
       </Routes>

       {/* <ShowAdd></ShowAdd> */}

       
    </div>
  );
}

export default App;
