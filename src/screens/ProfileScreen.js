import {View} from 'react-native';
import ProfilePicture from './../components/ProfileScreen/ProfilePicture';
import { useSelector } from 'react-redux';
import colors from '../colors';

export default function ProfileScreen() {
  const theme=useSelector((state)=> state.theme.theme)
  return (
    <View style={{backgroundColor:theme==='light'?colors.light.background:colors.dark.background}} className="bg-white dark:bg-[#302D43] flex flex-1">
      <ProfilePicture />
    </View>
  );
}
