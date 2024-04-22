import { Store } from '@reduxjs/toolkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
// Create a client
const queryClient = new QueryClient()
const Providers: React.FC<
  React.PropsWithChildren<{ store: Store; children: React.ReactNode }>
> = ({ children, store }) => {
  return (
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {children}
    </Provider>
    </QueryClientProvider>
  )
}

export default Providers