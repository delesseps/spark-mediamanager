import * as React from "react"

import MuiThemeProviderLegacy from "material-ui-legacy/styles/MuiThemeProvider"
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles"

interface IProps {
  children: React.ReactNode
  type?: IType
}

type IType = "dark" | "light"

const Theme: React.StatelessComponent<IProps> = ({ children, type }) => (
  <MuiThemeProvider theme={getTheme(type)}>
    <MuiThemeProviderLegacy>{children}</MuiThemeProviderLegacy>
  </MuiThemeProvider>
)

const getTheme = (type: IType = "dark") => {
  return createMuiTheme({
    palette: {
      type,
    },
  })
}

export default Theme
