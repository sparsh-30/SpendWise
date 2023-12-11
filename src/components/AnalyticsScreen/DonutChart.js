import {View, Text, Image} from 'react-native';
import {useState} from 'react';
import {PieChart} from 'react-native-gifted-charts';
import {getObjectFromCategoryName} from '../../categoryLinks';
import {useSelector} from 'react-redux';
import colors from '../../colors';

export default function DonutChart({data}) {
  const theme = useSelector(state => state.theme.theme);
  const [selectedAreaTitle, setSelectedAreaTitle] = useState('');
  const categoryObject = getObjectFromCategoryName(selectedAreaTitle);
  return (
    <PieChart
      textColor="black"
      radius={150}
      textSize={20}
      donut
      onPress={item => setSelectedAreaTitle(item.text)}
      focusOnPress
      showTextBackground
      textBackgroundRadius={26}
      data={data}
      innerCircleColor={
        theme === 'light' ? colors.light.background : colors.dark.background
      }
      centerLabelComponent={() => {
        return selectedAreaTitle === '' ? (
          <View></View>
        ) : (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image className="h-11 w-11" source={categoryObject.categoryLink} />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 800,
                color:
                  theme === 'light'
                    ? colors.light.primary
                    : colors.dark.primary,
              }}>
              {selectedAreaTitle}
            </Text>
          </View>
        );
      }}
    />
  );
}
