import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 40px;
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.1px;
`

const DescriptionList = styled.dl`
  margin-top: 0;
  margin-bottom: 0;
`

const DescriptionFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: ${(props) => (props.fontWeight ? props.fontSize : '16px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
`

const DescriptionTitle = styled.dt``

const Description = styled.dd`
  margin-left: 10px;
`

export { Wrapper, Title, DescriptionList, DescriptionFlex, DescriptionTitle, Description }
