import {ScrollView} from 'react-native';
import ProfilePicture from './../components/ProfileScreen/ProfilePicture';
import UserName from '../components/ProfileScreen/UserName';
import DarkMode from '../components/ProfileScreen/DarkMode';
import DeleteTransactions from '../components/ProfileScreen/DeleteTransactions';
import {useSelector} from 'react-redux';
import colors from '../colors';

export default function ProfileScreen() {
  const theme = useSelector(state => state.theme.theme);
  return (
    <ScrollView
      style={{
        backgroundColor:
          theme === 'light' ? colors.light.background : colors.dark.background,
      }}
      className="bg-white dark:bg-[#302D43] flex flex-1">
      <ProfilePicture />
      <UserName />
      <DarkMode />
      <DeleteTransactions />
    </ScrollView>
  );
}
