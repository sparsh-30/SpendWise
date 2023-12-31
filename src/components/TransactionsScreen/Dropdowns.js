import {View, Image} from 'react-native';
import {useState, useEffect} from 'react';
import MyText from '../../MyText';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import Check from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import colors from '../../colors';
import {
  getIncomeCategoryArray,
  getExpenseCategoryArray,
  getAllCategoryArray,
} from './../../categoryLinks';
import {setTransactionType, setCategory} from '../../store/dropdownSlice';

export default function Dropdowns() {
  const [category, setCategory] = useState('both');

  function setSelectedCategory(selectedCategory) {
    setCategory(selectedCategory);
  }

  return (
    <View className="flex flex-row px-2 my-5">
      <View className="w-[40%] h-20 px-1">
        <View className="mx-auto">
          <MyText class="text-center mb-1">Income/Expense</MyText>
          <TransactionTypeDropdown setSelectedCategory={setSelectedCategory} />
        </View>
      </View>
      <View className="w-[60%] h-20 px-1">
        <View className="mx-auto">
          <MyText class="text-center mb-1">Select Category</MyText>
          <CategoryDropdown viewCategoriesFor={category} />
        </View>
      </View>
    </View>
  );
}

const TransactionTypeDropdown = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('both');
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
      zIndex={1000}
      placeholder="Both"
      onChangeValue={value => {
        dispatch(setTransactionType(value));
        dispatch(setCategory('all'));
      }}
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
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const viewCategoriesFor = useSelector(
    state => state.dropdown.transactionType,
  );

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');

  function getCategoriesFromTransaction(transactionType) {
    if (transactionType === 'both') return getAllCategoryArray();
    else if (transactionType === 'income') return getIncomeCategoryArray();
    else return getExpenseCategoryArray();
  }

  const getCategoryArray = getCategoriesFromTransaction(viewCategoriesFor);

  let items = getCategoryArray.map(category => {
    return {
      label: category.categoryTitle,
      value: category.categoryTitle,
      icon: () => (
        <Image source={category.categoryLink} style={{height: 20, width: 20}} />
      ),
    };
  });

  items.unshift({
    label: 'All',
    value: 'all',
  });

  useEffect(() => {
    setValue('all');
  }, [viewCategoriesFor]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      max={1}
      onChangeValue={value => dispatch(setCategory(value))}
      setValue={setValue}
      itemSeparator={true}
      closeOnBackPressed={true}
      closeAfterSelecting={true}
      zIndex={1000}
      placeholder={
        viewCategoriesFor === 'both'
          ? 'All'
          : viewCategoriesFor === 'income'
          ? 'Income'
          : 'Expense'
      }
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
