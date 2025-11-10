import React, { use, useState } from 'react'
import Star from '../../../star'
import "./style.css"
   let no_of_star = 5
function StarRating({value = 0, onChange , numberOfStar = no_of_star}) {
 
    const [onClickedIndex , setonClickedIndex] = useState(value - 1 ) 
    const [hover , setHover] = useState(-1) 

   function  handleclick(index){

    return () => {
        if (index === onClickedIndex) {
  
  setonClickedIndex(-1);
  onChange(0);
} else {
  setonClickedIndex(index);
  onChange(index + 1);

    }
   }
   }

    function  handleMouseHover(index){

    return () => {
 setHover(index) 
}
    }
    function handleMouseleave() {
        return() => {
            setHover(-1)
        }
    }
  return (
    <div className='star-rating'>
        {[...new Array(numberOfStar)].map((_,index ) =>{

            let activeClass = '';
            if(index <= onClickedIndex){
                activeClass = 'active'
            }
            if(hover !== null && index <= hover){
                activeClass += 'hoverred'
            }

            return <button key={index}  className={activeClass} style={{
        background: "none",
        border: "none",
        padding: 0,
        margin: 0,
        cursor: "pointer",
        outline: "none",

        
      }}
      
      onClick={handleclick(index)}
      onMouseEnter={handleMouseHover(index)}
      onMouseLeave={handleMouseleave()}
      >
                <Star key={index} 
                style={{
                fill:
                  hover !== null && index <= hover
                    ? 'gold'
                    : index <= onClickedIndex
                    ? 'orange'
                    : 'none',
                stroke:
                  hover !== null && index <= hover
                    ? 'darkorange'
                    : index <= onClickedIndex
                    ? 'red'
                    : 'yellow',
                strokeWidth: 1.5,
                transition: 'all 0.2s ease'
              }}/> 
              
                </button>
        })}
    </div>
  )
}

export default StarRating