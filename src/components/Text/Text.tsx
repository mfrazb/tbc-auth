import { Text as RadixText } from '@radix-ui/themes'
import Markdown from 'react-markdown'
import styled from '@emotion/styled'
import { forwardRef } from 'react'
import type { ComponentProps } from 'react'

const StyledText = styled(RadixText)`
  padding: 0;
  margin: 0;
`

export const Text = forwardRef<
  HTMLParagraphElement,
  ComponentProps<typeof RadixText>
>(({ children, ...props }, ref) => {
  // Only pass string children to Markdown, as required by react-markdown
  if (typeof children === 'string') {
    return (
      <StyledText ref={ref} {...props}>
        <Markdown>{children}</Markdown>
      </StyledText>
    )
  }
  return (
    <StyledText ref={ref} {...props}>
      {children}
    </StyledText>
  )
})

Text.displayName = 'Text'
