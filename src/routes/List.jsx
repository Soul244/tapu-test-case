import React, { Fragment, useContext } from 'react'
import ProductCard from '../components/ProductCard'
import HrItem from '../components/HrItem'
import { AppContext } from '../contexts/AppContext'

function List() {
  const appContext = useContext(AppContext)
  return (
    <>
      {appContext.listState.products.map((product) => (
        <Fragment key={product.id}>
          <ProductCard
            img={product.img}
            title={product.title}
            description={product.description}
            star={product.star}
            distance={product.distance}
            price={product.price}
            onClick={() => {}}
          ></ProductCard>
          <HrItem></HrItem>
        </Fragment>
      ))}
    </>
  )
}

List.propTypes = {}

export default List
