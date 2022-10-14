import React from 'react'
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

function ProductCard({ img, title, description, star, distance, price, onClick }) {
  const { t } = useTranslation()
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
            <CardDescription>{price} TL</CardDescription>
          </CardDescriptionFlex>
        </CardDescriptionList>
        <CardButton type="button" onClick={onClick}>
          <CardButtonIcon name="plus" size="16px"></CardButtonIcon>
          {t('list.add_basket')}
        </CardButton>
      </CardBody>
    </Card>
  )
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  star: PropTypes.number,
  distance: PropTypes.number,
  price: PropTypes.number,
  onClick: PropTypes.func.isRequired,
}

export default ProductCard
