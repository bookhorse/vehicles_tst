import Router from '@/routes';
import useStore from '@/store';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import '@/i18n';

const App = () => {
  const initApp = useStore(store => store.init);

  useEffect(() => {
    initApp();
  }, []);

  return (<>
    <Router />
    <StatusBar hidden />
  </>);
};

export default App;
