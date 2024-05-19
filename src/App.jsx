import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Features/Pages/Home/Navbar";
import SignupCart from "./components/Admin/Signup";
import Signin from "./components/Admin/SIgnIn";

function App() {
  return (
    <Router>
      <>
        {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}
        {/* <Navbar/>   */}
        <Routes>
          <Route path="/signup" element={<SignupCart />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
