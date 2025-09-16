import { Button } from '../../components'
import { Heading, Link, Text, TextField } from '@radix-ui/themes'
import tbcLogo from '../../assets/tbc-logo.png'
import type { Dispatch, SetStateAction } from 'react'

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
  setError,
  setLoading,
  setPassword,
  handleSignIn,
  handleSignOut,
  handleSignUp,
}: SignInProps) => {
  return (
    <>
      <div>
        <div>
          <a
            href="https://tbcoop.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tbcLogo} className="logo" alt="TBC logo" />
          </a>
        </div>
        <Heading>
          Triad Buying<br></br>Co-op
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

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <Button variant="tbc-mustard" type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Log in'}
            </Button>

            <Text>
              {`Don't have an account? <br /> Reach out to`}
              <Link href="mailto:membership@tbcoop.org">
                request membership.
              </Link>
            </Text>
          </div>
        </form>
      </div>
    </>
  )
}
