import React from 'react'



const Scroll = (props) => {
    return (
        <div style={{overflowY : 'scroll' , height: '800px' , border : 'solid 5px black'}}>
           {props.children} 
        </div>
    )
}


export default Scroll;