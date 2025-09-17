import { Heading as RadixHeading } from '@radix-ui/themes'
import Markdown from 'react-markdown'
import styled from '@emotion/styled'
import { theme } from '../../utils'
import { forwardRef } from 'react'
import type { ComponentProps } from 'react'

const StyledHeading = styled(RadixHeading)`
  padding: ${theme.spacing['spacing-xl']};
`

export const Heading = forwardRef<
  HTMLParagraphElement,
  ComponentProps<typeof RadixHeading>
>(({ children, ...props }, ref) => {
  // Only pass string children to Markdown, as required by react-markdown
  if (typeof children === 'string') {
    return (
      <StyledHeading ref={ref} {...props}>
        <Markdown>{children}</Markdown>
      </StyledHeading>
    )
  }

  return (
    <StyledHeading ref={ref} {...props}>
      {children}
    </StyledHeading>
  )
})

Heading.displayName = 'Heading'
