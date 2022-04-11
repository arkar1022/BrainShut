import { createTheme,responsiveFontSizes,} from '@mui/material/styles';
  let Theme = createTheme();
  Theme = responsiveFontSizes(Theme);

export default Theme;