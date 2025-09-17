import { useState, useEffect } from 'react'
import { supabase } from './services'
import { type Session } from '@supabase/supabase-js'
import tbcLogo from './assets/tbc-logo.png'
import { OrderHistory } from './pages'
import { SignIn } from './features'
import { Button, MaxAppWidth } from './components'
import { Text } from '@radix-ui/themes'
import './App.css'

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

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  if (!session) {
    // OPTIMIZE: return Unauthenticated UI
    return (
      <MaxAppWidth>
        <SignIn
          email={email}
          error={error}
          setError={setError}
          loading={loading}
          setLoading={setLoading}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </MaxAppWidth>
    )
  }

  return (
    // OPTIMIZE: return Authenticated UI
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
      <OrderHistory />
      <Button variant="tbc-mustard" onClick={handleSignOut}>
        Sign Out
      </Button>
    </MaxAppWidth>
  )
}

export default App
