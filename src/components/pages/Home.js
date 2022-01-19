import React from 'react';
import Item from '../Item.js'
import ImagePrise from '../../image/prise.png'
import ImageTablette from '../../image/Tablette.png'


const Home = () => {


    return (
        <div className="home">
        <Item image={ImagePrise} name={'Prise'} />
        <Item image={ImageTablette} name={'Tablette'} />
        </div>
    )
}

export default Home;
