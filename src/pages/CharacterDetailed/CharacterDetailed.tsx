import { FC, memo } from 'react';
import { Detailed } from '../Detailed/Detailed';
import characters from '../../data/characters.json';

export const CharacterDetailedComponent: FC = () => <Detailed items={characters} />;
export const CharacterDetailed = memo(CharacterDetailedComponent);
