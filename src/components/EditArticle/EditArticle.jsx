import React, { useEffect, useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
const EditArticle = () => {
const navigator = useNavigate()
  const { slug } = useParams();
  const [articleData, setArticleData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      article: {
        title: data.get("articleTitle"),
        description: data.get("about"),
        body: data.get("description"),
        tagList: [data.get("tag")],
      },
    };
    // const userDetails = JSON.parse(localStorage.getItem("app__user"));
    const headers = {
      authorization: `Token ${(localStorage.getItem("app__user"))}`,
      "Content-Type": "application/json",
    };
    await fetch(`https://api.realworld.io/api/articles/${slug}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          console.log("success", result);
        } else {
          console.log("else", result);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      window.location.replace("/")
  };
  const theme = createTheme();

  useEffect(() => {
    const apiCall = async (data) => {
      try {
        const response = await axios.get(
          `https://api.realworld.io/api/articles/${data}`
        );
        setArticleData(response.data.article);
      } catch (error) {
        console.log("error");
      }
    };
    apiCall(slug);
  }, [slug]);

  //const { title, description, body, tagList } = articleData;

  return (
    <>
      {articleData ? (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3 className="text-secondary"><b>Edit Post</b></h3>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="articleTitle"
                      required
                      fullWidth
                      id="articleTitle"
                      placeholder="Article Title"
                      autoFocus
                      defaultValue={articleData.title}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="about"
                      placeholder="What's this article about?"
                      name="about"
                      defaultValue={articleData.description}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextareaAutosize
                      maxRows="50"
                      required
                      fullWidth
                      id="description"
                      placeholder="Write your article (in markdown)"
                      name="description"
                      style={{ width: "100%", height: "100px" }}
                      defaultValue={articleData.body}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="tag"
                      placeholder="Tags"
                      id="tag"
                      defaultValue={articleData.tagList}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      //   <div>
      //   <form>
      //     <div className=" text-center" style={{ paddingTop: "100px" }}>
      //       <input
      //         id="title"
      //         className="settings"
      //         placeholder="Article Title"
      //         // onChange={this.props.listener}
      //         defaultValue={articleData.title}
      //       ></input>
            
      //       <br></br>
      //       <input
      //         id="description"
      //         className="settings"
      //         placeholder="What's this article about?"
      //         // onChange={this.props.listener}
      //         defaultValue={articleData.description}
      //       ></input>
      //       <br></br>

      //       <textarea
      //         id="body"
      //         className="settings"
      //         rows={"8"}
      //         placeholder="Write Your Article"
      //         // onChange={this.props.listener}
      //         defaultValue={articleData.body}
      //       ></textarea>
      //       <br></br>

      //       <input
      //         id="tagList"
      //         className="settings"
      //         placeholder="Tags"
      //         // onChange={this.props.listener}
      //         defaultValue={articleData.tagList}
      //       ></input>

      //       <div>
      //         <button
      //           className="btn btn-success m-3 px-5"
      //           onSubmit={handleSubmit}
      //         >
      //           Publish
      //         </button>
      //       </div>
      //     </div>
      //   </form>
      // </div>
      ) : <Loading></Loading>}
    </>
  );
};
export default EditArticle;
