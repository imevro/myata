import React from 'react';
import styled from 'styled-components';
import {
  AsYouType,
  isValidNumber,
  parsePhoneNumberFromString,
} from 'libphonenumber-js';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';
import ruLocale from 'date-fns/locale/ru';
import differenceInHours from 'date-fns/difference_in_hours';
import pluralize from 'pluralize-ru';

import { ReactDadata } from 'react-dadata';
import { Widget } from '@uploadcare/react-widget';

import fb from '../firebase';
import { mapOutput } from './mappers';
import { getPhotoUrl } from '../utils/photos';
import media from '../ui/media';

import { Card, IconEdit, Input, TextOrInput } from '../ui';
import * as FeaturesIcons from '../ui/icons/features';

const Value = styled.p`
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #111;
`;
const PhotosSt = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const PhotoItem = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
  width: calc(100% / 2 - 10px);

  ${media.greaterThan('md')`
    width: calc(100% / 5 - 10px);
  `}
`;

const Photo = styled.img`
  max-height: 128px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const PhotoDeleteButton = styled.button`
  position: absolute;
  right: 6px;
  top: 6px;
  background: #fff;
  border: 0;
  border-radius: 50%;
  line-height: 1;
  padding: 9px;
  width: 30px;
  height: 30px;

  &:hover {
    background-color: #eee;
  }
`;

function Photos({ photoIds = [], isEdit, onChange = () => {} }) {
  const [uploaded, setUploaded] = React.useState(null);

  function onDelete(id) {
    // eslint-disable-next-line no-restricted-globals
    const isDelete = confirm('Удалить фотографию?');

    if (isDelete) {
      return onChange(photoIds.filter(item => item !== id));
    }

    return onChange(photoIds);
  }

  function onUpload(id) {
    // function onUpload(groupUuid) {
    // uploadcare
    //   .loadFileGroup(groupUuid)
    //   .done(res => console.log({ res: res.files() }))
    //   .fail(e => console.error(e));

    setUploaded(null);
    return onChange([...photoIds, id]);
  }

  return (
    <Card title="Фотографии">
      {!isEdit && !photoIds.length > 0 && <i>Фотографии ещё не загружены</i>}

      <PhotosSt>
        {photoIds.map(id => (
          <PhotoItem key={id}>
            <Photo src={`${getPhotoUrl(id)}-/resize/x256/`} />
            {isEdit && (
              <PhotoDeleteButton onClick={() => onDelete(id)}>
                ❌
              </PhotoDeleteButton>
            )}
          </PhotoItem>
        ))}
        {isEdit && (
          <PhotoItem>
            <Widget
              publicKey={process.env.REACT_APP_UPLOADCARE_KEY}
              // onChange={({ uuid: groupUuid }) => onUpload(groupUuid)}
              onChange={({ uuid }) => onUpload(uuid)}
              value={uploaded}
              tabs="file gdrive"
              locale="ru"
              imagesOnly
              previewStep
              // multiple
            />
          </PhotoItem>
        )}
      </PhotosSt>
    </Card>
  );
}

const featuresTitles = {
  parking: 'Парковка',
  vip_rooms: 'VIP-комнаты',
  summer_terrace: 'Летняя веранда',
  business_lunches: 'Бизнес-ланчи',
  breakfast: 'Завтраки',
  own_kitchen: 'Своя куxня',
  light_snacks_or_desserts: 'Закуски',
  own_food: 'Еда с собой',
  fast_delivery_from_partners: 'Еда от партнёров',
  hard_liquors: 'Крепкий алкоголь',
  corkage_fee: 'Пробковый сбор',
  ps4: 'PlayStation 4',
  board_games: 'Настольные игры',
  live_broadcasts: 'Прямые трансляции',
  parties: 'DJ, вечеринки',
  free_wifi: 'Бесплатный Wi-Fi',
  round_the_clock: 'Круглосуточно',
};

