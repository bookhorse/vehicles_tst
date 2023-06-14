import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { resources } from '@/i18n';
import useStore from '@/store';

const items = Object.keys(resources).map(key => ({
  label: resources[key as keyof typeof resources].label,
  value: key
}));

const defaultLang = 'en';

const SettingsScreen = () =>  {
  const { t } = useTranslation();
  const [lang, setLang] = useStore(store => [store.lang, store.setLang]);
  const [open, setOpen] = useState(false);

  const handleSetValue = (value: string) => {
    setLang(value);
  };

  return (
    <View style={styles.container}>
      <Text>{t('Pick language')}</Text>
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        value={lang || defaultLang}
        items={items}
        setValue={(cb) => handleSetValue(cb(lang))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 8
  }
});


export default SettingsScreen;

