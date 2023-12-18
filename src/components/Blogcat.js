import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet';

export default function Blogcat() {
    const {postSlug} = useParams()
    const [posts,setPosts] = useState({})
    useEffect(() => {
        const postData = async () => {
          await fetch(`https://technic-mentors-backend.vercel.app/api/auth/getpost/${postSlug}`, {
            method: "GET",
          })
            .then((res) => res.json())
            .then((data) => setPosts(data) );
        };
        postData();
      }, [postSlug]);
      const sanitizedContent = { __html: DOMPurify.sanitize(posts.content) };
  return (
    <div>
      <Helmet>
      <meta name="description" content={posts.meta} />
      </Helmet>
      <div className="home-container">
        <div
          className="background-image3"
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
              >
                {posts.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
<div className="container blog-container">
      <div className='mt-5' dangerouslySetInnerHTML={sanitizedContent}></div>
      </div>
    </div>
  )
}
