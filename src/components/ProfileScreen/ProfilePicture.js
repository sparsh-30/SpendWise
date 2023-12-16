import {View, Image, TouchableNativeFeedback} from 'react-native';
import {useEffect, useState} from 'react';
import PlaceholderImage from './../../../assets/placeholder.png';
import Edit from 'react-native-vector-icons/Entypo';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {saverUserImage} from '../../store/userSlice';

export default function ProfilePicture() {
  const userImage = useSelector(state => state.user.userImage);
  const dispatch = useDispatch();
  const [imageUri, setImageUri] = useState('');

  const handleChangePicture = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    const response = await launchImageLibrary(options);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      const uri = response.assets[0].uri;
      dispatch(saverUserImage(uri));
      setImageUri(uri);
    }
  };

  const handleDeletePicture = () => {
    dispatch(saverUserImage(''));
    setImageUri('');
  };

  useEffect(() => {
    setImageUri(userImage);
  }, []);

  return (
    <View className="my-4 flex flex-row justify-center items-center">
      <TouchableNativeFeedback onPress={handleChangePicture}>
        <View className="p-2 mr-4 bg-[#2e7d3240] rounded-full">
          <Edit name="edit" color="#2e7d32" size={20} />
        </View>
      </TouchableNativeFeedback>
      <Image
        className="w-44 h-44 rounded-full"
        source={
          imageUri === null || imageUri === ''
            ? PlaceholderImage
            : {uri: imageUri}
        }
      />
      <TouchableNativeFeedback onPress={handleDeletePicture}>
        <View className="p-2 ml-4 bg-[#d32f2f40] rounded-full">
          <Delete name="delete" color="#d32f2f" size={20} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
