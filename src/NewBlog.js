import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const NewBlog = () => {
    const [title, setTitle] = useState(" ")
    const [body, setBody] = useState(" ")
    const [author, setAuthor] = useState("Etienne")
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory(" ")

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author}
        setIsLoading(true)

        fetch('http://localhost:8000/blogs', {
            method:"POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog) 
        }).then(() =>{
            setIsLoading(false)
            history.push("/")
        }

        )

    }
    return ( 
        <div className="new-blog">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" 
                    required
                    value={ title }
                    onChange = {(e)=> setTitle(e.target.value)}
                />
                <label>Blog Content</label>
                <textarea 
                    required
                    value={ body }
                    onChange ={(e)=> setBody(e.target.value)}
                ></textarea>
                <select
                    value={ author }
                    onChange ={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="Etienne">Etienne</option>
                </select>
                {!isLoading && <button> Add Blog </button>}
                {isLoading && <button disabled> Adding blog... </button>}
            </form>

        </div>


        );
}
 
export default NewBlog;