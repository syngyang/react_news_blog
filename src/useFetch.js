import {useState, useEffect} from 'react'

const useFetch = (url)=> {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false)
    
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
          .then(res => {
            // console.log(res)
            if(!res.ok){
              throw Error('관련 데이터를 가져 올 수 없습니다.')
            }
            return res.json(); // javascript로
          })
          .then((data)=> {
            setData(data)
            setIsPending(false)
            setError(null)
          })
          .catch(err =>{
              if (err.name === 'AbortError'){
                  console.log('fetch aborted')
              } else {
                setIsPending(false);
                setError(err.message);
              }
            
          })
        return ()=> console.log('clean-up')
    }, [url]) 
    return { data, isPending, error}
}

export default useFetch;