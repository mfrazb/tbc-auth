import { Flex } from '@radix-ui/themes'
import styled from '@emotion/styled'

const StyledFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  max-width: 1280px;
`
export const MaxAppWidth = ({ children }: { children: React.ReactNode }) => {
  return <StyledFlex>{children}</StyledFlex>
}
