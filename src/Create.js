import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=> {
        e.preventDefault();
        const blog = { title, body, author }
        
        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setIsPending(false)
            //history.go(-1)
            history.push('/')
        })

    }

    return (
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input type="type" 
                        required 
                        value= {title}
                        onChange={(e)=> setTitle(e.target.value)}
                        />
                <label> Blog body:</label>
                <textarea required
                        value= {body}
                        onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select value={author}
                        onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add a blog</button>}
                {isPending && <button>Adding blog ...</button>}

                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    )
}

export default Create
