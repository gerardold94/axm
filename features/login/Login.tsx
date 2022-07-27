import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import Colors from '@common/colors';
import {
  TextInput,
  Button,
  Title,
  ActivityIndicator,
  Colors as PaperColors,
} from 'react-native-paper';
import Divider from 'react-native-divider';
import {SocialLogin} from '@common/components';
import {useDispatch, useSelector} from 'react-redux';
import {login, setError} from '@/reducers/userSlice';
import {Styles} from './Styles';
import FlashMessage, {showMessage} from 'react-native-flash-message';

const image = require('@assets/images/login.jpg');
const logo = require('@assets/images/logo.png');

const Login = ({navigation}: any) => {
  StatusBar.setBarStyle('light-content');
  StatusBar.setHidden(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoading = useSelector(state => state.user.isLoading);
  const isError = useSelector(state => state.user.isError);
  const errorMessage = useSelector(state => state.user.errorMessage);
  const passwordRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      showMessage({
        message: 'Algo salió mal 😔',
        description: errorMessage,
        type: 'danger',
      });
      dispatch(setError({errorMessage: '', isError: false}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, errorMessage]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator animating={true} color={PaperColors.red800} />
      </View>
    );
  }

  return (
    <View style={Styles.mainContainer}>
      <ImageBackground source={image} resizeMode="cover" style={Styles.image}>
        <View style={Styles.topImage}>
          <Image source={logo} style={Styles.logo} />
          <View style={Styles.overlay} />
        </View>
        <View style={Styles.login}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Title>Bienvenido</Title>
              <TextInput
                label="Email"
                mode="outlined"
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                value={email}
                style={Styles.input}
                blurOnSubmit={false}
                onChangeText={text => setEmail(text)}
                onSubmitEditing={() => {
                  passwordRef.current.focus();
                }}
              />
              <TextInput
                label="Contraseña"
                mode="outlined"
                textContentType="password"
                secureTextEntry={true}
                value={password}
                style={Styles.input}
                ref={passwordRef}
                onChangeText={text => setPassword(text)}
              />
              <Text style={Styles.forgot}>Olvidaste tu contraseña?</Text>
              <Button
                mode="contained"
                style={Styles.loginButton}
                contentStyle={Styles.loginButtonContent}
                loading={isLoading}
                onPress={() => dispatch(login({email, password}))}>
                Login
              </Button>
              <Divider orientation="center" color={Colors.DarkGrey}>
                o inicia sesión con
              </Divider>
              <SocialLogin />
            </View>
            <View style={Styles.footer}>
              <Text>¿No tienes una cuenta?</Text>
              <Text
                style={Styles.registerLink}
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                Regístrate aquí {'>'}
              </Text>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <FlashMessage
        position="top"
        floating={true}
        icon="auto"
        duration={2000}
      />
    </View>
  );
};

export default Login;
