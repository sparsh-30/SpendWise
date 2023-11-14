import {View} from 'react-native';
import {useState} from 'react';
import MyText from '../../MyText';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import Check from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import colors from '../../colors';

export default function Dropdowns() {
  const theme = useSelector(state => state.theme.theme);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <View className="flex flex-row px-2">
      <View className="w-1/2 h-20">
        <View className="w-11/12 mx-auto">
          <MyText class="text-center mb-1">Income/Expense</MyText>
          <TransactionTypeDropdown />
        </View>
      </View>
      <View className="w-1/2 h-20 mx-auto">
        <View className="w-11/12 mx-auto">
          <MyText class="text-center mb-1">Select Category</MyText>
          <CategoryDropdown />
        </View>
      </View>
    </View>
  );
}

const TransactionTypeDropdown = () => {
  const theme = useSelector(state => state.theme.theme);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Both', value: 'both'},
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
      placeholder="Both"
      textStyle={{
        color: 'white',
        fontSize: 16,
        fontWeight: 900,
      }}
      style={{
        backgroundColor:
          theme === 'light' ? colors.light.primary : colors.dark.primary,
        color: '#fff',
        borderColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      placeholderStyle={{
        color: 'white',
        fontSize: 16,
        fontWeight: 900,
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

const CategoryDropdown = () => {
  const theme = useSelector(state => state.theme.theme);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All', value: 'all'},
    {label: 'Expense', value: 'expense'},
    {label: 'Income', value: 'income'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      max={1}
      setValue={setValue}
      setItems={setItems}
      itemSeparator={true}
      closeOnBackPressed={true}
      closeAfterSelecting={true}
      placeholder="All"
      textStyle={{
        color: 'white',
        fontSize: 16,
        fontWeight: 900,
      }}
      style={{
        backgroundColor:
          theme === 'light' ? colors.light.primary : colors.dark.primary,
        color: '#fff',
        borderColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      placeholderStyle={{
        color: 'white',
        fontSize: 16,
        fontWeight: 900,
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
