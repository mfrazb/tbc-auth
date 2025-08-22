import { useState, useEffect } from 'react'
import { createClient, type Session } from '@supabase/supabase-js'
import tbcLogo from './assets/tbc-logo.png'
import './App.css'
import { Button, MaxAppWidth } from './components'
import { Heading, Text, TextField } from '@radix-ui/themes'

const supabase = createClient(
  'https://mhbstcvqtfusmeggnfzy.supabase.co',
  import.meta.env.VITE_SUPABASE_ANON_KEY || '',
)

function App() {
  const [session, setSession] = useState<Session | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

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

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      setError('Check your email for the confirmation link!')
    }
    setLoading(false)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  if (!session) {
    return (
      <MaxAppWidth>
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

          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="tbc-mustard" type="submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign in'}
            </Button>
            <Button
              variant="tbc-green"
              type="button"
              onClick={handleSignUp}
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign up'}
            </Button>
          </div>
        </form>
      </MaxAppWidth>
    )
  }

  return (
    <MaxAppWidth>
      <div>
        <a href="https://tbcoop.org/" target="_blank" rel="noopener noreferrer">
          <img src={tbcLogo} className="logo" alt="TBC logo" />
        </a>
      </div>
      <h1>
        Triad Buying<br></br>Co-op
      </h1>

      <Text>Welcome, {session.user.email}!</Text>
      <Text>Past orders:</Text>
      <Button variant="tbc-mustard" onClick={handleSignOut}>
        Sign Out
      </Button>
    </MaxAppWidth>
  )
}

export default App
