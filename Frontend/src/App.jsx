import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import Customize from './pages/Customize';
import Home from './pages/Home';
import { userDataContext } from './context/UserContext';

function App() {
  const { userData } = useContext(userDataContext);

  return (
    <Routes>
      <Route path="/"element={userData?.assistantImage && userData?.assistantName ? <Home />: <Navigate to="/customize" />}/>
      <Route path="/signup" element={!userData ? <SignUp /> : <Navigate to="/" />} /> <Route path="/signin" element={!userData ? <SignIn /> : <Navigate to="/" />} /> 
      {/* <Route path="/customize" element={userData ? <Customize /> : <Navigate to="/signin" />} />  */}
      <Route path="/customize" element= {<Customize />}  /> 
    </Routes>
  );
}

export default App;
