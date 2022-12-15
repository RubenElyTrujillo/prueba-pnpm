import React from 'react'

export default function TextFade({ children }){
    return(
        <p>
            {addAnimation(children)}
        </p>
    )
}

const addAnimation = (text) => {
    const ANIMATION_DELAY = 6;
    const allChars = [...text].map((char) => (char === " " ? <>&nbsp;</> : char));
  
    return allChars.map((char, i) => {
      return (
        <span
          key={i}
          className="char"
          style={{ animationDelay: `${ANIMATION_DELAY * i}ms` }}
        >
          {char}
        </span>
      );
    });
};