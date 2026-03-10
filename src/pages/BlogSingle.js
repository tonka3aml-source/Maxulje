import "./Blog.css";
import Loader from "../pages/Loader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogSingle = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/backend/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);
        }
      })
      .catch((error) => console.log(error));
  }, [slug]);

  if (!post) {
    return <Loader />;
  }

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="blog-single">
      <div
        className="masthead"
        style={{
          backgroundImage: image ? `url(${image})` : "none",
        }}
      >
        <div className="container">
          <div className="post-heading">
            <h1>{post.title.rendered}</h1>
          </div>
        </div>
      </div>

      <article className="mb-4">
        <div className="container">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogSingle;
