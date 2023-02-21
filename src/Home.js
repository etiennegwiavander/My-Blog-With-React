import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Homepage = () => {

  const {data: blogs, isLoading, error}= useFetch("http://localhost:8000/blogs")
    
    return ( 
      <div className="homepage"> 
      { isLoading && <div>Loading...</div>} 
      { error && <div> {error}</div>}
      {blogs && <BlogList blogs={ blogs } />}
      
      </div>
     );
}
 
export default Homepage;

// http://localhost:8000/blogs