import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  CardDescriptionList,
  CardDescriptionFlex,
  CardDescription,
  CardDescriptionIcon,
  CardButton,
  CardButtonIcon,
} from './styles'

export function ProductCard({ img, title, description, star, distance, price, isInBasket, onClick }) {
  const { t } = useTranslation()
  const currencyFormatter = useMemo(() => new Intl.NumberFormat('tr-Tr', { style: 'currency', currency: 'TRY' }), [])

  return (
    <Card>
      <CardImage src={img} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardDescriptionList>
          <CardDescriptionFlex>
            <dt></dt>
            <CardDescription>
              <CardDescriptionIcon name="star" color="#ECD03F"></CardDescriptionIcon>
              {star.toFixed(1)}
            </CardDescription>
            <dt></dt>
            <CardDescription>
              <CardDescriptionIcon name="marker" color="#0DAFC0"></CardDescriptionIcon>
              {`${distance} km`}
            </CardDescription>
          </CardDescriptionFlex>
          <CardDescriptionFlex>
            <dt>{t('list.price')}: </dt>
            <CardDescription>{currencyFormatter.format(price)}</CardDescription>
          </CardDescriptionFlex>
        </CardDescriptionList>
        {isInBasket && (
          <CardButton type="button" color="#F44336" onClick={onClick}>
            <CardButtonIcon name="minus" size="16px"></CardButtonIcon>
            {t('list.remove_basket')}
          </CardButton>
        )}
        {!isInBasket && (
          <CardButton type="button" color="#0078e3" onClick={onClick}>
            <CardButtonIcon name="plus" size="16px"></CardButtonIcon>
            {t('list.add_basket')}
          </CardButton>
        )}
      </CardBody>
    </Card>
  )
}

ProductCard.defaultProps = {
  isInBasket: false,
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  isInBasket: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}
