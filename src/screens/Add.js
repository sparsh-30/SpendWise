import {View, Text} from 'react-native';
import {useMemo, useCallback} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  useBottomSheetSpringConfigs,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import AddForm from '../components/AddScreen/AddForm';
import {useSelector} from 'react-redux';
import colors from '../colors';

export default function Add({bottomSheetRef}) {
  const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], []);

  const theme = useSelector(state => state.theme.theme);

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
      style={{marginHorizontal: 3}}
      handleIndicatorStyle={{
        backgroundColor:
          theme === 'light' ? colors.light.primary : colors.dark.primary,
      }}
      backgroundStyle={{
        backgroundColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
        borderRadius: 15,
      }}
      backdropComponent={renderBackdrop}>
      {/* <BottomSheetScrollView> */}
        <AddForm />
      {/* </BottomSheetScrollView> */}
    </BottomSheet>
  );
}
