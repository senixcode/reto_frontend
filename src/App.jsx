import CustommizedContexts from './context'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <CustommizedContexts>
      <AppRouter />
    </CustommizedContexts>
  )
}

export default App
