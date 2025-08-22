import tbcLogo from './assets/tbc-logo.png'
import './App.css'
import { Button, MaxAppWidth } from './components'
import { TextField } from '@radix-ui/themes'

function App() {
  return (
    <MaxAppWidth>
      <div>
        <a href="https://tbcoop.org/" target="_blank" rel="noreferrer">
          <img src={tbcLogo} className="logo" alt="TBC logo" />
        </a>
      </div>
      <h1>
        Triad Buying<br></br>Co-op
      </h1>

      <TextField.Root variant="surface" placeholder="Username" />
      <TextField.Root variant="surface" placeholder="Password" />
      <Button variant="tbc-mustard">Sign in</Button>
      <Button variant="tbc-green">Sign up</Button>
    </MaxAppWidth>
  )
}

export default App
