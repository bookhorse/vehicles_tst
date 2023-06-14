import {Modal as NativeModal, StyleSheet, Button, View} from 'react-native';
import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: (accepted: boolean) => void;
}

const Modal = ({children, open, onClose}: Props) => {
  const { t } = useTranslation();

  return (
    <NativeModal
      animationType="fade"
      transparent
      visible={open}
      onRequestClose={() => {
        onClose(false);
      }}
    >
      <View style={styles.centered}>
        <View style={styles.modal}>
          <View style={styles.content}>
            {children}
          </View>
          <View style={styles.stretch}>
            <Button
              title={t('Accept')}
              onPress={() => onClose(true)}
            />
          </View>
        </View>
      </View>
    </NativeModal>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  stretch: {
    flexShrink: 1
  },
  modal: {
    flexDirection: 'column',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    marginBottom: 36
  }
});

export default Modal;
