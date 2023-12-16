import {View, Text, TextInput, TouchableNativeFeedback} from 'react-native';
import {useState, useEffect} from 'react';
import Check from 'react-native-vector-icons/FontAwesome';
import Edit from 'react-native-vector-icons/Entypo';
import {useSelector, useDispatch} from 'react-redux';
import {saveUserName} from '../../store/userSlice';
import colors from '../../colors';

export default function UserName() {
  const theme = useSelector(state => state.theme.theme);
  const userName = useSelector(state => state.user.userName);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [userInput, setUserInput] = useState('');
  const alphabetRegex = /^[a-zA-Z ]*$/;

  const submitUserName = () => {
    if (
      alphabetRegex.test(userInput) &&
      userInput.length >= 4 &&
      userInput.length <= 32
    ) {
      dispatch(saveUserName(userInput));
    } else {
      dispatch(saveUserName(userName));
      setUserInput(userName);
    }
    setEditMode(false);
  };

  useEffect(() => {
    setUserInput(userName);
  }, []);

  return (
    <View className="w-4/5 h-28 mx-auto">
      <View className="flex flex-row items-center justify-center">
        <TextInput
          onEndEditing={submitUserName}
          returnKeyType="done"
          readOnly={editMode ? false : true}
          value={userInput}
          onChangeText={newText => setUserInput(newText)}
          style={{
            textAlign: editMode ? 'left' : 'center',
            fontSize: editMode ? 18 : 28,
            color: editMode
              ? theme === 'light'
                ? colors.light.text
                : colors.dark.text
              : theme === 'light'
              ? colors.light.primary
              : colors.dark.primary,
            borderColor: editMode
              ? theme === 'light'
                ? colors.light.primary
                : colors.dark.primary
              : theme === 'light'
              ? colors.light.background
              : colors.dark.background,
          }}
          className={`w-full pl-5 ${
            editMode ? 'pr-10' : 'pr-5'
          } font-extrabold rounded-lg border-4`}
        />
        <TouchableNativeFeedback onPress={() => setEditMode(true)}>
          <View
            style={{display: editMode ? 'none' : 'flex'}}
            className="absolute -right-2 p-2 bg-[#2e7d3240] rounded-full">
            <Edit name="edit" size={20} color="#2e7d32" />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={submitUserName}>
          <View
            style={{
              display:
                editMode &&
                alphabetRegex.test(userInput) &&
                userInput.length >= 4 &&
                userInput.length <= 32
                  ? 'flex'
                  : 'none',
            }}
            className="absolute right-3">
            <Check name="check" size={20} color="#2e7d32" />
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={{opacity: editMode ? 1 : 0}} className="flex flex-row my-2">
        <ValidationLabel
          title="Only Alphabets: 4-16"
          success={
            alphabetRegex.test(userInput) &&
            userInput.length >= 4 &&
            userInput.length <= 16
              ? true
              : false
          }
        />
        <ValidationLabel
          title="Required"
          success={userInput !== '' ? true : false}
        />
      </View>
    </View>
  );
}

const ValidationLabel = ({title, success}) => {
  return (
    <View
      style={{
        borderColor: success === true ? '#22C55E' : '#969696',
        backgroundColor: success === true ? '#BBF7D0' : '#F0F0F0',
      }}
      className="py-[1] px-2 mr-2 border-2 rounded-full flex flex-row items-center">
      <Check
        name="check"
        size={16}
        color={success === true ? '#22C55E' : '#969696'}
      />
      <Text
        style={{color: success === true ? '#22C55E' : '#969696'}}
        className="font-extrabold ml-1">
        {title}
      </Text>
    </View>
  );
};
