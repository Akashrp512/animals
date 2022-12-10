import React from 'react';
import bird from '../svg/bird.svg'
import cow from '../svg/cow.svg'
import cat from '../svg/cat.svg'
import dog from '../svg/dog.svg'
import gator from '../svg/gator.svg'
import heart from '../svg/heart.svg'
 

const svgMap = {
    bird,
    cow,
    cat,
    dog,
    gator,
    heart
}
const AnimalShow = ({type}) => {
<div>
    <img src={svgMap[type]} alt='animal' />
    <p>hello</p>
</div>
}

export default AnimalShow
