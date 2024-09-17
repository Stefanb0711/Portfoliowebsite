import React, {useEffect} from 'react';
import '../assets/css/BlogPostPage.css'; // Optional für CSS-Styling
import postsData from "../blogPosts.json";


/*const postContent = [
  { type: 'h1', content: 'Wetterapp-React' },
  { type: 'p', content: 'By Stefan' },
  { type: 'h2', content: 'Funktionalität' },
  { type: 'ul', content: [
    'Suchleiste, die bei jedem eingegebenen Suchbegriff auf die OpenWeatherAPI zugreift.',
    'Eine Wetterkarte mit den Daten der API.'
  ]},
  { type: 'img', src: 'https://via.placeholder.com/800x400', alt: 'Weather App Demo' },
  { type: 'h2', content: 'Herausforderungen' },
  { type: 'p', content: 'Live-Anzeige der Suchergebnisse in der Suchleiste, ohne Verzögerung.' }
];*/


const ExplanationSite = ({ title, author, date, content }) => {

    useEffect(() => {
        console.log("PostsData: ", postsData["posts"][0]["title"]);
    }, []);


  return (

      <div className="blog-post-page">
          {postsData["posts"].map((post, postIndex) => (
              <div key={postIndex}>
                  <h1>{post.title}</h1>
                  <div>
                      <span>By {post.author}</span> | <span>{post.date}</span>
                  </div>
                  {post.postContent.map((block, blockIndex) => {
                      switch (block.type) {
                          case 'h1':
                              return <h1 key={blockIndex}>{block.content}</h1>;
                          case 'h2':
                              return <h2 key={blockIndex}>{block.content}</h2>;
                          case 'p':
                              return <p key={blockIndex}>{block.content}</p>;
                          case 'ul':
                              return (
                                  <ul key={blockIndex}>
                                      {block.content.map((item, itemIndex) => (
                                          <li key={itemIndex}>{item}</li>
                                      ))}
                                  </ul>
                              );
                          case 'img':
                              return <img key={blockIndex} src={block.src} alt={block.alt}/>;
                          default:
                              return null;
                      }
                  })}
              </div>
          ))}
      </div>

      /*<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} className="blog-post-page">
        <h1 style={{ marginTop: '20px' }} className="blog-post-page-title">Projektname</h1>
          <a>Github Link</a>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', textAlign: "left", marginTop: '10px' }} className="blog-post-page-meta">
          <span className="blog-post-page-author">By Stefan</span>
          <span className="blog-post-page-date">{date}</span>
        </div>
          <img style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} />
        <div style={{ maxWidth: '800px', marginTop: '20px' }} className="blog-post-page-content">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
      </div>*/
  );
};

export default ExplanationSite;