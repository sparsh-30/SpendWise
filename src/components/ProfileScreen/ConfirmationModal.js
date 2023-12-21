import {View, Text, TouchableNativeFeedback} from 'react-native';
import {useCallback, useMemo, useRef, useEffect} from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {changeModalStatus} from '../../store/modalSlice';
import {saveTransactionData} from '../../store/TransactionsSlice';
import colors from '../../colors';

export default function ConfirmationModal() {
  const theme = useSelector(state => state.theme.theme);
  const modalStatus = useSelector(state => state.modal.showModal);
  const dispatch = useDispatch();
  const bottomSheetModalRef = useRef(null);

  useEffect(() => {
    if (modalStatus === 'open') bottomSheetModalRef.current.present();
  }, [modalStatus]);

  const snapPoints = useMemo(() => ['35%'], []);

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

  const handleSheetChanges = useCallback(index => {
    if (index === -1) dispatch(changeModalStatus('close'));
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        enablePanDownToClose={true}
        index={0}
        detached
        style={{marginHorizontal: 12}}
        bottomInset={12}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{
          backgroundColor:
            theme === 'light' ? colors.light.primary : colors.dark.primary,
        }}
        backgroundStyle={{
          backgroundColor:
            theme === 'light'
              ? colors.light.background
              : colors.dark.background,
          borderRadius: 15,
        }}
        backdropComponent={renderBackdrop}>
        <ModalContent
          theme={theme}
          dispatch={dispatch}
          bottomSheetModalRef={bottomSheetModalRef}
        />
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const ModalContent = ({theme, dispatch, bottomSheetModalRef}) => {
  const handleCancelButton = () => {
    bottomSheetModalRef.current.dismiss();
    dispatch(changeModalStatus('close'));
  };

  const handleDeleteButton = async () => {
    const emptyTransactionsObject = {
      totalExpense: Number(0),
      totalIncome: Number(0),
      transactions: [],
    };
    dispatch(saveTransactionData(emptyTransactionsObject));
    bottomSheetModalRef.current.dismiss();
    dispatch(changeModalStatus('close'));
  };

  return (
    <View className="p-3 flex-1 justify-between">
      <View>
        <Text
          style={{
            color:
              theme === 'light' ? colors.light.primary : colors.dark.primary,
          }}
          className="font-extrabold text-2xl text-center mb-3">
          Delete All Transactions?
        </Text>
        <Text
          style={{
            color: theme === 'light' ? colors.light.text : colors.dark.text,
            fontSize: 16,
          }}
          className="text-center">
          Are you sure you want to permanently delete all the transactions?
        </Text>
      </View>
      <View className="flex flex-row justify-center items-center">
        <TouchableNativeFeedback onPress={handleCancelButton}>
          <View className="w-1/2 h-10 flex flex-row justify-center items-center">
            <Text
              style={{
                color: theme === 'light' ? colors.light.text : colors.dark.text,
              }}
              className="text-xl font-extrabold">
              CANCEL
            </Text>
          </View>
        </TouchableNativeFeedback>
        <View
          style={{
            backgroundColor:
              theme === 'light' ? colors.light.text : colors.dark.text,
          }}
          className="w-[1] h-5"></View>
        <TouchableNativeFeedback onPress={handleDeleteButton}>
          <View className="w-1/2 h-10 flex flex-row justify-center items-center">
            <Text
              style={{color: theme === 'light' ? '#ef5350' : '#d32f2f'}}
              className="text-xl font-extrabold">
              DELETE
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};
