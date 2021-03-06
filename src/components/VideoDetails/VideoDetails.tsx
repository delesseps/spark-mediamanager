import * as React from "react"

import { Button, Dialog, DialogActions, DialogContent, IconButton, TextField } from "material-ui"
import { Search, Settings, Tv } from "material-ui-icons"
import {} from "material-ui-icons"
import { MenuItem, SelectField } from "material-ui-legacy"
import { withStyles } from "material-ui/styles"
import { StyleRules } from "material-ui/styles/withStyles"
import { FormattedMessage, injectIntl } from "react-intl"
import * as ReactIntl from "react-intl"
import { withRouter } from "react-router"
import { compose } from "recompose"

import IVideo from "../../@types/IVideo"
import DialogContentRoot from "../DialogContentRoot/DialogContentRoot"
import Fanart from "../Fanart/Fanart"
import IconTextField from "../IconTextField/IconTextField"

const styles: StyleRules = {
  dialogRoot: {
    display: "flex",
    flexDirection: "column",
    margin: [-24, -24, 0, -24],
  },
  fanart: {
    width: 768,
  },
  actions: {
    display: "flex",
    margin: [0, 24],
  },
  iconButton: {
    marginTop: 8,
    marginLeft: 8,
  },
  select: {
    marginTop: 4,
  },
  path: {
    marginLeft: 8,
    width: 344,
  },
  overview: {
    margin: [8, 24],
  },
}

interface IProps {
  classNames?: string
  open: boolean
  video: IVideo
}

interface IHocProps {
  classes: {
    fanart: string
    dialogRoot: string
    actions: string
    iconButton: string
    path: string
    overview: string
    select: string
  }
  history: any[]
  match: any
  location: any
  staticContext: any
  intl: ReactIntl.InjectedIntl
}

type IFullProps = IProps & IHocProps

const VideoDetails: React.StatelessComponent<IFullProps> = ({
  classNames,
  classes,
  video,
  open,
  intl,
  history,
  match,
  location,
  staticContext,
  ...rest,
}) =>
  <Dialog open={open} onRequestClose={() => history.push("/")} {...rest} maxWidth="md">
    <DialogContent className={`${classNames || ""}`}>
      <DialogContentRoot>
        <div className={classes.dialogRoot}>
          <div className={classes.fanart}>
            <Fanart video={video} />
          </div>
          <div className={classes.actions}>
            <SelectField className={classes.select} value={1}>
              <MenuItem value={1} primaryText="Gotham" />
              <MenuItem value={2} primaryText="Gotham 2" />
              <MenuItem value={3} primaryText="Something similar to Gotham" />
            </SelectField>
            <IconButton className={classes.iconButton}>
              <Settings />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <Tv />
            </IconButton>
            <IconTextField
              IconSvg={Search}
              className={classes.path}
              defaultValue={video.path}
              placeholder={intl.formatMessage({ id: "videoDetails.path" })}
            />
          </div>
          <TextField
            label={intl.formatMessage({ id: "videoDetails.overview" })}
            multiline
            rows="3"
            defaultValue={video.api.overview}
            className={classes.overview}
          />
        </div>
      </DialogContentRoot>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => history.push(location.pathname.replace("/videoDetails", ""))}>
        <FormattedMessage id="common.cancel" />
      </Button>
      <Button>
        <FormattedMessage id="common.save" />
      </Button>
    </DialogActions>
  </Dialog>

export default compose<IFullProps, IProps>(withStyles(styles, { name: "VideoDetails" }), injectIntl, withRouter)(
  VideoDetails
)
