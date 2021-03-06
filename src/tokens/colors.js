// 50 shades of grey generator
// https://javisperez.github.io/tailwindcolorshades/#/?%233E4047=3E4047&tv=1
const colors = {
  grey100: '#ECECED',
  grey200: '#CFCFD1',
  grey300: '#B2B3B5',
  grey400: '#78797E',
  grey500: '#3E4047',
  grey600: '#383A40',
  grey700: '#25262B',
  grey800: '#1C1D20',
  grey900: '#131315',

  black: '#000000',
  white: '#ffffff',

  blue: '#87ccec'

}

export default {
  ...colors,
  textLightest: colors.white,
  textLightestHover: colors.grey200,
  textLight: '#57595d',
  primary: colors.black,
  primaryAlpha: `rgba(32, 35, 42, 0.85)`,
  text: colors.black,
  background: '#f0f2f3',
  backgroundArticle: colors.white,
  heartFooter: 'red',
  highlight_code_oneline: '#fff9d9',
  highlight_code_bg: '#ffa7c4',
  highlight_code_marker: '#ffa7c4',
  highlight_code_linebg: '#022a4b',
  // testing
  // primary: `#6556B3`,
  // primaryAlpha: `#6556B3cc`,
}
