export const featuresTitles = {
  parking: 'Парковка',
  vip_rooms: 'VIP-комнаты',
  summer_terrace: 'Летняя веранда',
  business_lunches: 'Бизнес-ланчи',
  breakfast: 'Завтраки',
  own_kitchen: 'Своя куxня',
  light_snacks_or_desserts: 'Легкие закуски или десерты',
  own_food: 'Можно со своей едой',
  fast_delivery_from_partners: 'Быстрая доставка от партнёров',
  hard_liquors: 'Крепкий алкоголь',
  corkage_fee: 'Пробковый сбор',
  ps4: 'PS4',
  board_games: 'Настольные игры',
  live_broadcasts: 'Прямые трансляции',
  parties: 'DJ, вечеринки',
  free_wifi: 'Бесплатный Wi-Fi',
  round_the_clock: 'Круглосуточно',
};

export const places = [
  {
    id: 3,
    title: 'Сретенка',
    phoneNumber: '79680099991',
    waPhoneNumber: '79680099991',
    coverId: 'c2878465-a59b-4aff-ae60-589738add9db',
    city: 'moscow',
    addressTitle: 'ул. Сретенка, 26/1',
    addressSubways: [
      {
        title: 'Сухаревская',
        color: '#FD7F23',
        walkMeters: 240,
      },
      {
        title: 'Сретенский бульвар',
        color: '#9ACA40',
        walkMeters: 710,
      },
    ],
    workingHours: [
      [12, 2],
      [12, 2],
      [12, 2],
      [12, 2],
      [12, 2],
      [12, 4],
      [12, 4],
    ],
    generalSales: [
      {
        title: 'Оставьте отзыв в Яндекс.Картах и получите скидку 10%',
      },
    ],
    /*
Акции:

Бизнес - дни с 12:00 до 17:00 (предложение действительно в будние дни)

Кальян за 1 100 р
Кальян + чай или лимонад за 1 400 р
Кальян + чай + десерт или сэндвич за 1 700 р
Кальян на грейпфруте + чай или лимонад за 1700 р
Кальян на грейпфруте  + чай + 2 десерта или 2 сэндвича за 2300 р

Акции дня:

Понедельник:  Скидка 20% на смузи
Вторник: 2 кальяна за 2 200 р
Среда: Скидка 20% на кальяны на фруктовой чаше
Четверг: Скидка 20% на флеши
Воскресенье: Скидка 20% на кальян-коктейли

Временно работает скидка:
- при отзыве на Яндекс скидка 10%
*/
    sales: [
      [
        {
          allDay: true,
          title: 'Скидка 20% на кальян-коктейли',
        },
      ],
      [
        {
          title: 'Скидка 20% на смузи',
          allDay: true,
        },

        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян за 1 100 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай или лимонад за 1 400 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай + десерт или сэндвич за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян на грейпфруте + чай или лимонад за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title:
            'Кальян на грейпфруте + чай + 2 десерта или 2 сэндвича за 2 300 ₽',
        },
      ],
      [
        {
          title: '2 кальяна за 2 200 ₽',
          allDay: true,
        },

        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян за 1 100 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай или лимонад за 1 400 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай + десерт или сэндвич за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян на грейпфруте + чай или лимонад за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title:
            'Кальян на грейпфруте + чай + 2 десерта или 2 сэндвича за 2 300 ₽',
        },
      ],
      [
        {
          title: 'Скидка 20% на кальяны на фруктовой чаше',
          allDay: true,
        },

        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян за 1 100 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай или лимонад за 1 400 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай + десерт или сэндвич за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян на грейпфруте + чай или лимонад за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title:
            'Кальян на грейпфруте + чай + 2 десерта или 2 сэндвича за 2 300 ₽',
        },
      ],
      [
        {
          title: 'Скидка 20% на флеши',
          allDay: true,
        },

        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян за 1 100 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай или лимонад за 1 400 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай + десерт или сэндвич за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян на грейпфруте + чай или лимонад за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title:
            'Кальян на грейпфруте + чай + 2 десерта или 2 сэндвича за 2 300 ₽',
        },
      ],
      [
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян за 1 100 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай или лимонад за 1 400 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян + чай + десерт или сэндвич за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title: 'Кальян на грейпфруте + чай или лимонад за 1 700 ₽',
        },
        {
          hourFrom: 12,
          hourTo: 17,
          title:
            'Кальян на грейпфруте + чай + 2 десерта или 2 сэндвича за 2 300 ₽',
        },
      ],
      [],
      [],
    ],
    highlights: [
      'vip_rooms',
      'ps4',
      'board_games',
      'fast_delivery_from_partners',
      'business_lunches',
      'light_snacks_or_desserts',
    ],
    photoIds: [
      'c2878465-a59b-4aff-ae60-589738add9db',
      'c41586db-0c0a-42c4-82c2-d61fad5acf27',
      '568651d5-0492-46e4-9b86-44cfe4d97b7c',
      '9dbbf936-2c1a-457f-a34e-88f1b685c1d8',
      '64111ffe-7902-49b3-b9dc-16fa78e7c2eb',
      '593a2da6-f029-4b55-9224-a5b843da3235',
    ],
    socialNetworks: {
      instagram: 'myata_sretenka',
      vk: 'myata_sretenka',
    },
  },
  {
    id: 2,
    disabled: true,
    title: 'Edition',
    city: 'moscow',
    addressTitle: 'ул. Рочдельская, 15 стр 13',
    coverId: '3e4d8e1c-e9bc-48f0-b292-d7acf8802f24',
    phoneNumber: '79653886688',
    waPhoneNumber: '79653886688',
    photoIds: [
      '862ea0b3-3692-4394-9d0e-587b9a424560',
      'c635dae1-fb2b-4d02-a3bf-680f35bd73b1',
      'e8a5fd63-f432-4e8f-9004-2d2f4bbc2ecf',
      '2c992da3-8827-4a47-a9e5-92b091e1905f',
      '9d62d6a9-d58b-4bc6-ac4b-c595c6fcc63c',
      '0ea5f787-b68c-45b3-bed9-4c6be521f76b',
      '893522ef-e73c-4bb0-895c-b45af407f78c',
      'b01b5ed2-709a-44d7-88e7-574f676c0f19',
    ],
    workingHours: [
      [12, 1],
      [12, 1],
      [12, 1],
      [12, 1],
      [12, 1],
      [12, 3],
      [12, 3],
    ],
  },
  {
    id: 15,
    disabled: true,
    title: 'Вайнера',
    city: 'yekaterinburg',
    addressTitle: 'ул. Вайнера, 12',
    coverId: '991044fc-2a1f-44c2-8720-b22f7945c27b',
  },
  // {
  //   id: 4,
  //   disabled: true,
  //   title: 'Space',
  //   city: 'moscow', addressTitle: 'Ленинский проспект, 39/1',
  //   phoneNumber: '79688002002',
  //   waPhoneNumber: '79688002002',
  //   coverId: 'fa0a5252-47c0-4899-952b-df5efb654cce',
  //   workingHours: [
  //     [14, 2],
  //     [14, 2],
  //     [14, 2],
  //     [14, 2],
  //     [14, 2],
  //     [14, 5],
  //     [14, 5],
  //   ],
  // },
  // {
  //   id: 5,
  //   disabled: true,
  //   title: 'Шаболовка',
  //   city: 'moscow', addressTitle: 'Серпуховской вал, 21к1',
  //   phoneNumber: '79690400044',
  //   waPhoneNumber: '79690400044',
  //   coverId: '2a5bd2e6-feb0-44e8-af87-09beff6f1a6f',
  //   photoIds: [
  //     'a9a62acb-3733-4999-b709-d0d815e3b40d',
  //     '8d467d57-6c12-4ee5-9f76-7b833af08bf2',
  //     'd9c5b5b1-d87e-4df5-bcc3-eec8a7c48b9f',
  //     '65c5063e-d564-42b6-b627-ac6273d15936',
  //     'c39ab2a7-00e8-4a75-a784-6b4adb6575c1',
  //     '83b541d9-e751-41af-9f1e-24d22b61bc43',
  //     '05ec19f6-1fdb-4c41-b45a-62243ee15d18',
  //   ],
  //   workingHours: [
  //     [11, 1],
  //     [11, 1],
  //     [11, 1],
  //     [11, 1],
  //     [11, 1],
  //     [12, 5],
  //     [12, 5],
  //   ],
  // },
  // {
  //   id: 6,
  //   disabled: true,
  //   title: 'Митино',
  //   city: 'moscow', addressTitle: 'ул. Митинская, 16',
  //   phoneNumber: '79269098088',
  //   waPhoneNumber: '79269098088',
  //   coverId: 'fef27429-75b3-4cf4-8eb2-c83bf87df3bc',
  //   photoIds: [
  //     '6aa9e53b-62d5-4fb6-8703-30379c32cb08',
  //     '4da3967b-90e7-4e63-aa63-6fa535ff64dc',
  //     '138b999b-8804-455b-aa0b-55c6e3e2e940',
  //     'f70fb465-5efa-4c34-a789-47ee3a69e2f9',
  //     '2ff9b5c2-dd4d-4860-bf3f-431c1f11752b',
  //     'cb7c0aea-8dbb-45c2-9f35-94ce4431b205',
  //   ],
  //   workingHours: [
  //     [12, 3],
  //     [12, 3],
  //     [12, 3],
  //     [12, 3],
  //     [12, 3],
  //     [12, 6],
  //     [12, 6],
  //   ],
  // },
  // {
  //   id: 7,
  //   disabled: true,
  //   title: 'Новый Арбат',
  //   city: 'moscow', addressTitle: 'ул. Арбат, 11',
  //   phoneNumber: '79152331837',
  //   waPhoneNumber: '79152331837',
  //   coverId: '74cf2499-c7ac-4859-86ad-5e3372d14c4c',
  //   workingHours: [
  //     [11, 3],
  //     [11, 3],
  //     [11, 3],
  //     [11, 3],
  //     [11, 3],
  //     [11, 6],
  //     [11, 6],
  //   ],
  // },
  {
    id: 8,
    disabled: true,
    title: 'Рязанка 18',
    city: 'moscow',
    addressTitle: 'Рязанский проспект, 18',
    phoneNumber: '79993959609',
    waPhoneNumber: '79993959609',
    coverId: 'be0164e3-1f83-4bae-a2bc-a1cf029d5c7e',
    photoIds: [
      '70d4124b-3ca9-4b1c-8be1-ef26d01f541e',
      '46e35449-0249-406f-8a69-21b902287e0b',
      '2da09988-2990-43dd-9805-e0e66f7f1796',
      '0ddf0b99-2916-4339-9f08-0ba66f08d9b6',
      '5dc29673-bbc7-4248-ad87-e4e50512c898',
      '2a51cb1a-a1d6-4467-a53c-b37ee4ce470d',
      'a2bb87ea-51a0-40b2-ab43-7add0dc560d2',
      'c8303ec1-ef3d-4123-ab8d-e563d20d2266',
    ],
    workingHours: [
      [12, 4],
      [12, 2],
      [12, 2],
      [12, 2],
      [12, 2],
      [12, 4],
      [12, 4],
    ],
  },
  // {
  //   id: 9,
  //   disabled: true,
  //   title: 'Варшавка',
  //   city: 'moscow', addressTitle: 'ул. Ялтинская, 2',
  //   phoneNumber: '74952030777',
  //   waPhoneNumber: '74952030777',
  //   coverId: '4721aaba-bfaf-4e10-b3c5-87dd4f2858c5',
  //   photoIds: [
  //     'f71edb09-6866-4937-a3da-079cb291e604',
  //     'c2c264d5-df8a-4dfe-80e5-df6ef877399c',
  //     '9cc7b1c6-e0ca-4fdf-89f5-8611bebda2e4',
  //     '0681d021-78b9-4f3f-aa2a-18e0194da8c3',
  //     '9097562f-9194-4691-aed6-72986e06c08d',
  //     '62f56b50-7aae-4828-bc44-0c72c88fa64a',
  //     '7f1b0ff9-5245-49b4-b311-40c6502fd482',
  //   ],
  //   workingHours: [
  //     [13, 1],
  //     [13, 1],
  //     [13, 1],
  //     [13, 1],
  //     [13, 1],
  //     [13, 6],
  //     [13, 6],
  //   ],
  // },
  {
    id: 10,
    disabled: true,
    title: 'Ленинградка',
    city: 'moscow',
    addressTitle: 'Ленинградское шоссе, 68',
    phoneNumber: '79957700534',
    waPhoneNumber: '79957700534',
    coverId: 'edae2873-3d84-4891-b420-bfb172f56b09',
    photoIds: [
      'c8844347-e2c9-4b2d-8e60-b1bc33d83c50',
      'cfc8c7a7-32af-4824-a5a6-8392b720b75d',
      'a7d06230-5363-45f9-ae7a-ed12aa8fbe91',
      'db910c7e-859b-4116-8979-52b62b244433',
      'ce7ad285-df6b-4c7f-9f86-e0e364aca405',
      '46f588e5-84c6-4526-9d65-bfe30e6f5f86',
      'a8bcf75f-6f3c-4923-a2ed-b00ccd20491e',
    ],
    workingHours: [
      [14, 2],
      [14, 2],
      [14, 2],
      [14, 2],
      [14, 2],
      [14, 5],
      [14, 5],
    ],
  },
  // {
  //   id: 11,
  //   disabled: true,
  //   title: 'Свиблово',
  //   city: 'moscow', addressTitle: 'ул. Енисейская, 5к2',
  //   phoneNumber: '79855825631',
  //   waPhoneNumber: '79855825631',
  //   coverId: '72a8ed29-e538-47bd-a380-361da1b82978',
  //   photoIds: [
  //     '19c3ef7c-3a25-48c6-b0c9-12228dc0adf1',
  //     '5c883c2e-331b-4251-a717-48fd82e13a13',
  //     'c44e8581-6886-4148-adfd-01bc90ca3155',
  //     '8c2d533b-26b9-4fa1-8d5b-eae6c8cda92c',
  //     '1dae8c1f-ccb1-48ac-9a6c-bc75810e93e8',
  //     'b138f947-db3b-4e3f-a888-f18ec4d4caf9',
  //     '14c5a365-66a1-43ed-a0ce-cac327eaf2fb',
  //     '2d54e8ee-76be-4d41-89d5-d1593418d117',
  //   ],
  //   workingHours: [
  //     [12, 2],
  //     [12, 2],
  //     [12, 2],
  //     [12, 2],
  //     [12, 2],
  //     [12, 5],
  //     [12, 5],
  //   ],
  // },
];
