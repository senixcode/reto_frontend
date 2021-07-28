import { QueryClient, QueryClientProvider } from 'react-query'
import CustommizedContexts from './context'
import AppRouter from './routes/AppRouter'
const queryClient = new QueryClient()
function App() {
  return (
    <CustommizedContexts>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </CustommizedContexts>
  )
}

export default App
