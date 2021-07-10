import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";

const routes = [
    {path: "/profile/:id", component: About},
    {path: "/about", component: About},
    {path: "/", component: Home},
]

function AppRouter() {
  return (
      <Router>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/about">About</Link>
            </div>
        </nav>
        <Switch>
            {routes.map((item, index) => {
                return (
                    <Route path={item.path} component={item.component} key={index} />
                );
            } )}
        </Switch>
      </Router>
  );
}
// function AppRouter() {
//   return (
//       <Router>
//             <nav class="navbar navbar-light bg-light">
//                 <div class="container-fluid">
//                     <Link class="navbar-brand" to="/">Navbar</Link>
//                     <Link class="navbar-brand" to="/">Home</Link>
//                     <Link class="navbar-brand" to="/about">About</Link>
//                 </div>
//             </nav>
//             <div>
//                 <Switch>
//                     {routes.map(item => {
//                         return (
//                             <Route path={item.path} component={item.component}/>
//                         );
//                     } )}
//                 </Switch>
//             </div>
//       </Router>
//   );
// }

export default AppRouter;
