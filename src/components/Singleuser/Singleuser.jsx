import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function Singleuser(props) {
  const {slug} = useParams()
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const apiCall = async (data) => {
      try {
        const response = await axios
          .get(`https://api.realworld.io/api/articles/${data}`);
        setResponse(response.data.article);
      } catch (error) {
        console.log("error");
      }
    };
    apiCall(slug);
  }, [slug]);
  console.log(response);
  // const article = props.data.multiuser&&props.data.multiuser.articles.find((article)=>article.title === params)
  // console.log(article);
  // if(props.data.multiuser)
  // return(
  //   <div>
  //     {
  //       data.map((data)=>{
  //         return (
  //           <h1>{data.title}</h1>
  //         )
  //       })
  //     }
  //   </div>
  // )

  // return(
  //   {
  //     (response) ? (<div><h1>{response.title}</h1></div>):null
  //   }
  // )
  if(!response){
    return (
      
      <div className='p-5 m-5 d-flex justify-content-center gap-3'>
        {/* <h3 className='pt-5 mt-3'>Loading....</h3> */}
        <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">L</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">o</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">a</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">d</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="sr-only">i</span>
          </div>
          
      </div>
    )
  }
  else if(response){
    return(
      <div className=' p-5 mt-5'>
        <div className='d-flex gap-2 align-items-center'>
          <div>
            <img src={response.author.image} className='rounded-circle'/>
          </div>
          <div>
            <span>{response.author.username}</span>
            <br></br>
            <div>
              <span>{response.createdAt.slice(0,10)}</span>
            </div>
          </div>
        </div>
        <br></br>
        <div>
          <h1>{response.title}</h1>
        </div>
        <br></br>
        
      </div>
    )
  }
}

export default Singleuser