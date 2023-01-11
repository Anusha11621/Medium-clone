import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import axios from "axios";
function Singleuser(props) {
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
            <div className="d-flex gap-2 align-items-center">
              <div>
                <img src={response.author.image} className="rounded-circle" />
              </div>
              <div>
                <span>{response.author.username}</span>
                <br></br>
                <div>
                  <span>{response.createdAt.slice(0, 10)}</span>
                </div>
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
              className="w-25  rounded-circle"
            ></img>
            <br></br>
            <br></br>
            <h6>{response.author.username}</h6>
            <p>{response.favoritesCount} Followers</p>
            <button className="btn btn-warning">Follow</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Singleuser;
