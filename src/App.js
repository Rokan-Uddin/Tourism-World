import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AllPlan from "./components/AllPlan/AllPlan";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Join from "./components/Join/Join";
import Login from "./components/Login/Login";
import MyPackage from "./components/MyPackage/MyPackage";
import NotFound from "./components/NotFound/NotFound";
import PackageDetails from "./components/PackageDetails/PackageDetails";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
           <AuthProvider>
             <Router>
          <Header></Header>
          <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              
              <Route path="/service/:serviceID">
                <PackageDetails></PackageDetails>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/myplan">
                <MyPackage></MyPackage>
                </PrivateRoute>
                <PrivateRoute path="/allplan">
                  <AllPlan></AllPlan>
                </PrivateRoute>
              <PrivateRoute path="/join">
                <Join></Join>
              </PrivateRoute>
              <Route path="/register">
                  <Register></Register>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
