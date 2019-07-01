const colors = {
  white: '#fff',
  black: '#2b2b2b',
  grayDark: '#aaa',
  gray: '#ccc',
  grayLight: '#e3e3e3',
  grayLighter: '#f5f5f5',
  bodyBg: '#f3f6ff',
}

const variables = {
  spacing1: '4px',
  spacing2: '8px',
  spacing3: '12px',
  spacing4: '16px',
  spacing5: '20px',
  spacing6: '24px',
  safeAreaSpacing: '60px',
  safeAreaSpacingLg: '100px',

  primary: '#b935fc',
  primaryLight: '#786c97',
  primaryBgTextColor: '#f5f3ff',
  secondary: '#7b42eb',
  secondaryBgTextColor: 'white',
  lime: '#04eec0',
  chatBg: '#edf6f7',

  bodyBg: colors.bodyBg,
  textColor: colors.black,
}

const theme = {
  ...colors,
  ...variables,
}

export default theme
