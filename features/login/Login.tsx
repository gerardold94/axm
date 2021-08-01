import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import Colors from '@common/colors';
import {TextInput, Button, Title} from 'react-native-paper';
import Divider from 'react-native-divider';
import {SocialLogin} from '@common/components';
import {useDispatch, useSelector} from 'react-redux';
import {login, setUser, getUser} from '@/reducers/userSlice';

const image = require('@assets/images/login.jpg');
const logo = require('@assets/images/logo.png');

const Login = ({navigation}) => {
  StatusBar.setBarStyle('light-content', true);

  const [email, setEmail] = useState('gerardolopezduenas@gmail.com');
  const [password, setPassword] = useState('12345678');
  const isLogged = useSelector(state => state.user.isLogged);
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      dispatch(setUser(user));
      navigation.navigate('HomeScreen');
    }
  }, [isLogged, navigation]);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.topImage}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.overlay} />
        </View>
        <View style={styles.login}>
          <View>
            <Title>Bienvenido {isLogged ? 'yes' : 'false'}</Title>
            <TextInput
              label="Email"
              mode="outlined"
              value={email}
              style={styles.input}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              label="Contraseña"
              mode="outlined"
              value={password}
              style={styles.input}
              onChangeText={text => setPassword(text)}
            />
            <Text style={styles.forgot}>Olvidaste tu contraseña?</Text>
            <Button
              mode="contained"
              style={styles.loginButton}
              contentStyle={styles.loginButtonContent}
              onPress={() => dispatch(login({email, password}))}>
              Login
            </Button>
            <Divider orientation="center" color={Colors.DarkGrey}>
              o inicia sesión con
            </Divider>
            <SocialLogin />
          </View>
          <View style={styles.footer}>
            <Text>¿No tienes una cuenta? Regístrate aquí.</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: '45%',
  },
  login: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    flex: 3,
    justifyContent: 'space-between',
    padding: 32,
  },
  logo: {
    height: '50%',
    width: '50%',
    zIndex: 2,
  },
  topImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'black',
    flex: 1,
    height: '100%',
    left: 0,
    opacity: 0.4,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  input: {
    marginVertical: 8,
    marginBottom: 8,
  },
  forgot: {
    color: Colors.DarkGrey,
    fontWeight: '600',
    textAlign: 'right',
  },
  loginButton: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  loginButtonContent: {
    paddingVertical: 8,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Login;
