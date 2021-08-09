import { Link } from 'react-router-dom';
import moment from 'moment';


const BlogList = ({ blogs, title, handleDelete }) => {
  const post_date = moment().format('MMMM Do YYYY, h:mm:ss a');
  
  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to= {`/blogs/${blog.id}`}>
            <h3>{ blog.title }</h3>
            <p><small><i>Posted by { blog.author }<span className="postDate">{post_date}</span></i></small></p>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;