import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Home';
import { TweetsScreen, NewTweetScreen } from '../Tweets';

export default createAppContainer(
  createStackNavigator({
    Home: HomeScreen,
    Tweets: TweetsScreen,
    NewTweet: NewTweetScreen,
  },
  {
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: '#eeeeee',
      },
    },
  }),
);
