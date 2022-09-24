import { ImageBackground } from 'react-native';
import { styles } from './styles';
import backgoundImg from '../../assets/background-galaxy.png';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground 
      source={backgoundImg}
      defaultSource={backgoundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}