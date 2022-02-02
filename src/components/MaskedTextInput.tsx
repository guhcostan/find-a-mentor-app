import React from 'react';
import { Text, View } from 'react-native';
import { useField } from 'formik';
import { MaskedTextInput, TextInput } from '../global-components';

const MaskTextInputValidation: React.FC = ({ style, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <View style={style}>
      <MaskedTextInput
        onChangeText={field.onChange(field.name)}
        onBlur={field.onBlur(field.name)}
        value={field.value}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Text style={{ color: 'white' }}>{meta.error}</Text>
      ) : null}
    </View>
  );
};

export default MaskTextInputValidation;
