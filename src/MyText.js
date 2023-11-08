import {Text} from 'react-native';
import colors from './colors';
import {useSelector} from 'react-redux';

export default function MyText(props) {
  const theme = useSelector(state => state.theme.theme);
  return (
    <Text
      className={props.class}
      style={{
        fontWeight: 600,
        color: theme === 'light' ? colors.light.text : colors.dark.text,
      }}>
      {props.children}
    </Text>
  );
}
