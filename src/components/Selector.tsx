import React from 'react';
import { Text, View } from 'react-native';
import { useField } from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import { pickerSelectStyles } from '../screens/Mentor';

const Selector: React.FC = ({ style, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <View style={style}>
      <RNPickerSelect
        onValueChange={field.onChange(field.name)}
        onBlur={field.onBlur(field.name)}
        value={field.value}
        style={pickerSelectStyles}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Text style={{ color: 'white' }}>{meta.error}</Text>
      ) : null}
    </View>
  );
};

export default Selector;
