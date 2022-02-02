import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import * as Yup from 'yup';
import {
  MaskedTextInput,
  ScreenContainer,
  TextInput,
  Title,
} from '../global-components';
import { Button } from '../components/Button';
import { putMentor } from '../util/db';
import TextInputValidation from '../components/TextInput';
import Selector from '../components/Selector';

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    padding: 10,
    borderRadius: 4,
    color: 'black',
    backgroundColor: 'white',
    paddingRight: 30,
    marginBottom: 24,
  },
  inputAndroid: {
    fontSize: 16,
    padding: 10,
    borderRadius: 4,
    color: 'black',
    backgroundColor: 'white',
    paddingRight: 30,
    marginBottom: 24,
  },
});
const Mentor: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScreenContainer>
        <Title style={{ marginBottom: 48 }}>Cadastre-se como mentor</Title>
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .min(5, 'Muito pequeno')
              .max(50, 'Muito grande')
              .required('Campo obrigatório'),
            email: Yup.string()
              .email('Email inválido')
              .required('Campo obrigatório'),
            whatsapp: Yup.number()
              .min(9, 'Muito pequeno')
              .max(12, 'Muito grande')
              .required('Campo obrigatório'),
            linkedin: Yup.string().required('Campo obrigatório'),
            profession: Yup.string().required('Campo obrigatório'),
            years: Yup.string().required('Campo obrigatório'),
          })}
          onSubmit={values => putMentor(values)}
        >
          {({ handleSubmit }) => (
            <View>
              <TextInputValidation
                name="name"
                style={{ marginBottom: 24 }}
                placeholder="Nome ou apelido"
              />
              <TextInput
                style={{ marginBottom: 24 }}
                placeholder="Email"
                name="email"
              />
              <MaskedTextInput
                style={{ marginBottom: 24 }}
                placeholder="Whatsapp"
                type="cel-phone"
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                name="whatsapp"
              />
              <TextInput
                style={{ marginBottom: 24 }}
                placeholder="Usuário no Linkedin"
                name="linkedin"
              />
              <Selector
                items={[
                  { label: 'Desenvolvedor Frontend', value: 'web-developer' },
                  {
                    label: 'Desenvolvedor Backend',
                    value: 'backend-developer',
                  },
                  { label: 'Desenvolvedor Mobile', value: 'mobile-developer' },
                ]}
                name="profession"
                placeholder={{ label: 'Selecione sua profissão' }}
              />
              <Selector
                name="years"
                items={[
                  { label: '1-2', value: 'novato' },
                  { label: '3-6', value: 'intermediario' },
                  { label: '6+', value: 'experiente' },
                ]}
                placeholder={{ label: 'Anos de experiencia' }}
              />
              <Button style={{ marginTop: 24 }} onPress={handleSubmit}>
                Enviar
              </Button>
            </View>
          )}
        </Formik>
      </ScreenContainer>
    </ScrollView>
  );
};

export default Mentor;
