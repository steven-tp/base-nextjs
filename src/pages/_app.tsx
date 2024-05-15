import type { AppProps } from 'next/app'
import Providers from '../../Providers'
import { store } from '@/state'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../../next-seo.config'
import '@/styles/index.css'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Providers store={store}>
        <Component {...pageProps} />
      </Providers>
    </>
  )

}