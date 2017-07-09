import React from "react"
import { IntlProvider, addLocaleData } from "react-intl"
import en from "react-intl/locale-data/en"
import pt from "react-intl/locale-data/pt"

addLocaleData([...en, ...pt])

function getMessages(locale) {
  return require(`../src/locales/${locale}.json`)
}

const ComponentWrapper = ({ children, locale }) =>
  <IntlProvider locale={locale} messages={getMessages(locale)}>
    <div
      className="ComponentWrapper"
      style={{
        display: "flex",
        height: "100vh",
        userSelect: "none"
      }}
    >
      <div className="ComponentWrapper" style={{ margin: "auto" }}>
        {children}
      </div>
    </div>
  </IntlProvider>

export default ComponentWrapper
