import React, { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AppContext } from 'contexts/AppContext'
import { Wrapper, Title, DescriptionList, DescriptionTitle, Description, DescriptionFlex } from './styles'

function BasketTotal() {
  const { listState } = useContext(AppContext)
  const { t } = useTranslation()

  const currencyFormatter = useMemo(() => new Intl.NumberFormat('tr-Tr', { style: 'currency', currency: 'TRY' }), [])

  const totalPrice = useMemo(() => listState.basket.reduce((total, item) => item.price + total, 0), [listState.basket])
  const taxAndShippment = useMemo(() => (Math.random() * 10).toFixed(2), [])
  const overallTotal = useMemo(() => totalPrice + parseFloat(taxAndShippment), [totalPrice, taxAndShippment])

  return (
    <Wrapper>
      <Title>{t('list.total_price_of_products')}: </Title>
      <DescriptionList>
        <DescriptionFlex>
          <DescriptionTitle>{t('list.total')}: </DescriptionTitle>
          <Description>{currencyFormatter.format(totalPrice)}</Description>
        </DescriptionFlex>
        <DescriptionFlex>
          <DescriptionTitle>{t('list.tax_and_shippment')}: </DescriptionTitle>
          <Description>{currencyFormatter.format(taxAndShippment)}</Description>
        </DescriptionFlex>
        <DescriptionFlex fontWeight="700" fontSize="20px">
          <DescriptionTitle>{t('list.overall_total')}: </DescriptionTitle>
          <Description>{currencyFormatter.format(overallTotal)}</Description>
        </DescriptionFlex>
      </DescriptionList>
    </Wrapper>
  )
}

export default BasketTotal
