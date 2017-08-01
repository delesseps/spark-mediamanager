import * as React from "react"

import { addLocaleData, IntlProvider } from "react-intl"
import * as en from "react-intl/locale-data/en"
import * as pt from "react-intl/locale-data/pt"

import Theme from "../components/Theme/Theme"
import HomeContainer from "./HomeContainer/HomeContainer"

addLocaleData([...en, ...pt])

function getMessages(locale: string) {
  return require(`../locales/${locale}.json`)
}

const App = () => {
  return (
    <IntlProvider locale="pt" messages={getMessages("pt")}>
      <Theme>
        <HomeContainer />
      </Theme>
    </IntlProvider>
  )
}

export default App
