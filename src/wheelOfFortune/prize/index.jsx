import React from 'react'

export const Prize = ({ textOrientation,textSize,text,index, image,length }) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          // padding: '1px',
        //   backgroundColor: 'white'   ,
     
        // lineHeight:"50px",
          color:"white",
          fontFamily:"sans-serif",
          fontSize: textSize+"px",
          fontWeight:"900",
          backgroundColor:"transparent",
          // borderRadius: '5px',
          transform: "translate(0%, 0%) rotate(" +(length%2==0? (index * (360 / length)+(index +1)* (360 / length))/2:(index * (360 / length)+(index)* (360 / length))/2 )+ "deg)",
          paddingRight:"120px",
          
        }}
      >
        <div
         style={{
          width:`${45/length}%`
         }}
        >
        <img src={image} style={{
          // paddingRight:"40px"
          // marginRight:"10px"
           width:"100%",
           height:"100%"
        }}    />  
        </div>
        
        <div style={{
          //  transform:"roatate(-90deg) !important",
          writingMode:textOrientation==="vertical"?"vertical-rl":"",
          // display:"flex",
          // alignItems:"cneter",
          // justifyContent:"center",
          // flexDirection:"row"
        }}>
        {/* <img src={image} width={"10%"} height={"10%"} /> */}
        <p>{text}</p>
        </div>
        
      </div>
    );
  };