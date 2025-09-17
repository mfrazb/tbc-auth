import { Heading } from '../../components'
import { Box, Card } from '@radix-ui/themes'
import signin from '../../content/signin.json'
import type { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'
import { theme } from '../../utils'
import { Logo, MembershipDialog, SignInForm } from './components'

interface SignInProps {
  error: string | null
  loading: boolean
  setError: Dispatch<SetStateAction<string | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
}

const SignInContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  gap: ${theme.spacing['spacing-xs']};
  padding: ${theme.spacing['spacing-xl']};
  border-radius: 12px;
  text-align: center;
`

// MFB TODO: update styles on links to match TBC branding when unvisited
export const SignIn = ({ error, loading, setError, setLoading }: SignInProps) => {
  const hero = signin.content.sections.hero
  const membership = signin.content.sections.membership
  const signInForm = signin.content.sections.signInForm

  return (
    <SignInContainer>
      <Logo logo={hero.logo} />
      <Heading>{hero.heading}</Heading>
      <SignInForm
        error={error}
        loading={loading}
        setError={setError}
        setLoading={setLoading}
        signInForm={signInForm}
      />
      <Box p="4"></Box>
      <MembershipDialog membership={membership} />
    </SignInContainer>
  )
}
