import React from 'react'
import { Helmet } from 'react-helmet';
import Products from  '../components/Products.jsx';

const Home = () => {
    return (
    <>
        <Helmet>
            <title> Platzi Conf Merch - Productos </title>  
        </Helmet> 
        <Products />
    </>
    )
}

export default Home