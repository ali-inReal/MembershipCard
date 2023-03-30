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
          fontSize:"10px",
          backgroundColor:"transparent",
          // borderRadius: '5px',
          transform: "translate(0%, 0%) rotate(" + (index * (360 / length)+(index +1)* (360 / length))/2 + "deg)",
          paddingRight:"140px",
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