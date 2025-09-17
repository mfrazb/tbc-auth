import { Heading } from '../../components'
import { Box, Card } from '@radix-ui/themes'
import signin from '../../content/signin.json'
import type { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'
import { theme } from '../../utils'
import { Logo, MembershipDialog, SignInForm } from './components'
import { supabase } from '../../services'

interface SignInProps {
  email: string
  error: string | null
  loading: boolean
  password: string
  setEmail: Dispatch<SetStateAction<string>>
  setError: Dispatch<SetStateAction<string | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setPassword: Dispatch<SetStateAction<string>>
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
export const SignIn = ({
  email,
  error,
  loading,
  setEmail,
  password,
  setError,
  setLoading,
  setPassword,
}: SignInProps) => {
  const hero = signin.content.sections.hero
  const membership = signin.content.sections.membership
  const signInForm = signin.content.sections.signInForm

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  return (
    <SignInContainer>
      <Logo logo={hero.logo} />
      <Heading>{hero.heading}</Heading>
      <SignInForm
        email={email}
        password={password}
        error={error}
        loading={loading}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignIn={handleSignIn}
        signInForm={signInForm}
      />
      <Box p="4"></Box>
      <MembershipDialog membership={membership} />
    </SignInContainer>
  )
}
