import React from 'react';
import { Dimensions, RefreshControl } from 'react-native';
// import firebase from 'react-native-firebase';
import styled, { css } from 'styled-components';
import ruLocale from 'date-fns/locale/ru';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import useStoreon from 'storeon/react';
import EventCard from '../Places/EventCard';
import NewsCard from './Card';
import Card from '../Card/Card';
import { Alert as OrigAlert, FooterPusher } from '../ui';

const { width: deviceWidth } = Dimensions.get('window');

const View = styled.ScrollView`
  width: ${deviceWidth};
  padding-horizontal: 16;
  padding-top: 20;
`;

const FeedSt = styled.View`
  margin-top: 56;
`;

const Heading = styled.Text`
  font-size: 36;
  font-weight: bold;
  margin-bottom: 8;
  color: #fff;

  ${p =>
    p.center
    && css`
      text-align: center;
    `}
`;

const Alert = styled(OrigAlert)`
  margin-bottom: 32;
`;

const CardView = styled.View``;

const EventsList = styled.FlatList``;

const EventItem = styled.View``;

const Separator = styled.View`
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-width: 1;
  margin-top: 22;
  margin-bottom: 30;
`;

function loadList() {
  return [];
}

const renderItem = ({ item }, { navigation }) => {
  if (item.kind === 'place_event') {
    return (
      <EventItem>
        <EventCard
          item={item}
          dateFormat={eventAt =>
            distanceInWordsStrict(new Date(), eventAt, {
              locale: ruLocale,
              addSuffix: true,
            })
          }
          onPress={() => {
            navigation.navigate('PlaceDetails', { id: item.placeId });
          }}
        />
      </EventItem>
    );
  }

  if (item.kind === 'news') {
    return (
      <EventItem>
        <NewsCard item={item} />
      </EventItem>
    );
  }

  return null;
};

export default function (props) {
  const { dispatch = () => ({}), isFetching = false, news } = props;
  const { user = {} } = useStoreon('user');
  const { favorites = [] } = user;

  const refreshControl = (
    <RefreshControl
      onRefresh={() => dispatch(loadList())}
      enabled={!isFetching}
      // refreshing={isFetching && orders.length !== 0}
      refreshing={isFetching}
    />
  );

  return (
    <View refreshControl={refreshControl}>
      <CardView>
        <Heading>Моя карта</Heading>

        <Card user={user} />
      </CardView>

      <FeedSt>
        <Heading>Лента</Heading>

        {favorites.length === 0 && (
          <Alert center>
            Добавьте любимые Мяты в&nbsp;избранное, следите
            за&nbsp;их&nbsp;новостями в&nbsp;ленте и&nbsp;получайте
            пуш-уведомления
          </Alert>
        )}

        <EventsList
          renderItem={args => renderItem(args, props)}
          onRefresh={() => dispatch(loadList())}
          ItemSeparatorComponent={Separator}
          refreshing={isFetching}
          data={news}
          keyExtractor={item => String(item.id)}
        />
      </FeedSt>

      <FooterPusher />
    </View>
  );
}
