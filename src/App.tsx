import { ThemeProvider } from './lib/ThemeContext'
import { Presentation } from './Presentation'

function App() {
  return (
    <ThemeProvider>
      <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: 'var(--bg)' }}>
        <Presentation />
      </div>
    </ThemeProvider>
  )
}

export default App
