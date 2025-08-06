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
    | 'tbc-green'
    | 'tbc-mustard'
    | 'tbc-beet-red'
}

// Create a custom Button component that extends Radix UI's variant system
export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = 'solid', children, ...props }, ref) => {
    // Handle custom variants
    if (
      variant === 'tbc-green' ||
      variant === 'tbc-mustard' ||
      variant === 'tbc-beet-red'
    ) {
      return (
        <StyledCustomButton
          ref={ref}
          variant="solid"
          $customVariant={variant}
          {...props}
        >
          {children}
        </StyledCustomButton>
      )
    }

    // Pass through to Radix UI for standard variants
    return (
      <RadixButton ref={ref} variant={variant} {...props}>
        {children}
      </RadixButton>
    )
  },
)

Button.displayName = 'TBCButton'

// Styled component for custom variants
const StyledCustomButton = styled(RadixButton)<{ $customVariant: string }>`
  ${({ $customVariant }) => {
    switch ($customVariant) {
      case 'tbc-green':
        return `
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
      case 'tbc-mustard':
        return `
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
      case 'tbc-beet-red':
        return `
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
      default:
        return ''
    }
  }}
`
