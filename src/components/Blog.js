import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);
  const [filterPosts, setFilterPosts] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState(new Set());
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const Getallposts = async () => {
    setLoading(true);
    await fetch("https://technic-mentors-backend.vercel.app/api/auth/getallposts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        const newCategory = new Set(data.map((post) => post.category));
        setUniqueCategory(newCategory);
        if (newCategory.size > 0) {
          setCategory([...newCategory][0]);
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    Getallposts();
  }, []);

  useEffect(() => {
    if (category === null) {
      setFilterPosts([]);
    } else {
      const filterpost = posts.filter((post) => post.category === category);
      setFilterPosts(filterpost);
    }
  }, [category, posts]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container && container.scrollTop + container.clientHeight >= container.scrollHeight - 20) {
      setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
    }
  };

  useEffect(() => {
    if (!loading) {
      const container = containerRef.current;
      if (container) {
        container.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (container) {
          container.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [loading]);

  return (
    <div className="ps-0" style={{overflowX:"hidden"}}>
      <Helmet>
        <link rel="canonical" href="https://technicmentors.com/blog" />
      </Helmet>
      <div className="home-container">
        <div
          className="background-image1"
          style={{ backgroundImage: `url(${"assets/img/bg-header.webp"})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
              >
                Blog Section
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 d-flex justify-content-between">
        <div className="col-md-3">
          <div
            className="background-img3"
            style={{ backgroundColor: "#f6f9fe" }}
          >
            <div className="color-overlay3 pb-3 pt-2 outlet">
              {posts &&
                [...uniqueCategory].map((category) => {
                  return (
                    <div className="text-dark" key={category}>
                      <button
                        className="btn w-100 text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target=""
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        <div className="d-flex justify-content-start">
                          <div>
                            <span
                              className="text-dark ms-2"
                              onClick={() => setCategory(category)}
                            >
                              {category}
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="col-md-9" ref={containerRef}>
          <div className="container">
            <p className="text-center p-2" style={{backgroundColor:"#e3eaf7",display:"inline-block"}}> <strong> Note </strong>: Get insights about the tech world in English and Urdu languages at <a href="https://urdustem.com/" target="blank" rel="noopener"> Urdu Stem</a>.</p>
          <div className="row">
            {filterPosts.slice(0, visiblePosts).map((post) => (
              <div className="col-md-4 col-12 mt-3 mb-3" key={post.id}>
                <Link style={{ textDecoration: "none" }} to={`/blog/${post.slug}`}>
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontWeight: "normal" }}>
                        {post.title.length > 40 ? post.title.slice(0, 40) + "..." : post.title}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          </div>
          {/* {loading && <p>Loading...</p>} */}
        </div>
      </div>
    </div>
  );
}
