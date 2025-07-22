import React from 'react';
import useFetch from '../hooks/useFetch';
const MFCharacters: React.FC<{
    data: unknown[] | null,
    callback: (data: unknown) => void
}> = React.lazy(() => import('mf_characters/CharacterList'));

const CharacterDetail: React.FC<{
    character: unknown | null,
    callback: (data: unknown) => void
}> = React.lazy(() => import('mf_character_detail/CharacterDetail'));

const CharacterWrapper: React.FC = () => {
  const [ selectedCharacter, setSelectedCharacter ] = React.useState<unknown | null>(null);
  const { loading, data, error } = useFetch('/character');
  const [isDetailVisible, setIsDetailVisible] = React.useState(false);

  const callback = (data: unknown) => {
    setSelectedCharacter(data);
    setIsDetailVisible(true);
  };

  if (loading) { return <>Loading ......</>; }

  if (!!error) { return <>Empty</>}

  if (selectedCharacter && isDetailVisible) {
    return (<CharacterDetail character={ selectedCharacter } callback={callback}/>);
  }

  return (<MFCharacters data={ data } callback={callback}/>)
};

export default CharacterWrapper;
