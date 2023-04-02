import React from 'react'

export const Prize = ({ text,index, image,length }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        //   padding: '1px',
        //   backgroundColor: 'white'   ,
        lineHeight:"50px",
          color:"white",
          fontFamily:"sans-serif",
          fontSize:"9px",
          fontWeight:"900",
          backgroundColor:"transparent",
          // borderRadius: '5px',
          transform: "translate(0%, 0%) rotate(" + (index * (360 / length)+(index +1)* (360 / length))/2 + "deg)",
          paddingRight:"120px",
        }}
      >
        {/* <img src={image}  /> */}
        <div style={{
          
        }}>
        <p>{text}</p>
        </div>
        
      </div>
    );
  };