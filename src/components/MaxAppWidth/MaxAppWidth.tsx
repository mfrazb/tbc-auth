import { Flex } from '@radix-ui/themes'
import styled from '@emotion/styled'

const StyledMaxAppWidth = styled(Flex)`
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  height: 100%;
`
export const MaxAppWidth = ({ children }: { children: React.ReactNode }) => {
  return <StyledMaxAppWidth>{children}</StyledMaxAppWidth>
}
