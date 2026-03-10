import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../pages/Loader";
import "./Blog.css";
import ReactPaginate from "react-paginate";
import ScrollToTop from "../components/ScrollToTop";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const per_page = 6;

  useEffect(() => {
    setLoading(true);

    fetch(
      `/backend/wp-json/wp/v2/posts?_embed&author=2&per_page=${per_page}&page=${currentPage + 1}`,
    )
      .then((response) => {
        const totalPages = response.headers.get("X-WP-TotalPages");
        setPageCount(Number(totalPages));
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [currentPage]);

  return (
    <>
      {loading && <Loader />}

      <div className="blog-page">
        <div className="container">
          <div className="row">
            {posts.map((post) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

              return (
                <div key={post.id} className="col-md-4 mb-4 d-flex">
                  <div className="blog-post">
                    {image && (
                      <Link to={`/blog/${post.slug}`}>
                        <img src={image} alt={post.title.rendered} />
                      </Link>
                    )}

                    <Link to={`/blog/${post.slug}`}>
                      <h2
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />
                    </Link>

                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {pageCount > 1 && (
            <ReactPaginate
              previousLabel={"prethodna"}
              nextLabel={"sljedeća"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={1}
              pageRangeDisplayed={2}
              onPageChange={(e) => {
                setCurrentPage(e.selected);
                window.scrollTo(0, 0);
              }}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
