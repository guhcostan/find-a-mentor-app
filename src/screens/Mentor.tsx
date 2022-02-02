import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import { ScreenContainer, TextInput, Title } from '../global-components';
import { Button } from '../components/Button';
import { putMentor } from '../util/db';

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
          initialValues={{ email: '' }}
          onSubmit={values => putMentor(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                style={{ marginBottom: 24 }}
                placeholder="Nome ou apelido"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <TextInput
                style={{ marginBottom: 24 }}
                placeholder="Descrição"
                multiline
                numberOfLines={4}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
              />
              <TextInput
                style={{ marginBottom: 24 }}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                style={{ marginBottom: 24 }}
                placeholder="Whatsapp"
                onChangeText={handleChange('whatsapp')}
                onBlur={handleBlur('whatsapp')}
                value={values.whatsapp}
              />
              <TextInput
                style={{ marginBottom: 24 }}
                placeholder="Usuário no Linkedin"
                onChangeText={handleChange('linkedin')}
                onBlur={handleBlur('linkedin')}
                value={values.linkedin}
              />
              <RNPickerSelect
                onValueChange={handleChange('profession')}
                items={[
                  { label: 'Desenvolvedor Frontend', value: 'web-developer' },
                  {
                    label: 'Desenvolvedor Backend',
                    value: 'backend-developer',
                  },
                  { label: 'Desenvolvedor Mobile', value: 'mobile-developer' },
                ]}
                placeholder={{ label: 'Selecione sua profissão' }}
                style={pickerSelectStyles}
              />
              <RNPickerSelect
                onValueChange={handleChange('years')}
                items={[
                  { label: '1-2', value: 'novato' },
                  { label: '3-6', value: 'intermediario' },
                  { label: '6+', value: 'experiente' },
                ]}
                placeholder={{ label: 'Anos de experiencia' }}
                style={pickerSelectStyles}
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
