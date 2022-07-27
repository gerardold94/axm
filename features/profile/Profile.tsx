import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Styles } from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { Appbar, Button, Colors, HelperText, Surface, TextInput } from 'react-native-paper';
import DateField from 'react-native-datefield';
import { DateTime } from "luxon";
import { Formik, FormikValues, FormikProps } from "formik";
import { ProfileSchema } from "@components/register/ValidationSchema";
import { saveProfile } from '@/reducers/userSlice';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const _goBack = () => navigation.goBack();

  const date = () => {
    const lDate = DateTime.fromFormat(user.dob, 'dd/MM/yyyy');

    return lDate ? lDate.toJSDate() : undefined;
  }

  return (
    <>
      <Appbar.Header style={{ backgroundColor: Colors.blueGrey900 }}>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Editar perfil" subtitle="Datos personales" />
      </Appbar.Header>

      <Surface style={Styles.surface}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={
              {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                city: user.city,
                state: user.state,
                country: user.country,
                dob: date()
              }
            }
            onSubmit={(values) => {
              dispatch(saveProfile(values));
            }}
            validationSchema={ProfileSchema}>
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              errors,
              values,
            }: FormikProps<FormikValues>) => (
              <>
                {user.isLoading &&
                  <View style={Styles.loading}>
                    <ActivityIndicator size='large' />
                  </View>
                }
                <TextInput
                  label="Email"
                  value={values.email}
                  editable={false}
                  mode="outlined"
                  left={<TextInput.Icon name="email-outline" />}
                  textContentType="emailAddress"
                  style={Styles.input}
                />
                <TextInput
                  label="Nombre"
                  mode="outlined"
                  textContentType="givenName"
                  value={values.firstname}
                  left={<TextInput.Icon name="account-outline" />}
                  onChangeText={handleChange('firstname')}
                  error={errors.hasOwnProperty('firstname')}
                  style={Styles.input}
                />
                {errors.hasOwnProperty('firstname') && <HelperText
                  type="error"
                  visible={errors.hasOwnProperty('firstname')}>
                  Disculpa, tu nombre es requerido.
                </HelperText>}
                <TextInput
                  label="Apellidos"
                  mode="outlined"
                  textContentType="familyName"
                  left={<TextInput.Icon name="account-outline" />}
                  onChangeText={handleChange('lastname')}
                  value={values.lastname}
                  style={Styles.input}
                />
                {errors.hasOwnProperty('lastname') && <HelperText
                  type="error"
                  visible={errors.hasOwnProperty('lastname')}>
                  Disculpa, tu apellido es requerido.
                </HelperText>}
                <TextInput
                  label="Ciudad"
                  mode="outlined"
                  onChangeText={handleChange('city')}
                  textContentType="addressCity"
                  left={<TextInput.Icon name="city-variant-outline" />}
                  value={values.city}
                  style={Styles.input}
                />
                <TextInput
                  label="Estado"
                  mode="outlined"
                  onChangeText={handleChange('state')}
                  left={<TextInput.Icon name="home-city-outline" />}
                  value={values.state}
                  style={Styles.input}
                />
                <TextInput
                  label="Country"
                  mode="outlined"
                  left={<TextInput.Icon name="compass-outline" />}
                  onChangeText={handleChange('country')}
                  value={values.country}
                  style={Styles.input}
                />
                <Text style={{ fontSize: 16, marginVertical: 8 }}>
                  Fecha de nacimiento
                </Text>
                <DateField
                  labelDate="Día"
                  labelMonth="Mes"
                  labelYear="Año"
                  defaultValue={values.dob}
                  styleInput={Styles.inputBorder}
                  onSubmit={(value) => setFieldValue('dob', DateTime.fromJSDate(value).toFormat('dd/MM/yyyy'))}
                />
                {errors.hasOwnProperty('dob') && <HelperText
                  type="error"
                  visible={errors.hasOwnProperty('dob')}>
                  Disculpa, debes ingresar una fecha de nacimiento válida {JSON.stringify(errors)}
                </HelperText>}
                <Button
                  style={Styles.submit}
                  contentStyle={Styles.submitContent}
                  mode="contained"
                  onPress={handleSubmit}>
                  Actualizar Perfil
                </Button>
              </>)}
          </Formik>
        </ScrollView>
      </Surface>
    </>
  )
}

export default Profile;
