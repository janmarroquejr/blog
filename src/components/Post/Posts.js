import React from "react";
import { Link } from "react-router-dom";
import { getPostsQuery } from "../../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import ReactHtmlParser from "react-html-parser";

const Posts = (props) => {
  let data = props.data;

  console.log(data);

  let postList;
  if (data.getPosts === undefined) {
    postList = <h1>GETTING DATA</h1>;
  } else {
    postList = data.getPosts.map((post) => {
      return (
        <div className="main-post">
          <div className="post-title">
            <h1>{post.title}</h1>
            <div className="post-details"></div>
          </div>

          <div className="post-body">
            <div className="post-links">
              <Link></Link>
            </div>
            <div className="post-content">{ReactHtmlParser(post.body)}</div>
          </div>
        </div>
      );
    });
  }

  return <>{postList}</>;
};

export default compose(graphql(getPostsQuery))(Posts);
