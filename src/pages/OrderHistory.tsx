import { Heading, Section } from '@radix-ui/themes'
import { FilterBar, OrderTable, PaginationBar } from '../features/OrderHistory'
import styled from '@emotion/styled'
import { theme } from '../utils'

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: ${theme.spacing['spacing-xl']};
`

export const OrderHistory = () => {
  return (
    <StyledSection>
      <Heading>Order History</Heading>
      <FilterBar />
      <OrderTable />
      <PaginationBar />
    </StyledSection>
  )
}
