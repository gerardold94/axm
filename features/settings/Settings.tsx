import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useDispatch, useSelector } from 'react-redux';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, Text } from 'react-native-paper';
import { logout } from '@/reducers/userSlice';
import { SettingsScreen, SettingsData, Chevron } from "react-native-settings-screen";
import { useNavigation } from '@react-navigation/native';

const Hero = ({user, navigation}:any) => (
  <TouchableOpacity style={styles.heroContainer} onPress={() => navigation.navigate('Profile')}>
    <Image source={user.avatar || require('@assets/images/suitcase.png')} style={styles.heroImage} />
    <View style={{ flex: 1 }}>
      <Text style={styles.heroTitle}>{`${user.firstname} ${user.lastname}`}</Text>
      <Text style={styles.heroSubtitle}>{user.email}</Text>
    </View>
    <Chevron />
  </TouchableOpacity>
)

const Settings = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = () => {
    dispatch(logout());
  };

  const user = useSelector(state => state.user);

  const data: SettingsData = [
    { type: 'CUSTOM_VIEW', key: 'hero', render: () => <Hero user={user} navigation={navigation} /> },
    {
      type: 'SECTION',
      header: 'General'.toUpperCase(),
      rows: [
        {
          title: 'Cambiar contraseña',
          showDisclosureIndicator: true
        },
        {
          title: '',
        },
        {
          title: 'Cerrar Sesión',
          showDisclosureIndicator: false,
          renderAccessory: () => <MaterialCommunityIcons name="logout" color={Colors.red400} size={24} />,
          onPress: () => handleLogout(),
          titleStyle: {
            color: Colors.red400,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center'
          },
        },
      ]
    }
  ]

  return <SettingsScreen data={data} style={{ paddingBottom: 8 }} />
}

const styles = StyleSheet.create({
  heroContainer: {
    marginBottom: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    flexDirection: 'row',
  },
  heroImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'black',
    marginHorizontal: 20,
  },
  heroTitle: {
    color: 'black',
    fontSize: 24,
  },
  heroSubtitle: {
    color: '#999',
    fontSize: 14,
  },
})

export default Settings;
