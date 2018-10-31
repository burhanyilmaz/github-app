import theme from '../../config/theme';

const headerStyle = {
  backgroundColor: theme.color.primary,
  elevation: 0,
  shadowOpacity: 0,
  shadowColor: 'transparent',
  shadowOffset: {
    height: 0
  },
  elevation: 0,
  shadowRadius: 0,
  borderBottomWidth: 0
};
const headerTitleStyle = {
  color: theme.color.white,
  fontWeight: theme.fontWeight.x
};
const headerTintColor = theme.color.white;

export const getNavigationOptions = (title, headerLeft) => {
  return {
    headerLeft,
    headerTintColor,
    title,
    headerTitleStyle,
    headerStyle
  };
};
