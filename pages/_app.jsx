/* eslint-disable import/order */
import Layout from "@/components/common/Layout"
import "@/styles/globals.css"
import { Provider } from "react-redux"
import store from "store/store"

export default function MyApp({ Component, pageProps }) {
  // const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      {/* <PokemonState> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </PokemonState> */}
    </Provider>
  )
}
