import { toRem } from '../utils/utils'

const theme = {
  lightBlue: '#8FC7E0',
  darkBlue: '#0077B5',
  teal: '#428CAC',
  aliceBlue: 'aliceBlue',
  burgandy: '#800020',
  darkRed: '#DD5143',
  orange: '#E79E24',
  yellow: 'yellow',
  white: '#fff',
  textBlack: '#4A4A4A',
  textOffBlack: '#7b7b7b',
  textHoverBlack: 'black',
  lightGrey: '#E0E0E0',
  mediumGrey: '#CECECE',
  darkGrey: '#C4C4C4',
  green: '#18D073',
  tan: '#E4E4E4',
  link: '#4A90E2',
  shadow: 'rgba(0, 0, 0, 0.25)',
  dropShadow: `${toRem(2)} ${toRem(2)} ${toRem(20)} rgba(0, 0, 0, 0.25)`,
  hoverDropShadow: `${toRem(4)} ${toRem(4)} ${toRem(30)} rgba(0, 0, 0, 0.35)`,
  defaultBorderRadius: '5px'
}

export default theme
