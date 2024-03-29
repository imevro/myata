import React from 'react';
import { AsYouType, isValidNumber } from 'libphonenumber-js';
import { Keyboard } from 'react-native';

import firebase from 'react-native-firebase';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import styled from 'styled-components';

import { HeaderTextButton } from '../ui';

const ScrollView = styled.ScrollView`
  flex: 1;
  background: #171717;
`;

const Label = styled.Text`
  text-align: center;
  margin-top: 80;
  font-weight: 400;
  font-size: 16;
  line-height: 16;

  color: #fff;
`;

const Input = styled.TextInput`
  padding-vertical: 11;
  font-weight: 800;
  font-size: 30;
  line-height: 32;
  color: #fff;
  text-align: center;
  width: 100%;
  margin-top: 26;
`;

const HeaderLoading = styled.ActivityIndicator`
  margin-right: 16;
`;

/* eslint-disable react/no-multi-comp */
class PhoneScreen extends React.Component {
  state = {
    phoneNumber: '',
  };

  componentDidMount() {
    this.props.navigation.setParams({ onSubmit: this.onSubmit });
  }

  onEnterPhoneNumber = (text) => {
    const isValidPhoneNumber = isValidNumber(text);

    this.setState({ phoneNumber: text, isValidPhoneNumber }, () => {
      this.props.navigation.setParams(this.state);
    });
  };

  onFocusInput = () => {
    this.setState({ phoneNumber: '' });
  };

  onSubmit = () => {
    Keyboard.dismiss();
    const { isValidPhoneNumber, phoneNumber } = this.state;

    if (isValidPhoneNumber) {
      this.setState({ isFetching: true }, () => {
        this.props.navigation.setParams(this.state);

        firebase
          .auth()
          .signInWithPhoneNumber(phoneNumber)
          .then((confirmResult) => {
            this.props.navigation.navigate('Code', {
              phoneNumber,
              confirmResult,
            });
          })
          .catch(error => console.error(error));
      });
    } else {
      this.setState({
        showError: true,
        errorTitle: 'Неправильный номер телефона',
      });
    }
  };

  render() {
    const { phoneNumber } = this.state;
    const phoneNumberFormatted = new AsYouType('RU').input(phoneNumber);

    return (
      <ScrollView>
        <Label>Введите номер телефона</Label>

        <Input
          onChangeText={text => this.onEnterPhoneNumber(text)}
          onFocus={this.onFocusInput}
          value={phoneNumberFormatted}
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          underlineColorAndroid="transparent"
          keyboardAppearance="light"
          onSubmitEditing={this.onSubmit}
          placeholder="+7 999 111 22 33"
          placeholderTextColor="#49494A"
        />
      </ScrollView>
    );
  }
}

class CodeScreen extends React.Component {
  state = {
    code: '',
    error: null,
  };

  componentDidMount() {
    this.props.navigation.setParams({ onSubmit: this.onSubmit });
    // this.startTimer(TIMER_TIME);
  }

  onChangeCode = (code) => {
    const isValidCode = code.length === 6;

    this.setState({ code, isValidCode }, () => {
      this.props.navigation.setParams(this.state);

      if (code.length === 6) this.onSubmit();
    });
  };

  onSubmit = () => {
    this.setState({ isFetching: true }, () => {
      this.props.navigation.setParams(this.state);
      const { confirmResult } = this.props.navigation.state.params;

      confirmResult
        .confirm(this.state.code)
        .then(() => {
          this.props.navigation.navigate('Main');
        })
        .catch(error =>
          this.setState({ error, isFetching: false }, () => {
            this.props.navigation.setParams(this.state);
          }))
        .finally(() => Keyboard.dismiss());
    });
  };

  render() {
    const { code, error } = this.state;

    return (
      <ScrollView>
        <Label>Введите код</Label>

        <Input
          autoFocus
          onChangeText={this.onChangeCode}
          value={code}
          textContentType="oneTimeCode"
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          keyboardAppearance="light"
          onSubmitEditing={this.onSubmit}
          placeholder="• • • • • •"
          placeholderTextColor="#49494A"
        />

        {error && <Label>Возникла ошибка</Label>}

        {/* {isSmsCodeSent && (
        <CodeContainer>
          {isTimerVisible ? (
            <BottomText>
              Запросить код повторно через{' '}
              {pluralize(
                timerTime,
                '%d секунд',
                '%d секунду',
                '%d секунды',
                '%d секунд',
              )}
            </BottomText>
          ) : (
            <RepeatButton onPress={this.onGetCode}>
              <RepeatButtonText>Запросить код</RepeatButtonText>
            </RepeatButton>
          )}
        </CodeContainer>
      )} */}
      </ScrollView>
    );
  }
}

const AuthNavigator = createStackNavigator(
  {
    Phone: {
      screen: PhoneScreen,
      navigationOptions: ({ navigation }) => ({
        headerBackTitleVisible: false,
        headerRight: (() => {
          const isValidPhoneNumber = navigation.getParam('isValidPhoneNumber');

          if (isValidPhoneNumber) {
            const isFetching = navigation.getParam('isFetching');
            if (isFetching) return <HeaderLoading />;

            return (
              <HeaderTextButton onPress={navigation.getParam('onSubmit')}>
                Далее
              </HeaderTextButton>
            );
          }

          return null;
        })(),
      }),
    },
    Code: {
      screen: CodeScreen,
      navigationOptions: ({ navigation }) => ({
        headerRight: (() => {
          const isValidCode = navigation.getParam('isValidCode');

          if (isValidCode) {
            const isFetching = navigation.getParam('isFetching');
            if (isFetching) return <HeaderLoading />;

            return (
              <HeaderTextButton onPress={navigation.getParam('onSubmit')}>
                Войти
              </HeaderTextButton>
            );
          }

          return null;
        })(),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerMode: 'float',
      headerTransparent: false,
      headerStyle: {
        backgroundColor: '#171717',
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        shadowRadius: 0,
        elevation: 0,
      },
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
      headerTintColor: '#ffffff',
      headerBackTitleVisible: true,
    },
  },
);

export default createSwitchNavigator(
  {
    AuthNavigator,
  },
  {
    initialRouteName: 'AuthNavigator',
  },
);
