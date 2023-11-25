import {
  View,
  TouchableNativeFeedback,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {useState, useEffect} from 'react';
import {Formik} from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import {useSelector} from 'react-redux';
import colors from '../../colors';
import Icon from 'react-native-vector-icons/AntDesign';
import Check from 'react-native-vector-icons/Ionicons';
import {
  getExpenseCategoryArray,
  getIncomeCategoryArray,
} from '../../categoryLinks';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export default function AddForm() {
  const theme = useSelector(state => state.theme.theme);

  // For Transaction Type and Transaction Category
  const [selectedTransactionType, setSelectedTransactionType] =
    useState('expense');
  function getSelectedTransactionType(type) {
    setSelectedTransactionType(type);
  }

  // For Date and Time Picker
  const dateTimeFormat = 'dddd, DD/MM/YYYY, h:mm a';
  const [placeholder, setPlaceholder] = useState('Date of the transaction');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    if (event?.type === 'dismissed') {
      setDate(date);
      return;
    }
    setDate(currentDate);
    const temp = moment(selectedDate).format(dateTimeFormat);
    setPlaceholder(temp);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
  };
  const handleClickOnNow = () => {
    const temp = moment().format(dateTimeFormat);
    setPlaceholder(temp);
  };

  return (
    <View className="flex-1 mt-4">
      <Text
        style={{
          color: theme === 'light' ? colors.light.primary : colors.dark.primary,
        }}
        className="text-2xl text-center mb-10 font-[700]">
        ADD TRANSACTION
      </Text>
      <Formik
        initialValues={{email: ''}}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => {
          return (
            <View className="px-7">
              {/* Transaction Title Input Field */}
              <TextInput
                // onChangeText={handleChange('email')}
                // onBlur={handleBlur('email')}
                // value={values.email}
                style={{
                  color:
                    theme === 'light' ? colors.light.text : colors.dark.text,
                  borderColor:
                    theme === 'light'
                      ? colors.light.primary
                      : colors.dark.primary,
                }}
                className="h-12 px-4 mb-6 text-white font-extrabold mt-1 rounded-md border-2"
                placeholder="Transaction Title"
                placeholderTextColor={
                  theme === 'light' ? colors.light.text : colors.dark.text
                }
                selectionColor={
                  theme === 'light' ? colors.light.text : colors.dark.text
                }
              />
              {/* Transaction Amount and Transaction Type Input Field */}
              <View className="flex flex-row mb-6">
                {/* Transaction Amount Input */}
                <View className="w-1/2">
                  <TextInput
                    style={{
                      color:
                        theme === 'light'
                          ? colors.light.text
                          : colors.dark.text,
                      borderColor:
                        theme === 'light'
                          ? colors.light.primary
                          : colors.dark.primary,
                    }}
                    className="h-12 px-4 w-[90%] text-white font-extrabold rounded-md border-2"
                    placeholder="Amount"
                    placeholderTextColor={
                      theme === 'light' ? colors.light.text : colors.dark.text
                    }
                    selectionColor={
                      theme === 'light' ? colors.light.text : colors.dark.text
                    }
                    keyboardType="decimal-pad"
                  />
                </View>
                {/* Transaction Type Dropdown */}
                <View className="w-1/2 relative bottom-[1]">
                  <TransactionTypeDropdown
                    getSelectedTransactionType={getSelectedTransactionType}
                  />
                </View>
              </View>
              {/* Transaction Category Dropdown */}
              <View className="mb-6">
                <CategoriesDropdown
                  selectedTransactionType={selectedTransactionType}
                />
              </View>

              {/* Transaction Date and Time Picker */}
              <View>
                <TextInput
                  readOnly={true}
                  style={{
                    color:
                      theme === 'light' ? colors.light.text : colors.dark.text,
                    borderColor:
                      theme === 'light'
                        ? colors.light.primary
                        : colors.dark.primary,
                  }}
                  className="h-12 px-4 mb-2 text-white font-extrabold mt-1 rounded-md border-2"
                  placeholder={placeholder}
                  placeholderTextColor={
                    theme === 'light' ? colors.light.text : colors.dark.text
                  }
                  selectionColor={
                    theme === 'light' ? colors.light.text : colors.dark.text
                  }
                />
                {/* Date and Time Buttons */}
                <View className="flex flex-row justify-between">
                  <TouchableNativeFeedback onPress={showDatepicker}>
                    <View
                      style={{
                        backgroundColor:
                          theme === 'light'
                            ? colors.light.primary
                            : colors.dark.primary,
                      }}
                      className="w-[30%] py-3 flex flex-row justify-center rounded-md">
                      <Text className="text-[16] text-white font-[800]">
                        DATE
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback onPress={showTimepicker}>
                    <View
                      style={{
                        backgroundColor:
                          theme === 'light'
                            ? colors.light.primary
                            : colors.dark.primary,
                      }}
                      className="w-[30%] py-3 flex flex-row justify-center rounded-md">
                      <Text className="text-[16] text-white font-[800]">
                        TIME
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                  <TouchableNativeFeedback onPress={handleClickOnNow}>
                    <View
                      style={{
                        backgroundColor:
                          theme === 'light'
                            ? colors.light.primary
                            : colors.dark.primary,
                      }}
                      className="w-[30%] py-3 flex flex-row justify-center rounded-md">
                      <Text className="text-[16] text-white font-[800]">
                        NOW
                      </Text>
                    </View>
                  </TouchableNativeFeedback>
                  {show && (
                    <RNDateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={false}
                      onChange={onChange}
                    />
                  )}
                </View>
              </View>
              {/* Submit Button */}
              <TouchableNativeFeedback>
                <View
                  style={{
                    backgroundColor:
                      theme === 'light'
                        ? colors.light.primary
                        : colors.dark.primary,
                  }}
                  className="py-3 mt-10 flex flex-row justify-center rounded-md">
                  <Text className="text-[16] text-white font-[800]">
                    SUBMIT
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const TransactionTypeDropdown = ({getSelectedTransactionType}) => {
  const theme = useSelector(state => state.theme.theme);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('expense');
  const [items, setItems] = useState([
    {label: 'Expense', value: 'expense'},
    {label: 'Income', value: 'income'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      itemSeparator={true}
      closeOnBackPressed={true}
      closeAfterSelecting={true}
      zIndex={1000}
      onChangeValue={value => getSelectedTransactionType(value)}
      textStyle={{
        color: 'white',
        fontSize: 16,
        fontWeight: 900,
      }}
      style={{
        height: 48,
        backgroundColor:
          theme === 'light' ? colors.light.primary : colors.dark.primary,
        color: '#fff',
        borderColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      ArrowUpIconComponent={() => (
        <Icon name="caretup" size={18} color="white" />
      )}
      ArrowDownIconComponent={() => (
        <Icon name="caretdown" size={18} color="white" />
      )}
      TickIconComponent={() => (
        <Check name="checkmark-circle-outline" size={24} color="white" />
      )}
      dropDownContainerStyle={{
        borderColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      listItemContainerStyle={{
        height: 40,
        backgroundColor:
          theme === 'light' ? colors.light.primary : colors.dark.primary,
      }}
      listItemLabelStyle={{
        color: '#fff',
        fontSize: 16,
        fontWeight: 500,
      }}
      itemSeparatorStyle={{
        backgroundColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
    />
  );
};

const CategoriesDropdown = ({selectedTransactionType}) => {
  const theme = useSelector(state => state.theme.theme);

  const categoriesArray =
    selectedTransactionType === 'expense'
      ? getExpenseCategoryArray()
      : getIncomeCategoryArray();

  const items = categoriesArray.map(category => {
    return {
      label: category.categoryTitle,
      value: category.categoryTitle,
      icon: () => (
        <Image source={category.categoryLink} style={{height: 36, width: 36}} />
      ),
    };
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(categoriesArray[0].categoryTitle);

  useEffect(() => {
    setValue(categoriesArray[0].categoryTitle);
  }, [selectedTransactionType]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      max={3}
      listMode="MODAL"
      modalTitle="SELECT A CATEGORY"
      modalAnimationType="slide"
      nestedScrollEnables={true}
      setOpen={setOpen}
      setValue={setValue}
      itemSeparator={true}
      closeOnBackPressed={true}
      closeAfterSelecting={true}
      zIndex={500}
      // onChangeValue={value => {
      //   dispatch(setTransactionType(value));
      //   dispatch(setCategory('all'));
      // }}
      textStyle={{
        color: theme === 'light' ? colors.light.text : colors.dark.text,
        fontSize: 16,
        fontWeight: 900,
      }}
      style={{
        height: 48,
        backgroundColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
        borderColor:
          theme === 'light' ? colors.light.primary : colors.dark.primary,
        borderWidth: 2,
      }}
      ArrowUpIconComponent={() => (
        <Icon
          name="caretup"
          size={18}
          color={theme === 'light' ? colors.light.primary : colors.dark.primary}
        />
      )}
      ArrowDownIconComponent={() => (
        <Icon
          name="caretdown"
          size={18}
          color={theme === 'light' ? colors.light.primary : colors.dark.primary}
        />
      )}
      TickIconComponent={() => (
        <Check
          name="checkmark-circle-outline"
          size={28}
          color={theme === 'light' ? colors.light.primary : colors.dark.primary}
        />
      )}
      dropDownContainerStyle={{
        borderColor:
          theme === 'light' ? colors.light.primary : colors.dark.primary,
      }}
      listItemContainerStyle={{
        height: 60,
        backgroundColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      listItemLabelStyle={{
        color: theme === 'light' ? colors.light.text : colors.dark.text,
        fontSize: 20,
        fontWeight: 500,
      }}
      itemSeparatorStyle={{
        backgroundColor:
          theme === 'light' ? colors.light.primary : colors.dark.primary,
      }}
      modalContentContainerStyle={{
        backgroundColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      modalTitleStyle={{
        color: theme === 'light' ? colors.light.primary : colors.dark.primary,
        fontWeight: 800,
      }}
    />
  );
};

/*
Transaction Title                   Done
Transaction Amount                  Done
Transaction Type                    Done
Transaction Category                Done
Transaction Date                    Done
*/
