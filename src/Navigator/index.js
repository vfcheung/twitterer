import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../Home';
import TweetsScreen from '../Tweets';

export default createAppContainer(
  createSwitchNavigator({
    Home: HomeScreen,
    Tweets: TweetsScreen,
  }),
);
