import * as React from "react"
import Dialog, { DialogActions, DialogContent, DialogContentText } from "material-ui/Dialog"
import { withStyles, createStyleSheet } from "material-ui/styles"

const styles = createStyleSheet("VideoDetails", theme => ({
  fanart: {
    height: 300,
    width: 300,
    backgroundColor: "blue"
  }
}))

interface IProps {
  classNames: string
}

interface IHocProps {
  classes: {
    fanart: string
  }
}

type IFullProps = IProps & IHocProps

const VideoDetails = ({ classNames, classes, ...rest }: IFullProps) =>
  <Dialog {...rest}>
    <DialogContent className={`${classNames || ""}`}>
      <DialogContentText>
        <div className={classes.fanart}>
          <div />
        </div>
      </DialogContentText>
    </DialogContent>
    <DialogActions />
  </Dialog>

export default withStyles(styles)(VideoDetails)