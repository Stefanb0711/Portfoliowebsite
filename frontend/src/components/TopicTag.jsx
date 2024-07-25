import React from "react";

function TopicTag(props){

    const colors = [
        'rgba(0, 255, 0, 0.5)',   // Grün
        'rgba(0, 0, 255, 0.5)',   // Blau
        'rgba(255, 255, 0, 0.5)', // Gelb
        'rgba(255, 0, 0, 0.5)',   // Rot
        'rgba(128, 0, 128, 0.5)', // Lila
        'rgba(0, 255, 255, 0.5)'  // Türkis
    ];

    const randomColorIndex = Math.floor(Math.random() * colors.length);

    const badgeStyle = {
        backgroundColor: colors[randomColorIndex], // Fallback-Farbe falls keine bgColor übergeben wird
        color: 'white', // Weißer Text für besseren Kontrast,
        padding: '0.5em 1em',
        orderRadius: '0.25em'
    };

    return (
        <span style={badgeStyle} className="badge rounded-pill">#{props.topic}</span>
    );

}

export default TopicTag;