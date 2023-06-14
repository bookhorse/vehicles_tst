import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Modal from '@/components/Modal';
import useStore from '@/store';
import { VehicleCategoryArray } from '@/types/Vehicle';
import { useTranslation } from 'react-i18next';
import styles from '../styles';
import CheckBoxText from './CheckboxText';

const FilterModal = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useStore(store => [store.modal, store.setModal]);
  const [filter, setFilter] = useStore(store => [store.filter, store.setFilter]);
  const [checked, setChecked] = useState(filter);

  useEffect(() => {
    setChecked(filter);
  }, [filter]);

  const handleClose = (accepted: boolean) => {
    if (accepted) {
      setFilter(checked);
    }
    setModal(false);
  };

  const handleCheckboxClick = (name: string, isChecked: boolean) => {
    if (isChecked) {
      setChecked([...checked, name]);
    } else {
      setChecked(checked.filter(el => el !== name));
    }
  };


  return (
    <Modal open={modal} onClose={handleClose}>
      <Text>{t('Vehicle category filter')}</Text>
      {
        VehicleCategoryArray.map(el => (
          <View key={el} style={styles.checkBoxWrap}>
            <BouncyCheckbox
              textComponent={<CheckBoxText text={t(el) as string} category={el} />}
              isChecked={checked.includes(el)}
              onPress={(checked) => handleCheckboxClick(el, checked)}
            />
          </View>
        ))
      }
    </Modal>
  );
};

export default FilterModal;
