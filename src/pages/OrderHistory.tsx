import { useState } from 'react'
import { Heading, Section } from '@radix-ui/themes'
import { FilterBar, OrderTable, PaginationBar } from '../features/OrderHistory'
import styled from '@emotion/styled'
import { theme } from '../utils'
import type { Order } from '../data'

// SET TYPE FOR ORDER AND set return type for useState
const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: ${theme.spacing['spacing-xl']};
`

export const OrderHistory = () => {
  // TODO: Set state
  // SET FILTERS
  // FULL ORDER HISTORY
  const [orders, setOrders] = useState<Order[]>([])
  // SET PAGINATION

  // make API call to get orders

  return (
    <StyledSection>
      <Heading>Order History</Heading>
      <FilterBar />
      <OrderTable />
      <PaginationBar />
    </StyledSection>
  )
}
