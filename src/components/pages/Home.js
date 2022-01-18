import React from 'react';
import Item from '../Item.js'
import ImagePrise from '../../image/prise.png'
import ImageTablette from '../../image/tablette.png'


const Home = () => {


    return (
        <div className="home">
        <Item image={ImagePrise}/>
        <Item image={ImageTablette} />
        </div>
    )
}

export default Home;
