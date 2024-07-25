import React from 'react';
import '../assets/css/BlogPostPage.css'; // Optional für CSS-Styling


const ExplanationSite = ({ title, author, date, content }) => {
  return (
    <div className="blog-post-page">
      <h1 className="blog-post-page-title">Ein Projekt</h1>
      <div className="blog-post-page-meta">
        <span className="blog-post-page-author">By Stefan</span>
        <span className="blog-post-page-date">{date}</span>
      </div>
      <div className="blog-post-page-content">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default ExplanationSite;