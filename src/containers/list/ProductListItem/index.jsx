import React, { useContext, useMemo } from 'react'

import { ProductCard } from 'components/ProductCard'
import { Hr } from 'components/Hr'
import { AppContext } from 'contexts/AppContext'
import ACTIONS from 'reducers/list/actions'

function ProductListItem({ product }) {
  const { listState, dispatchList } = useContext(AppContext)
  const isInBasket = useMemo(() => listState.basket.some((item) => item.id === product.id), [listState.basket, product.id])

  const addBasket = (product) => {
    dispatchList({ type: ACTIONS.ADD_BASKET, payload: { product } })
  }

  const removeBasket = (productId) => {
    dispatchList({ type: ACTIONS.REMOVE_BASKET, payload: { productId } })
  }

  const handleBasket = (product) => {
    if (isInBasket) {
      removeBasket(product.id)
    } else {
      addBasket(product)
    }
  }

  return (
    <>
      <ProductCard {...product} isInBasket={isInBasket} onClick={() => handleBasket(product)}></ProductCard>
      <Hr></Hr>
    </>
  )
}

ProductListItem.propTypes = {}

export default ProductListItem
