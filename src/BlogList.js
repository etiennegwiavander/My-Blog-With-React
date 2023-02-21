// the destructuring done to bring the props to this 
// BlogList component is done with curley braces. *Note*

import { Link } from "react-router-dom";

const BlogList = ({blogs,  title}) => {

    return ( 
        
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                        
                    </Link>
                    
                    {/* This is how the function that handles the delete is being called */}
                </div>

            ))}            
        </div>

     );
}
 
export default BlogList;