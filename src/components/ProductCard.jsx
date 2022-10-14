import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from './Icon'
import { useTranslation } from 'react-i18next'

const Card = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`

const CardImage = styled.img`
  height: 75px;
  width: 75px;
  margin-right: 16px;
  border-radius: 12px;
  filter: drop-shadow(0px 10px 15px #c8c9cd);
`

const CardTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 8px;
  color: #121212;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
`

const CardText = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  color: #64738c;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
`

const CardDescriptionList = styled.dl`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 8px;
`

const CardDescriptionFlex = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

const CardDescription = styled.dd`
  display: flex;
  align-items: baseline;
  margin-left: 0;
  &:not(:last-child) {
    margin-right: 30px;
  }
`

const CardDescriptionIcon = styled(Icon)`
  margin-right: 4px;
`

const CardButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  color: #0078e3;
  cursor: pointer;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
`

const ButtonIcon = styled(Icon)`
  margin-right: 10px;
`

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
              {distance}
            </CardDescription>
          </CardDescriptionFlex>
          <CardDescriptionFlex>
            <dt>Fiyat: </dt>
            <CardDescription>{price}</CardDescription>
          </CardDescriptionFlex>
        </CardDescriptionList>
        <CardButton type="button" onClick={onClick}>
          <ButtonIcon name="plus" size="16px"></ButtonIcon>
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
