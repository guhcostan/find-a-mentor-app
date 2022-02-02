import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ScreenContainer, Selector } from '../global-components';
import { getMentors } from '../util/db';
import MentorItem from '../components/MentorItem';
import { pickerSelectStyles } from './Mentor';

const Mentored: React.FC = () => {
  const [mentors, setMentors] = useState([]);
  const [profession, setProfession] = useState();
  const get = async () => {
    const mentorsDB = await getMentors(profession);
    setMentors(mentorsDB);
  };
  useEffect(() => {
    get();
  }, []);
  useEffect(() => {
    get();
  }, [profession]);
  return (
    <ScreenContainer>
      <RNPickerSelect
        onValueChange={newProfession => {
          setProfession(newProfession);
        }}
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
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{ height: 0, marginVertical: 10 }} />
        )}
        data={mentors}
        renderItem={({ item }) => <MentorItem mentor={item} />}
      />
    </ScreenContainer>
  );
};

export default Mentored;
