import {View, Text} from 'react-native';
import {useMemo, useCallback} from 'react';
import BottomSheet, {BottomSheetBackdrop,useBottomSheetSpringConfigs} from '@gorhom/bottom-sheet';

export default function Add({bottomSheetRef}) {
  const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.8}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );
  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 120,
    overshootClamping: true,
    restDisplacementThreshold: 0.9,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  return (
    <BottomSheet
      animationConfigs={animationConfigs}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
      detached={true}
      style={{marginHorizontal:3}}
      backgroundStyle={{backgroundColor:'white',borderRadius:15}}
      backdropComponent={renderBackdrop}>
      <View>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  );
}
