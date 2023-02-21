
import Navbar from "./Navbar";
import Homepage from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewBlog from "./NewBlog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar> 
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route path="/create">
              <NewBlog/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          
        </div>
      </div>
    </Router> 
  );
}

export default App;
