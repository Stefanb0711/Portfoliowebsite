import React, {useEffect} from 'react';
import '../assets/css/BlogPostPage.css';
import Header from "../Header"; // Optional für CSS-Styling
/*import '../assets/css/main.css';*/
//import postsData from "../blogPosts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";


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
        marginBottom: '20px',
        textAlign: 'center'
    }

    const centerElementsWithBottomAndTopSpace = {
        alignText: 'center', // Setze die maximale Breite
        justifyContent: 'center',
        display: 'flex',
        marginBottom: '20px',
        marginTop: '60px'
    }

    const sideMargins = {
        marginLeft: '20px',
        marginRight: '20px',
        lineHeight: '1.5'
    }


  return (
      <div>
          <div className="blog-post-page">

              {post.postContent.map((block, blockIndex) => {
                  switch (block.type) {
                      case 'h1':
                          return <h1 key={blockIndex}
                                     style={centerElementsWithBottomSpace}
                                     className={"spaced"}
                          >{block.content}</h1>;
                      case 'h2':
                          return <h2 style={sideMargins} key={blockIndex} className={"spaced"}>{block.content}</h2>;
                      case 'p':
                          return <p style={sideMargins} key={blockIndex}>{block.content}</p>;
                      case 'a':

                          if (block.isIcon && block.iconType === "pdf"){
                              return (
                                  <a style={centerElementsWithBottomAndTopSpace} key={blockIndex} href={block.href} target={"_blank"} rel={"noopener noreferrer"}>
                                    <FontAwesomeIcon icon={faFilePdf} size={"3x"} style={{"color": "red" }} />
                                  </a>
                              );
                          }
                          return <a key={blockIndex} href={block.href} className={"spaced"}
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
                          return <img key={blockIndex} src={block.src} className={"spaced"} alt={block.alt}
                                      style={{
                                          maxWidth: block.width ? `${block.width}px` : '100%', // Setze die maximale Breite
                                          height: 'auto', // Behalte das Seitenverhältnis bei
                                          objectFit: 'cover', // Optional, um sicherzustellen, dass das Bild richtig skaliert,
                                          justifyContent: 'center',
                                          display: 'flex',
                                          margin: 'auto',
                                          marginBottom: '50px'
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