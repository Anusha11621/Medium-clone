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
  if(response){
    return (
      <div>
        <h1>{response.title}</h1>
      </div>
    )
  }
  else{
    null
  }
}

export default Singleuser