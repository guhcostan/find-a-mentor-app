import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ScreenContainer, Selector, Subtitle } from '../global-components';
import { getMentors, getProfessions } from '../util/db';
import MentorItem from '../components/MentorItem';
import { pickerSelectStyles } from './Mentor';

const Mentored: React.FC = () => {
  const [mentors, setMentors] = useState([]);
  const [profession, setProfession] = useState();
  const [loading, setLoading] = useState(false);
  const [professions, setProfessions] = useState([]);

  const getProfessionsDB = async () => {
    const professionsDB = await getProfessions();
    setProfessions(professionsDB);
  };

  const updateMentors = async () => {
    setLoading(true);
    const mentorsDB = await getMentors(profession);
    setMentors(mentorsDB);
    setLoading(false);
  };
  useEffect(() => {
    updateMentors();
    getProfessionsDB();
  }, []);
  return (
    <ScreenContainer>
      {professions.length > 0 && (
        <RNPickerSelect
          onValueChange={newProfession => {
            setProfession(newProfession);
          }}
          onDonePress={() => updateMentors()}
          items={professions}
          placeholder={{ label: 'Selecione sua profissão' }}
          style={pickerSelectStyles}
        />
      )}
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
