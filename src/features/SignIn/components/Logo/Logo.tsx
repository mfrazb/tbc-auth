import { Flex } from '@radix-ui/themes'
import tbcLogo from '../../../../assets/tbc-logo.png'
import styled from '@emotion/styled'
import { theme } from '../../../../utils'

interface LogoProps {
  logo: {
    src: string
    target: string
    alt: string
  }
}

const LogoContainer = styled(Flex)`
  flex-direction: column;
  padding: ${theme.spacing['spacing-xs']};

  .logo:hover {
    filter: drop-shadow(0 0 2em ${theme.colors['tbc-tomato-red']});
  }
`

export const Logo = ({ logo }: LogoProps) => {
  return (
    <LogoContainer>
      <a href={logo.target} target="_blank" rel="noopener noreferrer">
        <img src={tbcLogo} className="logo" alt={logo.alt || 'TBC logo'} />
      </a>
    </LogoContainer>
  )
}