const featuresToIcons = {
  parking: FeaturesIcons.Parking,
  vip_rooms: FeaturesIcons.Vip,
  summer_terrace: FeaturesIcons.SummerTerrace,
  business_lunches: FeaturesIcons.BusinessLunch,
  breakfast: FeaturesIcons.Breakfast,
  own_kitchen: FeaturesIcons.OwnKitchen,
  light_snacks_or_desserts: FeaturesIcons.Snacks,
  own_food: FeaturesIcons.OwnFood,
  fast_delivery_from_partners: FeaturesIcons.PartnersDelivery,
  hard_liquors: FeaturesIcons.HardAlcohol,
  corkage_fee: FeaturesIcons.CorkageFee,
  ps4: FeaturesIcons.PlayStation,
  board_games: FeaturesIcons.BoardGames,
  live_broadcasts: FeaturesIcons.LiveBroadcasts,
  parties: FeaturesIcons.Parties,
  free_wifi: FeaturesIcons.Wifi,
  round_the_clock: FeaturesIcons.RoundTheClock,
};

function renderIcon({ value, ...props }) {
  if (featuresToIcons[value]) {
    return React.createElement(featuresToIcons[value], {
      size: 36,
      ...props,
    });
  }

  return null;
}

const HighlightsSt = styled.ul.attrs({ className: 'row' })`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Highlight = styled.li.attrs({ className: 'col-sm-6 col-lg-4 col-xl-3' })`
  align-items: center;
  display: flex;
  margin-bottom: 12px;
`;

const HighlightTitle = styled.h6`
  margin-left: 8px;
`;

const HighlightButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;

  h6 {
    color: ${p => (p.isActive ? '#20b4ab' : '#192a3e')};
  }
`;

function Highlights({
  highlights: stateHighlights = [],
  isEdit,
  onChange = () => {},
}) {
  function onClick(highlight) {
    if (stateHighlights.includes(highlight)) {
      return onChange(stateHighlights.filter(item => item !== highlight));
    }

    return onChange([...stateHighlights, highlight]);
  }

  const highlights = !isEdit ? stateHighlights : Object.keys(featuresTitles);

  return (
    <Card title="Витрина">
      <HighlightsSt>
        {highlights.map(highlight => {
          if (isEdit) {
            const isActive = stateHighlights.includes(highlight);

            return (
              <Highlight key={highlight}>
                <HighlightButton
                  isActive={isActive}
                  onClick={() => onClick(highlight)}
                >
                  {renderIcon({
                    value: highlight,
                    color: isActive ? '#20B4AB' : '#ccc',
                  })}
                  <HighlightTitle>{featuresTitles[highlight]}</HighlightTitle>
                </HighlightButton>
              </Highlight>
            );
          }

          return (
            <Highlight key={highlight}>
              {renderIcon({ value: highlight, color: '#20B4AB' })}
              <HighlightTitle>{featuresTitles[highlight]}</HighlightTitle>
            </Highlight>
          );
        })}
      </HighlightsSt>
    </Card>
  );
}

const Label = styled.label`
  text-align: right;
  width: 100%;
  font-weight: 600;
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Save = styled.button`
  background-color: #109cf1;
  color: #fff;
  box-shadow: 0 4px 10px rgba(52, 175, 249, 0.24);
  border: 0 solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  transition: background-color 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #34aff9;
    box-shadow: 0 8px 16px rgba(52, 175, 249, 0.2);
  }
`;

const Divider = styled.hr`
  margin-top: 32px;
  margin-bottom: 32px;
`;

const CoverColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Cover = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 8px;
`;

const RowSt = styled.div.attrs({ className: 'row' })`
  margin-bottom: 10px;
`;

const ActionsRowSt = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
`;

function Row({ id, label, children }) {
  return (
    <RowSt>
      <div className="col-xs-4">
        <Label htmlFor={id}>{label}</Label>
      </div>
      <div className="col-xs-8">{children}</div>
    </RowSt>
  );
}

function ActionsRow({ children }) {
  return <ActionsRowSt>{children}</ActionsRowSt>;
}

const Actions = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const EditButton = styled.button`
  font-size: 14px;
  font-weight: bold;
  border: 0;
  background: none;
  line-height: 1;
  background-color: #111;
  color: #fff;
  padding: 12px 16px 14px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;

