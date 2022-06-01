import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/navbar";
import { HomePage, Detail } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartPage } from "./pages/cart";
import { Footer } from "./components/footer";
import SignUP, { SignUp } from "./components/navbar/signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignUP} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
