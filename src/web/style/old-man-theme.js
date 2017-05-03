import {cyan500, white} from 'material-ui/styles/colors';
import getMuiTheme, { palette } from 'material-ui/styles/getMuiTheme';
import {fade} from 'material-ui/utils/colorManipulator';

const oldManTheme = getMuiTheme({
  toolbar: {
    backgroundColor: cyan500,
    color: white,
    iconColor: white,
  },
  flatButton: {
    menuTextColor: white,
  },
});

export default oldManTheme;