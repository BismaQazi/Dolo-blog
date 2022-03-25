import { Link } from 'react-router-dom';

const BlogList = ({myblog,mytitle,}) => {

    return ( 
        <div className="blog-list">
            <h2>{mytitle}</h2>
             {myblog.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <Link to={"/blogs/" + blog.id}>
                <h2>{blog.title}</h2>
             <p> Written by {blog.author}</p>
                </Link>
            
            
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;