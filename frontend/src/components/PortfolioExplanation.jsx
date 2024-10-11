import React, {useEffect} from 'react';
import '../assets/css/BlogPostPage.css';
import Header from "../Header"; // Optional für CSS-Styling
/*import '../assets/css/main.css';*/
//import postsData from "../blogPosts.json";


const PortfolioExplanation = ({post}) => {

    const centerElements = {
        alignText: 'center', // Setze die maximale Breite
        justifyContent: 'center',
        display: 'flex'
    }

    const centerElementsWithBottomSpace = {
        alignText: 'center', // Setze die maximale Breite
        justifyContent: 'center',
        display: 'flex',
        marginBottom: '20px'
    }


  return (
      <div>
          <div className="blog-post-page">

              {post.postContent.map((block, blockIndex) => {
                  switch (block.type) {
                      case 'h1':
                          return <h1 key={blockIndex}
                                     style={centerElements}
                          >{block.content}</h1>;
                      case 'h2':
                          return <h2 key={blockIndex}>{block.content}</h2>;
                      case 'p':
                          return <p key={blockIndex}>{block.content}</p>;
                      case 'a':
                          return <a key={blockIndex} href={block.href}
                                    style={centerElementsWithBottomSpace}>{block.href}</a>;
                      case 'ul':
                          return (
                              <ul key={blockIndex}>
                                  {block.content.map((item, itemIndex) => (
                                      <li key={itemIndex}>{item}</li>
                                  ))}
                              </ul>
                          );
                      case 'img':
                          return <img key={blockIndex} src={block.src} alt={block.alt}
                                      style={{
                                          maxWidth: block.width ? `${block.width}px` : '100%', // Setze die maximale Breite
                                          height: 'auto', // Behalte das Seitenverhältnis bei
                                          objectFit: 'cover' // Optional, um sicherzustellen, dass das Bild richtig skaliert
                                      }}
                          />;
                      default:
                          return null;
                  }
              })}
          </div>
      </div>

  );
};

export default PortfolioExplanation;