import { Link as RadixLink } from '@radix-ui/themes'
import styled from '@emotion/styled'
import { theme } from '../../utils'
import { forwardRef } from 'react'
import type { ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof RadixLink>

const StyledLink = styled(RadixLink)`
  color: ${theme.colors['tbc-beet-red']};

  &:hover {
    color: ${theme.colors['tbc-tomato-red']};
    text-decoration-color: ${theme.colors['tbc-tomato-red']};
  }
`

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledLink ref={ref} {...props}>
        {children}
      </StyledLink>
    )
  },
)

Link.displayName = 'Link'
