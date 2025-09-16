import { Button, Link } from '../../components'
import { Dialog, Flex, Heading, Text, TextField } from '@radix-ui/themes'
import Markdown from 'react-markdown'
import { Cross2Icon } from '@radix-ui/react-icons'
import tbcLogo from '../../assets/tbc-logo.png'
import signin from '../../content/signin.json'
import type { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled'
import { theme } from '../../utils'

interface SignInProps {
  email: string
  error: string | null
  loading: boolean
  handleSignIn: (e: React.FormEvent) => Promise<void>
  handleSignUp: (e: React.FormEvent) => Promise<void>
  handleSignOut: (e: React.FormEvent) => Promise<void>
  password: string
  setEmail: Dispatch<SetStateAction<string>>
  setError: Dispatch<SetStateAction<string | null>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setPassword: Dispatch<SetStateAction<string>>
}

const SignInContainer = styled(Flex)`
  flex-direction: column;
  gap: ${theme.spacing['spacing-xs']};
`
const DialogContainer = styled(Flex)`
  flex-direction: column;
  gap: ${theme.spacing['spacing-xs']};
`
// MFB TODO: move styles outside of component and use emotion
// MFB TODO: update styles on links to match TBC branding when unvisited
// MFB TODO: add "forgot password" link
// MFB TODO: add "show password" button
// MFB TODO: add membership request form
export const SignIn = ({
  email,
  error,
  loading,
  setEmail,
  password,
  // setError,
  // setLoading,
  setPassword,
  handleSignIn,
  // handleSignOut,
  // handleSignUp,
}: SignInProps) => {
  console.log('signin:', signin.content.sections.hero.logo.alt)
  const hero = signin.content.sections.hero
  const membership = signin.content.sections.membership

  return (
    <SignInContainer>
      <div>
        <a href="https://tbcoop.org/" target="_blank" rel="noopener noreferrer">
          <img
            src={tbcLogo}
            className="logo"
            alt={hero.logo.alt || 'TBC logo'}
          />
        </a>
      </div>
      <Heading>
        <Markdown>{hero.heading}</Markdown>
      </Heading>

      <form
        onSubmit={handleSignIn}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '300px',
          margin: '0 auto',
        }}
      >
        <TextField.Root
          variant="surface"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          required
        />
        <TextField.Root
          variant="surface"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          required
        />

        {error && (
          <Text color="red" size="2">
            {error}
          </Text>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Button variant="tbc-mustard" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Log in'}
          </Button>
        </div>
      </form>
      <DialogContainer>
        <Text>{membership.richText}</Text>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="ghost">Reach out to request membership</Button>
          </Dialog.Trigger>
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">
              Request membership
            </Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Share your name and email, and we'll reach out.
            </Dialog.Description>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor={membership.form.name.id}>
                {membership.form.name.label}
              </label>
              <input
                className="Input"
                id={membership.form.name.id}
                defaultValue={membership.form.name.defaultValue}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor={membership.form.email.id}>
                {membership.form.email.label}
              </label>
              <input
                className="Input"
                id={membership.form.email.id}
                defaultValue={membership.form.email.defaultValue}
              />
            </fieldset>
            <div
              style={{
                display: 'flex',
                marginTop: 25,
                justifyContent: 'flex-end',
              }}
            >
              <Dialog.Close>
                <Button variant="tbc-green">{membership.form.submit}</Button>
              </Dialog.Close>
            </div>
            <Dialog.Close>
              <Button variant="outline" aria-label="Close">
                <Cross2Icon />
              </Button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      </DialogContainer>
    </SignInContainer>
  )
}
