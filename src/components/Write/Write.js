import React, { useState } from "react";
import CKEditor from "ckeditor4-react";
import { createPostMutation } from "../../queries/mutations";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";

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
    props.createPost({
      variables: newPost,
    });
  };

  return (
    <div>
      <h1>THIS IS WRITE COMPONENT</h1>
      <form>
        <label for="title">Title</label>
        <input type="text" id="title" onChange={getTitleData} />
        <label for="category">Category</label>
        <input type="text" id="category" onChange={getCategoryData} />
        <CKEditor id="body" onChange={getBodyData} />
        <button type="submit" onClick={submitPostHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default compose(graphql(createPostMutation, { name: "createPost" }))(
  Write
);
