import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* // to cover all visible screen -> navbar + margin-top of container + our margin bottom - viewport */
  height: calc(100vh - (88px + 40px + 40px));
  @media (min-width: 992px) {
    height: auto;
    max-width: 650px;
    margin: 0 auto;
  }
`

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
  font-weight: 700;
`

export { Wrapper, Text }
