import React, { useState } from "react";

const Card = ({ movie }) => {
      const [isHovered, setHovered] = useState(false);

      const cardStyle = {
            position: "relative",
            left: "50%",
            top: "50px",
            width: "300px",
            height: "450px",
            background: `url('https://image.tmdb.org/t/p/w500${movie?.poster_path}') no-repeat center/cover`,
            borderRadius: "10px",
            boxShadow: "0 10px 25px 0 rgba(0, 0, 0, 0.5)",
            transform: "translateX(-50%)",
            transition: "0.5s",
            color:'#fefefe'
      };

      const titleStyle = {
            position: "absolute",
            width: "100%",
            height:"100%",
            bottom: "0",
            left: "0",
            fontSize: "26px",
            fontWeight: "300",
            padding: "30px 0",
            background: `linear-gradient(to top, #000, transparent)`,
            textTransform: "uppercase",
            textAlign: "center",
            opacity: isHovered ? "1" : "0",
            transition: "0.5s",
            borderRadius:'10px',
      };

      return (
            <div
                  className="card"
                  style={cardStyle}
                  onMouseOver={() => setHovered(true)}
                  onMouseOut={() => setHovered(false)}
            >
                  <div className="title" style={titleStyle}>
                        <p className="absolute bottom-10">
                        {movie?.original_title}
                        </p>
                  </div>
            </div>
      );
};

export default Card;
