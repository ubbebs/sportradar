/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { SSRProvider } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </QueryClientProvider>
  )
}
