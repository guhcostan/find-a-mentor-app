import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ScreenContainer, Selector, Subtitle } from '../global-components';
import { getMentors } from '../util/db';
import MentorItem from '../components/MentorItem';
import { pickerSelectStyles } from './Mentor';

const Mentored: React.FC = () => {
  const [mentors, setMentors] = useState([]);
  const [profession, setProfession] = useState();
  const [loading, setLoading] = useState(false);
  const updateMentors = async () => {
    setLoading(true);
    const mentorsDB = await getMentors(profession);
    setMentors(mentorsDB);
    setLoading(false);
  };
  useEffect(() => {
    updateMentors();
  }, []);
  return (
    <ScreenContainer>
      <RNPickerSelect
        onValueChange={newProfession => {
          setProfession(newProfession);
        }}
        onDonePress={() => updateMentors()}
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
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {!loading ? (
          mentors.length > 0 ? (
            <FlatList
              ItemSeparatorComponent={() => (
                <View style={{ height: 0, marginVertical: 10 }} />
              )}
              data={mentors}
              renderItem={({ item }) => <MentorItem mentor={item} />}
            />
          ) : (
            <Subtitle style={{ textAlign: 'center' }}>
              Não temos mentores para essa profissão ainda :(
            </Subtitle>
          )
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </ScreenContainer>
  );
};

export default Mentored;
