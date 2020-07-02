import React, { useState } from "react";
import CKEditor from "ckeditor4-react";
import { createPostMutation } from "../../queries/mutations";
import { getPostsQuery } from "../../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import "./style.css";

const Write = (props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");

  const getBodyData = (e) => {
    const data = e.editor.getData();
    setBody(data);
  };

  const getTitleData = (e) => {
    setTitle(e.target.value);
  };

  const getCategoryData = (e) => {
    setCategory(e.target.value);
  };

  const submitPostHandler = (e) => {
    e.preventDefault();
    let newPost = {
      title: title,
      category: category,
      body: body,
    };

    if (body === "") {
      alert("You gotta have body content, dude.");
    } else if (title === "") {
      alert("You gotta have a title, dude.");
    } else {
      props.createPost({
        variables: newPost,
        refetchQueries: [{ query: getPostsQuery }],
      });

      setTitle("");
      setCategory("");
      setBody("");
      alert("Posted Successfully!");
    }
  };

  return (
    <div class="main-write">
      <form className="main-form">
        <div className="title-cat">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" onChange={getTitleData} value={title} />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            onChange={getCategoryData}
            value={category}
          />
        </div>
        <div className="body">
          <label htmlFor="body">Content: </label>
          <CKEditor data={body} id="body" onChange={getBodyData} />
        </div>
        <button type="submit" onClick={submitPostHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default compose(
  graphql(createPostMutation, { name: "createPost" }),
  graphql(getPostsQuery)
)(Write);
