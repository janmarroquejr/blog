import React from "react";
import { Link } from "react-router-dom";
import { getPostsQuery } from "../../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import ReactHtmlParser from "react-html-parser";
import "./style.css";

const Posts = (props) => {
  var data;
  if (props.data.getPosts === undefined) {
    data = undefined;
  } else {
    data = props.data.getPosts;
  }

  console.log(data);

  let postList;
  if (data === undefined) {
    postList = <h1>GETTING DATA</h1>;
  } else {
    postList = data.map((post) => {
      return (
        <div className="main-post">
          <div className="post-title">
            <h1>{post.title}</h1>
            <div className="post-details"></div>
          </div>

          <div className="post-body">
            <div className="post-links">
              <Link to="#" className="links">
                {post.createdAt.substring(0, 10)}
              </Link>
              <Link to="#" className="links">
                Leave a comment
              </Link>
              <Link to="#" className="links">
                Edit
              </Link>
            </div>
            <div className="post-content">{ReactHtmlParser(post.body)}</div>
          </div>
          <div className="post-line">
            <hr />
          </div>
        </div>
      );
    });
  }

  return <>{postList}</>;
};

export default compose(graphql(getPostsQuery))(Posts);
