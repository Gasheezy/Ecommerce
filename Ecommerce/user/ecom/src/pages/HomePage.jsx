import React, { Component, Fragment } from 'react'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'

export class HomePage extends Component {
    render() {
         return (
              <Fragment>
                   <FeaturedProducts />
                   <Collection />
                   <Categories />
              </Fragment>
         )
    }
}

export default HomePage
