import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './store/index';


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;