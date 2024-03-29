import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../components/Pagination/Pagination.scss'

import type { AppProps } from 'next/app'
import Script from 'next/script'
import { AuthUserProvider } from '../contexts/auth.context'
import { Provider } from 'react-redux'
import store, { persistor } from '../store/store'
import { PersistGate } from 'redux-persist/integration/react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <div>
      <Head>
      <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
      </Head>
        <Script
          src="/assets/js/jquery.js"
          onLoad={() => console.log('jQuery loaded')}
        />
        <Script
          src="/assets/js/fontawesome.min.js"
          onLoad={() => console.log('fontAwesome loaded')}
        />
        <Script
          src="/assets/js/waypoints.min.js"
          onLoad={() => console.log('waypoint loaded')}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
          crossOrigin="anonymous"
          onLoad={() => console.log('bootsrap loaded')}
        />
        <Script
          src="/assets/js/swiper.min.js"
          onLoad={() => console.log('swiper loaded')}
        />
        <Script
          src="/assets/js/jquery.countdown.min.js"
          onLoad={() => console.log('jquery countdowm loaded')}
        />
        <Script
          src="/assets/js/jquery.counterup.min.js"
          onLoad={() => console.log('countup loaded')}
        />
        <Script
          src="/assets/js/isotope.pkgd.min.js"
          onLoad={() => console.log('isotope loaded')}
        />
        <Script
          src="/assets/js/lightcase.js"
          onLoad={() => console.log('lightcase loaded')}
        />
        <Script
          src="/assets/js/functions.js"
          onLoad={() => console.log('function loaded')}
        />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </div>
    </AuthUserProvider>
  )
}
