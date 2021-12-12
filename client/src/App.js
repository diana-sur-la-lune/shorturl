import React, {Fragment} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './routes'
// import { AuthPage } from './pages/AuthPage';
// import { CreatePage } from './pages/CreatePage';
// import { DetailPage } from './pages/DetailPage';
// import { LinksPage } from './pages/LinksPage';
import 'materialize-css'


function App() {
  const routes = useRoutes(true)
  return (
    <Router>
    <div className="container">
      {routes}
    </div>
    </Router>
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
