import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* // to cover all visible screen -> navbar + margin-top of container + our margin bottom - viewport */
  height: calc(100vh - (88px + 40px + 40px));
  @media (min-width: 992px) {
    height: auto;
  }
`

const H1 = styled.h1`
  margin: 0 0 30px 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: 0.1px;
  color: #121212;
`

export { Wrapper, H1 }
