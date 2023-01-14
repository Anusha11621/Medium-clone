import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import Loading from "../Loading";
import Comments from "../Comments/Comments";
import axios from "axios";
import '../../App.css'
function Singleuser(props) {
  const navigate = useNavigate()
  const { slug } = useParams();
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const apiCall = async (data) => {
      try {
        const response = await axios.get(
          `https://api.realworld.io/api/articles/${data}`
        );
        setResponse(response.data.article);
      } catch (error) {
        console.log("error");
      }
    };
    apiCall(slug);
  }, [slug]);
  // console.log(response);
  
  const handleDelete = async (data) => {
    // const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const response = await axios.delete(`https://api.realworld.io/api/articles/${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${localStorage.getItem("app__user")}`
        }
      }
    );
    if (response.status === 204) {
      navigate('/');
    }
    console.log(response);
  };
  const handleEdit = (data) => {
    navigate(`/edit/${data}`);
  };
  
  if (!response) {
    return (
      <Loading></Loading>
      // <img src='https://cdn.dribbble.com/users/1175431/screenshots/5483835/2018-10-30__1_.gif'></img>
    );
  } else if (response) {
    return (
      <div className="container p-5 mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-8">
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2 align-items-center">
                  <div>
                    <img src={response.author.image} style={{height:'50px',width:'50px'}} className="rounded-circle" />
                  </div>
                  <div>
                    <span>{response.author.username}</span>
                    <br></br>
                    <div>
                      <span>{response.createdAt.slice(0, 10)}</span>
                    </div>
                  </div>
                </div>
                <div>
                { 
                    response.author.username === localStorage.getItem('user_name')?
                    <div>
                      <button className="btn btn-outline-secondary focus ml-3" onClick={() => handleEdit(response.slug)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                      </svg> Edit
                      </button>
                      &nbsp; &nbsp;
                      <button className="btn btn-outline-danger  focus ml-3" onClick={()=>handleDelete(response.slug)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                      </svg>Delete
                      </button>
                    </div>:null
                }
            </div>
            </div>
            <br></br>
            <div>
              <h4>{response.title}</h4>
              <h6 className="text-secondary">{response.description}</h6>
              <br></br>
              <img
                src="https://miro.medium.com/fit/c/250/168/1*IODA6FO8_7mtqSX8KyWt-Q.png"
                className="h-25 w-100"
              ></img>
              <br></br>
              <br></br>
              <p className="lh-lg">{response.body}</p>
              <p className="d-flex gap-3 ">
                {response.tagList.map((tag) => {
                  return (
                    <span className="border border-secondary p-2 rounded">
                      {tag}
                    </span>
                  );
                })}
              </p>
            </div>
            <br></br>
          </div>
          <div className="col-sm-12 col-lg-4 p-5 d-none d-lg-block">
            <button className="btn btn-dark px-5">Get unlimited access</button>
            <br></br>
            <br></br>
            <img
              src={response.author.image}
              className="  rounded-circle" style={{height:'70px',width:'70px'}}
            ></img>
            <br></br>
            <br></br>
            <h6>{response.author.username}</h6>
            <p>{response.favoritesCount} Followers</p>
            <button className="btn btn-warning">Follow</button>
          </div>
        </div>
        <div>
        <Comments data={props.data}></Comments>
        </div>
      </div>
    );
  }
}

export default Singleuser;
