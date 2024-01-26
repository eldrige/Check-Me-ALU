import { Text } from 'react-native';

export function CustomText(props: Text['props']) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'RebondGrotesque' }]} />
  );
}
