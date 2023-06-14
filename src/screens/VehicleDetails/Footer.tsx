import { View, Button } from 'react-native';
import styles from './styles';
import { makeCall, sendWAMessage } from '@/utils';
import { useTranslation } from 'react-i18next';

interface Props {
  telephone: string;
}

const Footer = ({ telephone }: Props) => {
  const { t } = useTranslation();

  const handleCall = () => {
    makeCall(telephone);
  };

  const handleMessage = () => {
    sendWAMessage(telephone, t('WA_TEMPLATE'));
  };

  return (
    <View style={styles.footer}>
      <View style={styles.flex}>
        <Button title={t('Call')} onPress={handleCall} />
      </View>
      <View style={styles.flex}>
        <Button title={t('Message')} onPress={handleMessage} />
      </View>
    </View>
  );
};


export default Footer;
