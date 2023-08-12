import React from 'react'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div className='wel'>
        <h2 className='heading'>Welcome to the redux toolkit store</h2>
        <section>
            <h3> Products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home