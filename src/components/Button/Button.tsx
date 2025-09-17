import { Button as RadixButton } from '@radix-ui/themes'
import styled from '@emotion/styled'
import { theme } from '../../utils'
import { forwardRef } from 'react'
import type { ComponentProps } from 'react'

// Extend Radix UI's ButtonProps to include our custom variants
type RadixButtonProps = ComponentProps<typeof RadixButton>
type CustomButtonProps = Omit<RadixButtonProps, 'variant'> & {
  variant?:
    | RadixButtonProps['variant']
    | 'green-ghost'
    | 'soft-green'
    | 'tbc-green'
    | 'tbc-mustard'
    | 'tbc-beet-red'
}

const StyledButton = styled(RadixButton)`
  width: 100%;
`

const GreenButton = styled(StyledButton)`
  background-color: ${theme.colors['tbc-happy-greens']};
  border-color: ${theme.colors['tbc-happy-greens']};
  color: ${theme.colors['white']};

  &:hover {
    background-color: ${theme.colors['tbc-happy-greens-dark']};
    border-color: ${theme.colors['tbc-happy-greens-dark']};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors['tbc-brown']};
  }
`

const MustardButton = styled(StyledButton)`
  background-color: ${theme.colors['tbc-mustard']};
  border-color: ${theme.colors['tbc-mustard']};
  color: white;

  &:hover {
    background-color: #b07a1f;
    border-color: #b07a1f;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors['tbc-brown']};
  }
`

const BeetButton = styled(StyledButton)`
  background-color: ${theme.colors['tbc-beet-red']};
  border-color: ${theme.colors['tbc-beet-red']};
  color: white;

  &:hover {
    background-color: #a04a3e;
    border-color: #a04a3e;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors['tbc-brown']};
  }
`

const SoftGreenButton = styled(StyledButton)`
  background-color: ${theme.colors['tbc-happy-greens']};
  border-color: ${theme.colors['tbc-happy-greens']};
  color: ${theme.colors['white']};
  opacity: 0.8;

  &:hover {
    background-color: ${theme.colors['tbc-happy-greens-dark']};
    border-color: ${theme.colors['tbc-happy-greens-dark']};
    opacity: 1;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors['tbc-brown']};
    opacity: 1;
  }
`

// Create a custom Button component that extends Radix UI's variant system
export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = 'solid', children, ...props }, ref) => {
    // Handle custom variants
    if (
      variant === 'green-ghost' ||
      variant === 'soft-green' ||
      variant === 'tbc-green' ||
      variant === 'tbc-mustard' ||
      variant === 'tbc-beet-red'
    ) {
      switch (variant) {
        case 'soft-green':
          return (
            <SoftGreenButton ref={ref} variant="soft" {...props}>
              {children}
            </SoftGreenButton>
          )
        case 'tbc-green':
          return (
            <GreenButton ref={ref} variant="solid" {...props}>
              {children}
            </GreenButton>
          )
        case 'tbc-mustard':
          return (
            <MustardButton ref={ref} variant="solid" {...props}>
              {children}
            </MustardButton>
          )
        case 'tbc-beet-red':
          return (
            <BeetButton ref={ref} variant="solid" {...props}>
              {children}
            </BeetButton>
          )
        default:
          return (
            <RadixButton ref={ref} variant="solid" {...props}>
              {children}
            </RadixButton>
          )
      }
    }

    // Pass through to Radix UI for standard variants
    return (
      <StyledButton ref={ref} variant={variant} {...props}>
        {children}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'

