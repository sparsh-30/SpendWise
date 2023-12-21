import {View, Text, Image, TextInput, StatusBar, Keyboard} from 'react-native';
import {useState, useEffect} from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Onboarding1 from './../../assets/onboarding1.png';
import Onboarding2 from './../../assets/onboarding2.png';
import Onboarding3 from './../../assets/onboarding3.png';
import Check from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {saveUserName} from '../store/userSlice';
import colors from '../colors';
import MyText from '../MyText';

export default function OnboardingScreens({setShowOnboarding}) {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const alphabetRegex = /^[a-zA-Z ]*$/;

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const handleUserNameSubmit = () => {
    dispatch(saveUserName(userName));
    setShowOnboarding(false);
  };

  return (
    <View className="flex-1">
      <StatusBar
        backgroundColor={
          theme === 'light' ? colors.light.background : colors.dark.background
        }
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <Onboarding
        onDone={handleUserNameSubmit}
        showSkip={false}
        showDone={
          alphabetRegex.test(userName) &&
          userName.length >= 4 &&
          userName.length <= 16
            ? true
            : false
        }
        containerStyles={{justifyContent: 'start', paddingTop: 100}}
        imageContainerStyles={{
          paddingBottom: 20,
          display: keyboardVisible ? 'none' : 'flex',
        }}
        titleStyles={{
          color: theme === 'light' ? colors.light.primary : colors.dark.primary,
          fontWeight: 800,
          fontSize: 34,
        }}
        subTitleStyles={{
          color: theme === 'light' ? colors.light.text : colors.dark.text,
          fontWeight: 500,
        }}
        bottomBarColor={
          theme === 'light' ? colors.light.primary : colors.dark.primary
        }
        bottomBarHeight={70}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dot}
        pages={[
          {
            backgroundColor:
              theme === 'light'
                ? colors.light.background
                : colors.dark.background,
            image: (
              <Image style={{width: 250, height: 250}} source={Onboarding1} />
            ),
            title: 'SpendWise',
            subtitle: 'Navigate Your Finances With Ease !',
          },
          {
            backgroundColor:
              theme === 'light'
                ? colors.light.background
                : colors.dark.background,
            image: (
              <Image style={{width: 250, height: 250}} source={Onboarding2} />
            ),
            title: 'About SpendWise',
            subtitle:
              'Effortlessly track expenses, manage income, and achieve financial freedom with intuitive features designed to simplify your financial journey.',
            subTitleStyles: {marginHorizontal: 30},
          },
          {
            backgroundColor:
              theme === 'light'
                ? colors.light.background
                : colors.dark.background,
            image: (
              <Image style={{width: 250, height: 250}} source={Onboarding3} />
            ),
            title: 'Username',
            subtitle: (
              <UsernameInput
                theme={theme}
                userName={userName}
                setUserName={setUserName}
                alphabetRegex={alphabetRegex}
              />
            ),
          },
        ]}
      />
    </View>
  );
}

const UsernameInput = ({theme, userName, setUserName, alphabetRegex}) => {
  return (
    <View className="w-5/6">
      <MyText>Please enter your username to proceed further:</MyText>
      <TextInput
        onChangeText={newText => setUserName(newText)}
        style={{
          color: theme === 'light' ? colors.light.text : colors.dark.text,
          borderColor:
            theme === 'light' ? colors.light.primary : colors.dark.primary,
        }}
        className="h-12 px-4 text-white font-extrabold mt-1 rounded-md border-4"
        placeholder="Transaction Title"
        placeholderTextColor={
          theme === 'light' ? colors.light.text : colors.dark.text
        }
        selectionColor={
          theme === 'light' ? colors.light.text : colors.dark.text
        }
      />
      <View className="flex flex-row my-2">
        <ValidationLabel
          title="Required"
          success={userName === '' ? false : true}
        />
        <ValidationLabel
          title="Alphabets: 4-16"
          success={
            alphabetRegex.test(userName) &&
            userName.length >= 4 &&
            userName.length <= 16
              ? true
              : false
          }
        />
      </View>
    </View>
  );
};

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

const Next = ({...props}) => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <Text
      {...props}
      style={{
        color: theme === 'light' ? colors.light.primary : colors.dark.primary,
      }}
      className="py-3 px-5 mr-3 bg-white rounded-xl text-md font-extrabold">
      NEXT
    </Text>
  );
};

const Done = ({...props}) => {
  const theme = useSelector(state => state.theme.theme);
  return (
    <Text
      {...props}
      style={{
        color: theme === 'light' ? colors.light.primary : colors.dark.primary,
      }}
      className="py-3 px-5 mr-3 bg-white rounded-xl font-extrabold">
      FINISH
    </Text>
  );
};

const Dot = ({selected}) => {
  return (
    <View
      style={{backgroundColor: selected ? '#fff' : 'rgba(255, 255, 255, 0.5)'}}
      className="w-2 h-2 rounded-full mx-[2]"
    />
  );
};
