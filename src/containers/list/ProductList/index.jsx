import React, { useContext } from 'react'

import { AppContext } from 'contexts/AppContext'
import ProductListItem from 'containers/list/ProductListItem'

function List() {
  const { listState } = useContext(AppContext)

  return (
    <>
      {listState.products.map((product) => (
        <ProductListItem key={product.id} product={product}></ProductListItem>
      ))}
    </>
  )
}

List.propTypes = {}

export default List
