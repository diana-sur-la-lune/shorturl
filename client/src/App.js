import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
import {useAuth} from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext';
import 'materialize-css'


function App() {
  const {token, login, logout, userId} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
    <Router>
    <div className="container">
      {routes}
    </div>
    </Router>
    </AuthContext.Provider>
  )
}

// function App() {
  // const routes = useRoutes(true)
// return (
//   <Router>
//     <Fragment>
//     <div className="container">
//       <Routes> 
//     <Route exact path='/' element={<AuthPage/>}> </Route>
//   </Routes>
//   </div>
//   </Fragment>
//   </Router>
// )
// }

export default App
