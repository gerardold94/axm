import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Image, ScrollView} from 'react-native';
import {TextInput, Button, HelperText} from 'react-native-paper';
import {Formik, FormikValues, FormikProps} from 'formik';
import {saveUser, setError} from '@/reducers/userSlice';
import {Styles} from './Styles';
import {RegisterSchema} from './ValidationSchema';
import FlashMessage, {showMessage} from 'react-native-flash-message';

const Register = () => {
  const image = require('@assets/images/travel.png');
  const dispatch = useDispatch();
  const isError = useSelector(state => state.user.isError);
  const errorMessage = useSelector(state => state.user.errorMessage);

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

  return (
    <ScrollView style={Styles.container}>
      <Formik
        initialValues={{email: '', firstname: '', lastname: '', password: ''}}
        onSubmit={(values, actions) => {
          actions.resetForm();
          dispatch(saveUser(values));
        }}
        validationSchema={RegisterSchema}>
        {({
          handleChange,
          handleSubmit,
          errors,
          values,
        }: FormikProps<FormikValues>) => (
          <View style={Styles.wrapper}>
            <Image source={image} style={Styles.image} resizeMode="cover" />
            <Text style={Styles.cta}>
              Crea una cuenta para continuar explorando y conociendo
              sorprendentes lugares alrededor del mundo.
            </Text>
            <View style={Styles.input}>
              <TextInput
                label="Nombre"
                value={values.firstname}
                textContentType="givenName"
                left={<TextInput.Icon name="account-outline" />}
                onChangeText={handleChange('firstname')}
                error={errors.hasOwnProperty('firstname')}
              />
              <HelperText
                type="error"
                visible={errors.hasOwnProperty('firstname')}>
                Disculpa, tu nombre es requerido.
              </HelperText>
            </View>
            <View style={Styles.input}>
              <TextInput
                label="Apellido(s)"
                value={values.lastname}
                textContentType="familyName"
                left={<TextInput.Icon name="account-outline" />}
                onChangeText={handleChange('lastname')}
                error={errors.hasOwnProperty('lastname')}
              />
              <HelperText
                type="error"
                visible={errors.hasOwnProperty('lastname')}>
                Disculpa, tu apellido es requerido.
              </HelperText>
            </View>
            <View style={Styles.input}>
              <TextInput
                label="Email"
                value={values.email}
                autoCapitalize="none"
                textContentType="emailAddress"
                left={<TextInput.Icon name="email-outline" />}
                onChangeText={handleChange('email')}
                error={errors.hasOwnProperty('email')}
              />
              <HelperText type="error" visible={errors.hasOwnProperty('email')}>
                Tu dirección de email debe ser valida.
              </HelperText>
            </View>
            <View style={Styles.input}>
              <TextInput
                label="Contraseña"
                value={values.password}
                secureTextEntry
                textContentType="password"
                left={<TextInput.Icon name="lock-outline" />}
                onChangeText={handleChange('password')}
                error={errors.hasOwnProperty('password')}
              />
              <HelperText
                type="error"
                visible={errors.hasOwnProperty('password')}>
                Tu contraseña debe tener al menos 8 carácteres.
              </HelperText>
            </View>
            <Button
              style={Styles.submit}
              contentStyle={Styles.submitContent}
              mode="contained"
              onPress={handleSubmit}>
              Registrarme
            </Button>
          </View>
        )}
      </Formik>
      <FlashMessage
        position="top"
        statusBarHeight={0}
        icon="auto"
        duration={2000}
      />
    </ScrollView>
  );
};

export default Register;
