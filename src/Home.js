// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch'

const Home = () => {
  
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // }
 const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className="home">
      {error && <div>{error}</div>}
      { isPending && <div>Loading ... </div>}
      
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      
    </div>
  );
}
 
export default Home;

// const Home=()=> {
//    const [blogs, setBlogs] = useState([
//      {...}, {...}, {...}
//    ])
//    return (
//    <div className="home">
//       <BlogList blogs={blogs} />
//    </div>
//    )
// }
// 

// const [name, setName] = useState('mario');
// const [age, setAge] = useState(20);

// const handleClick =()=>{
//  setName("Luis");
//  setAge(35);
// }

// const handleClick =(e)=>{
//  console.log("Hello", e)
// }
// const handleClickAgain = (name, e)=>{
//   console.log('Hello, ' + name, e.target)
// } //e.target 은 <button>Click me again</button>

// return  문 안에
// <button onClick={handleClick}> Click me again</button>
// <button onClick={(e)=> handleClickAgain("Mario", e)}> Click me again</button>
