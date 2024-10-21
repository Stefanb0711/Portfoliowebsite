import React from 'react';
import "../src/assets/css/BlogPostPage.css";

function UeberMich() {

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


    const postAboutMe = {
      "id": 1,
      "title": "Über mich",
      "author": "Stefan",
      "date": "2023-09-01",
      "postContent": [
        { "type": "h1", "content": "Über mich" },
        { "type": "img", "src": "" },
        { "type": "p", "content": "Hallo, mein Name ist Stefan, und ich bin ein ausgebildeter Mediengestalter, der seine Leidenschaft in der Welt der Webentwicklung und Programmierung entdeckt hat. Während meiner Ausbildung habe ich bemerkt, wie viel Freude mir das Programmieren bereitet. So begann ich, mir Python selbstständig durch Onlinekurse beizubringen und tauchte in verschiedene Bereiche wie Webentwicklung, Datenanalyse und Spielentwicklung ein. Besonders die Webentwicklung hat mein Interesse geweckt und mich dazu motiviert, auch JavaScript und dessen Ökosysteme zu erlernen.\n" },
        { "type": "h3", "content": "Meine Fähigkeiten"},

        { "type": "strong", "content": "-   Python & Webentwicklung: " },
        { "type": "p", "content": "Flask, GUI-Entwicklung mit Tkinter, Web Scraping, Datenanalyse mit Pandas, Spieleentwicklung mit Pygame"},

        { "type": "strong", "content": "-    JavaScript Fullstack: " },
        { "type": "p", "content": "Node.js, Express, Angular, React" },

        { "type": "strong", "content": "- Datenbanken: " },
        { "type": "p", "content": "PostgreSQL, SQLAlchemy" },

        { "type": "strong", "content": "-    APIs & Backend-Integration: " },
        {"type": "p", "content": "Eigene Backend-APIs, Socket-Kommunikation, Authentifizierungstokens für Sicherheit und Nutzerfreundlichkeit"},

        { "type": "p", "content": "-   Mit 20 Python-Projekten und 5 Fullstack-Webprojekten in JavaScript habe ich bereits umfassende Erfahrungen gesammelt. Ich beherrsche den Einsatz von Templates sowie das Erstellen eigener Komponenten mit Frameworks wie Angular und React. Zudem bin ich versiert im Einsatz von Sockets zur Echtzeit-Kommunikation zwischen Frontend und Backend, wie etwa in meiner Angular ChatApp.  Gängige Sicherheitsfeaturens wie das verwenden von Authentifizierungstokens, Password-Hashing, sowie das verwenden von env-Variablen können sie bei mir voraussetzen. "},
        { "type": "p", "content": "-    Zusätzlich habe ich Erfahrungen in C++ gesammelt, welche mein Verständnis für objektorientierte Programmierung, und vielen Javascriptkonzepten vertieft haben."},
        { "type": "h3", "content": "Mein Weg in Ethical Hacking"},
        {"type": "p", "content": "Neben der Webentwicklung habe ich ein wachsendes Interesse am Ethical Hacking entwickelt. Die Auseinandersetzung mit Themen wie  Backdoors, SQL-Injections, MITM-Attacken, Netzwerkcracking,…  hat mein Verständnis der IT-Sicherheit verbessert und mir wertvolle Einblicke in potenzielle Schwachstellen gegeben. Auch wenn ich in diesem Bereich noch weiter lernen möchte, hilft mir dieses Wissen, sicherere Webanwendungen zu entwickeln."},
        {"type": "h3", "content": "Was mich antreibt"},
        {"type": "p", "content": "Ich liebe es, Sachen zu erschaffen – ob es darum geht, eine effiziente Backend-API zu entwerfen, interaktive Benutzeroberflächen zu entwickeln oder neue Technologien zu erkunden. Am meisten begeistert mich der Moment, wenn ich das fertige Produkt sehe und stolz sagen kann: \"Das habe ich gemacht.\"  In naher Zukunft möchte ich meine Fähigkeiten im Bereich Cybersecurity weiter ausbauen, um noch sicherere und leistungsfähigere Webanwendungen zu entwickeln, und um gegen die wachsende Gefahr der Cyberangriffe gerüstet zu sein.\n"},
      ]
    };

    return (
        <div className={"blog-post-page"}>
            {postAboutMe.postContent.map((block, blockIndex) => {
                switch (block.type) {
                    case 'h1':
                        return <h1 style={centerElementsWithBottomSpace} key={blockIndex}>{block.content}</h1>
                    case 'h2':
                        return <h2 style={centerElementsWithBottomAndTopSpace} key={blockIndex}>{block.content}</h2>
                    case 'h3':
                        return <h3 style={centerElementsWithBottomAndTopSpace} key={blockIndex}>{block.content}</h3>
                    case 'p':

                        return <p style={sideMargins} key={blockIndex}>{block.content}</p>
                    case 'strong':
                        return <strong key={blockIndex} style={sideMargins}>{block.content}</strong>
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

                    case 'ul':
                        block.content.forEach((li) => {
                          console.log("List Item:", li.content);
                        });
                        return <ul key={blockIndex} >{block.content}</ul>
                    case 'li':
                        return <li key={blockIndex}>{block.content}</li>
                    default:
                        return null;
                }
            })}

        </div>
    );
}

export default UeberMich;