const Header = styled.header`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
`;

const ReviewsSt = styled.div``;

const Review = styled.div`
  width: 100%;
  margin-bottom: 42px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ReviewHeader = styled.header`
  margin-bottom: 4px;
  display: flex;
  align-items: baseline;
`;

const ReviewDate = styled.time`
  color: #111;
  font-weight: bold;
`;

const ReviewStars = styled.p`
  margin-left: 10px;
  margin-bottom: 0;
`;

const ReviewText = styled.p`
  margin-bottom: 10px;
`;

const ReviewLabel = styled.span`
  background: #eee;
  height: auto;
  padding: 4px 10px;
  border-radius: 6px;
  line-height: 1;
  display: inline-block;
  margin-left: 4px;
`;

const ReviewButtons = styled.div``;

const ReviewReplyButton = styled.button`
  background: #eee;
  height: auto;
  padding: 4px 10px;
  border-radius: 6px;
  line-height: 1;
  display: inline-block;
  margin-bottom: 4px;
`;

function Reviews({ reviews = [] }) {
  return (
    <Card title="Отзывы">
      <ReviewsSt>
        {reviews.map(({ id, createdAt, rating, text, personal }) => {
          const diffInHours = differenceInHours(new Date(), createdAt);
          const remainingHours = 72 - diffInHours;
          const isPublic = diffInHours > 72;

          return (
            <Review key={id}>
              <ReviewHeader>
                <ReviewDate>
                  {distanceInWordsStrict(new Date(), createdAt, {
                    locale: ruLocale,
                    addSuffix: true,
                  })}
                </ReviewDate>
                <ReviewStars>⭐️ {parseFloat(rating).toFixed(2)}</ReviewStars>
                {personal && <ReviewLabel>управляющему</ReviewLabel>}
                {!personal &&
                  (isPublic ? (
                    <ReviewLabel>опубликован</ReviewLabel>
                  ) : (
                    <ReviewLabel>
                      опубликуется через{' '}
                      {pluralize(
                        remainingHours,
                        '0 часов',
                        '%d час',
                        '%d часа',
                        '%d часов',
                      )}
                    </ReviewLabel>
                  ))}
              </ReviewHeader>
              <ReviewText>{text}</ReviewText>

              <ReviewButtons>
                {!personal && (
                  <ReviewReplyButton type="button">ответить</ReviewReplyButton>
                )}
              </ReviewButtons>
            </Review>
          );
        })}
      </ReviewsSt>
    </Card>
  );
}

export default function({ place = {} }) {
  const [state, setState] = React.useState(place);
  const [isEdit, setEdit] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(null);
  const { socialNetworks = {}, address = {} } = state;

  function formatPhoneNumber(phoneNumber) {
    return new AsYouType('RU').input(phoneNumber);
  }

  function onUpload(coverId) {
    setUploaded(null);

    return setState({ ...state, coverId });
  }

  async function onSave() {
    const { id, ...data } = mapOutput(state);
    // const isValidPhoneNumber = isValidNumber(text);

    try {
      await fb
        .firestore()
        .collection('places')
        .doc(id)
        .update(data);

      setEdit(false);
    } catch (e) {
      console.error(e);
    }
  }

  React.useEffect(() => {
    setState(place);
  }, [place]);

  return (
    <>
      <Header>
        <Title>{place.title}</Title>

        <Actions>
          {!isEdit && (
            <EditButton onClick={() => setEdit(true)}>
              <IconEdit size={14} color="#fff" />
              Редактировать
            </EditButton>
          )}
        </Actions>
      </Header>
      <div className="row">
        <div className="col-lg-7">
          <Card title="Информация">
            <Row id="title" label="Название">
              <TextOrInput
                type="text"
                id="title"
                value={state.title}
                onChange={e => setState({ ...state, title: e.target.value })}
                isEdit={isEdit}
              >
                {state.title}
              </TextOrInput>
            </Row>

            <Row id="phoneNumber" label="Номер телефона">
              <TextOrInput
                type="text"
                id="phoneNumber"
                value={formatPhoneNumber(state.phoneNumber)}
                onChange={e =>
                  setState({ ...state, phoneNumber: e.target.value })
                }
                isEdit={isEdit}
              >
                {state.phoneNumber &&
                  parsePhoneNumberFromString(
                    state.phoneNumber,
                  ).formatInternational()}
              </TextOrInput>
            </Row>

            <Row id="waPhoneNumber" label="WhatsApp">
              <TextOrInput
                type="text"
                id="waPhoneNumber"
                value={formatPhoneNumber(state.waPhoneNumber)}
                onChange={e =>
                  setState({ ...state, waPhoneNumber: e.target.value })
                }
                isEdit={isEdit}
              >
                {state.waPhoneNumber &&
                  parsePhoneNumberFromString(
                    state.waPhoneNumber,
                  ).formatInternational()}
              </TextOrInput>
            </Row>

            <Row id="address" label="Адрес">
              <TextOrInput
                InputComponent={ReactDadata}
                token={process.env.REACT_APP_DADATA_KEY}
                id="address"
                query={address.title}
                onChange={({ data }) =>
                  setState({
                    ...state,
                    address: {
                      ...address,
                      lat: data.geo_lat,
                      lon: data.geo_lon,
                      title: `${data.street_with_type}, ${
                        data.house_type_full
                      } ${data.house}`,
                      country: data.country,
                      city: data.city,
                      district: data.city_district,
                      street: data.street_with_type,
                    },
                  })
                }
                placeholder="Адрес"
                isEdit={isEdit}
              >
                {address.title}
              </TextOrInput>
            </Row>

            <Divider />

            <Row id="instagram" label="Инстаграм">
              <TextOrInput
                type="text"
                id="instagram"
                value={socialNetworks.instagram}
                onChange={e =>
                  setState({
                    ...state,
                    socialNetworks: {
                      ...socialNetworks,
                      instagram: e.target.value,
                    },
                  })
                }
                isEdit={isEdit}
              >
                {socialNetworks.instagram}
              </TextOrInput>
            </Row>

            <Row id="vk" label="ВК">
              <TextOrInput
                type="text"
                id="vk"
                value={socialNetworks.vk}
                onChange={e =>
                  setState({
                    ...state,
                    socialNetworks: {
                      ...socialNetworks,
                      vk: e.target.value,
                    },
                  })
                }
                isEdit={isEdit}
              >
                {socialNetworks.vk}
              </TextOrInput>
            </Row>
          </Card>
        </div>
        <div className="col-lg-5">
          <Card title="Обложка">
            <CoverColumn>
              {state.coverId && (
                <Cover src={`${getPhotoUrl(state.coverId)}-/resize/x512/`} />
              )}
              {!isEdit && !state.coverId && <i>Обложка пока не загружена</i>}
              {isEdit && (
                <Widget
                  publicKey={process.env.REACT_APP_UPLOADCARE_KEY}
                  onChange={({ uuid }) => onUpload(uuid)}
                  value={uploaded}
                  tabs="file gdrive"
                  locale="ru"
                  imagesOnly
                  previewStep
                />
              )}
            </CoverColumn>
          </Card>
        </div>
      </div>

      <Photos
        photoIds={state.photoIds}
        isEdit={isEdit}
        onChange={photoIds => setState({ ...state, photoIds })}
      />

      <Highlights
        highlights={state.highlights}
        isEdit={isEdit}
        onChange={highlights => setState({ ...state, highlights })}
      />

      {isEdit && (
        <ActionsRow>
          <Save onClick={onSave}>Сохранить</Save>
        </ActionsRow>
      )}

      <Reviews reviews={state.reviews} />
    </>
  );
}
