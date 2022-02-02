import React from 'react';
import { Text, View } from 'react-native';
import { useField } from 'formik';
import { TextInput } from '../global-components';

const TextInputValidation: React.FC = ({ style, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <View style={style}>
      <TextInput
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

export default TextInputValidation;
