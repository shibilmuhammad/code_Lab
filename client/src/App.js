import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Pages/Home';
import Categories from './components/Pages/Categories';
import MyProjects from './components/Pages/MyProjects';
import Favorites from './components/Pages/Favorites';
import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import ForgotPassword from './components/Pages/ForgotPassword';
import EnterOtp from './components/Pages/EnterOtp';
import SetPassword from './components/Pages/SetPassword';
import Description from './components/Pages/Description';
import LatestProject from './components/Pages/LatestProject';
import Developer from './components/Pages/Developer';
import Profile from './components/Pages/Profile';
import EditProfile from './components/Pages/EditProfile';
import AddProject from './components/Pages/AddProject';
import ProjectList from './components/Pages/ProjectList';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  const appRouter =  createBrowserRouter([
    {
      path : '/',
      element:<Home />
    },
    {
      path : '/category',
      element:<Categories />
    },
    {
      path : '/myprojects',
      element:<MyProjects />
    },
    {
      path : '/favorites',
      element:<Favorites />
    },
    {
      path : '/signup',
      element:<SignUp />
    },
    {
      path : '/login',
      element:<Login />
    },
    {
      path : '/forgotpassword',
      element:<ForgotPassword />
    },
    {
      path : '/enterotp',
      element:<EnterOtp />
    },
    {
      path : '/setpassword',
      element:<SetPassword />
    },
    {
      path : '/description/:id',
      element:< Description />
    },
    {
      path : '/latestproject',
      element:< LatestProject />
    },
    {
      path : '/developer/:publisher_id',
      element:< Developer />
    },
    {
      path : '/profile',
      element:< Profile />
    },
    {
      path : '/editprofile',
      element:< EditProfile />
    },
    {
      path : '/addproject',
      element:< AddProject />
    },
    {
      path : '/projects',
      element:< ProjectList />
    }
  ])
  return (
    <div className="App">
        <Provider store={appStore}> <RouterProvider router={appRouter} /></Provider>
       
    </div>
  );
}

export default App;
