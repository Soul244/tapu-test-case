import React from 'react'

import { ProductList } from 'containers/list/ProductList'
import { BasketTotal } from 'containers/list/BasketTotal'

function List() {
  return (
    <section>
      <article>
        <ProductList></ProductList>
      </article>
      <article>
        <BasketTotal></BasketTotal>
      </article>
    </section>
  )
}

export default List
