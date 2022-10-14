import React, { Fragment, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import HrItem from '../components/HrItem'

function ProductList(props) {
  const data = useMemo(() => [1, 2, 3, 4], [])
  return (
    <>
      {data.map((item) => (
        <Fragment key={item}>
          <ProductCard
            img={require('../assets/images/mock_product.png')}
            title="Villa Bosphorus"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            star={5}
            distance={3.7}
            price={20000}
            onClick={() => {}}
          ></ProductCard>
          <HrItem></HrItem>
        </Fragment>
      ))}
    </>
  )
}

ProductList.propTypes = {}

export default ProductList
