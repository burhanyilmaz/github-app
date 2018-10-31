import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from '@shoutem/ui';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './stylesheet';

const { userSearchBar } = styles;
export default props => {
  const { iconPress, onSearchChangeText, value } = props;

  return (
    <View>
      <TextInput
        placeholder={'Search users...'}
        onChangeText={onSearchChangeText}
        value={value}
      />
      <TouchableOpacity onPress={iconPress} style={userSearchBar.searchBox._}>
        <Icon name="github-circle" size={28} />
      </TouchableOpacity>
    </View>
  );
};
