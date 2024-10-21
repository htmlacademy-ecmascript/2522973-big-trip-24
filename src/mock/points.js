import { getRandomElement } from '../utils-constant/utils.js';

const mockPoints = [
  {
    'id': '520f2bd9-bb19-4742-9a13-15b33184e426',
    'basePrice': 9275,
    'date_from': '2024-11-22T15:29:09.289Z',
    'date_to': '2024-11-23T08:00:09.289Z',
    'destination': '51d47b97-8c2a-449e-8286-a2a85a17c5ac',
    'is_favorite': false,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': '0a6deee1-18dc-48a0-a6db-b4ec429b77da',
    'basePrice': 8284,
    'date_from': '2024-11-25T01:49:09.289Z',
    'date_to': '2024-11-25T15:02:09.289Z',
    'destination': '84c94673-9399-4e26-a743-5290f6d7efd2',
    'is_favorite': true,
    'offers': [
      '0d26d66f-bfcc-473d-88ff-0d7d7c0fe65b'
    ],
    'type': 'train'
  },
  {
    'id': '13a1bbb1-80b1-4eb3-9d27-717da9b4c355',
    'basePrice': 4855,
    'date_from': '2024-11-26T05:35:09.289Z',
    'date_to': '2024-11-28T02:07:09.289Z',
    'destination': '84c94673-9399-4e26-a743-5290f6d7efd2',
    'is_favorite': true,
    'offers': [
      '8b31c844-db81-4a5c-b1b9-d4b642ac23dd',
      '400cb042-e4c9-4911-8f0d-9db319ef9635',
      '0d26d66f-bfcc-473d-88ff-0d7d7c0fe65b'
    ],
    'type': 'train'
  },
  {
    'id': '00254b2e-63ef-4ae4-961c-eca7f246c4b1',
    'basePrice': 2589,
    'date_from': '2024-11-29T16:36:09.289Z',
    'date_to': '2024-11-30T01:57:09.289Z',
    'destination': '138322cf-e0ef-4448-abb6-fcc5db7ca98e',
    'is_favorite': false,
    'offers': [
      '99d86e0f-c27a-46d0-8185-22a342edb4b5'
    ],
    'type': 'restaurant'
  },
  {
    'id': 'cfe4ec45-c16a-4b99-98f8-ade6e9f19188',
    'basePrice': 2714,
    'date_from': '2024-11-30T11:39:09.289Z',
    'date_to': '2024-12-01T00:18:09.289Z',
    'destination': 'b079b0af-9108-49a3-a023-6ecab0224cae',
    'is_favorite': false,
    'offers': [],
    'type': 'train'
  },
  {
    'id': 'c4c51809-4e48-4383-a63c-c5df81587a23',
    'basePrice': 6130,
    'date_from': '2024-12-01T17:40:09.289Z',
    'date_to': '2024-12-02T04:22:09.289Z',
    'destination': '70b1cf3a-a553-46a5-80d3-4063927f5067',
    'is_favorite': false,
    'offers': [
      '83cec865-501b-4d4c-9611-25d70e33e8d6'
    ],
    'type': 'ship'
  },
  {
    'id': 'd11743f1-9913-4303-bb90-720c1f70db9a',
    'basePrice': 8389,
    'date_from': '2024-12-03T04:49:09.289Z',
    'date_to': '2024-12-04T14:46:09.289Z',
    'destination': 'd7559a1f-aacc-45b5-8d4a-4c7514e55bde',
    'is_favorite': true,
    'offers': [
      '8b31c844-db81-4a5c-b1b9-d4b642ac23dd',
      '400cb042-e4c9-4911-8f0d-9db319ef9635',
      '0d26d66f-bfcc-473d-88ff-0d7d7c0fe65b'
    ],
    'type': 'train'
  },
  {
    'id': '062b5740-6d6a-4658-9ea9-a9737de905ca',
    'basePrice': 7585,
    'date_from': '2024-12-05T14:14:09.289Z',
    'date_to': '2024-12-07T01:19:09.289Z',
    'destination': '51d47b97-8c2a-449e-8286-a2a85a17c5ac',
    'is_favorite': false,
    'offers': [
      '6b618816-5d54-44b8-a6ff-8c829f432238',
      '83cec865-501b-4d4c-9611-25d70e33e8d6'
    ],
    'type': 'ship'
  },
  {
    'id': '983ed28c-79cb-4819-beee-26ddf587a146',
    'basePrice': 1584,
    'date_from': '2024-12-08T05:07:09.289Z',
    'date_to': '2024-12-09T00:05:09.289Z',
    'destination': 'b079b0af-9108-49a3-a023-6ecab0224cae',
    'is_favorite': true,
    'offers': [
      '6b618816-5d54-44b8-a6ff-8c829f432238',
      '83cec865-501b-4d4c-9611-25d70e33e8d6'
    ],
    'type': 'ship'
  },
  {
    'id': 'cede741a-ce44-425c-9573-0eb524870129',
    'basePrice': 7908,
    'date_from': '2024-12-09T07:03:09.289Z',
    'date_to': '2024-12-10T22:53:09.289Z',
    'destination': '84c94673-9399-4e26-a743-5290f6d7efd2',
    'is_favorite': false,
    'offers': [
      '0d26d66f-bfcc-473d-88ff-0d7d7c0fe65b'
    ],
    'type': 'train'
  },
  {
    'id': '08038308-e4b6-4217-b1db-4016271913d4',
    'basePrice': 4225,
    'date_from': '2024-12-11T21:38:09.289Z',
    'date_to': '2024-12-12T19:49:09.289Z',
    'destination': '003430c4-775c-492e-853b-fa87fb4d8f94',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '5da11711-787a-468c-bc70-31f4812e134d',
    'basePrice': 2444,
    'date_from': '2024-12-13T09:45:09.289Z',
    'date_to': '2024-12-14T13:26:09.289Z',
    'destination': 'b079b0af-9108-49a3-a023-6ecab0224cae',
    'is_favorite': false,
    'offers': [],
    'type': 'check-in'
  },
  {
    'id': '8f42b82f-7452-4084-9a32-1c9487bdf1fe',
    'basePrice': 5431,
    'date_from': '2024-12-16T01:28:09.289Z',
    'date_to': '2024-12-17T17:15:09.289Z',
    'destination': '51d47b97-8c2a-449e-8286-a2a85a17c5ac',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'cb49a6b0-ef88-45d8-8f28-4a156dca3196',
    'basePrice': 3441,
    'date_from': '2024-12-19T08:27:09.289Z',
    'date_to': '2024-12-19T18:10:09.289Z',
    'destination': '29441793-9513-4616-9504-13e2b6f7c766',
    'is_favorite': false,
    'offers': [],
    'type': 'taxi'
  },
  {
    'id': '5f200b02-092c-4942-82ae-f68ba12fee78',
    'basePrice': 9770,
    'date_from': '2024-12-21T01:13:09.289Z',
    'date_to': '2024-12-22T00:40:09.289Z',
    'destination': '51d47b97-8c2a-449e-8286-a2a85a17c5ac',
    'is_favorite': true,
    'offers': [
      '6e00fee0-dcf9-45e8-b3a4-9ac6057b2ab1',
      'f7f9ff7e-3d7c-4315-b941-fd2efca3aa5f'
    ],
    'type': 'taxi'
  },
  {
    'id': '7fe0569b-ccf8-4562-9d2d-16cc66ea0737',
    'basePrice': 994,
    'date_from': '2024-12-23T00:36:09.289Z',
    'date_to': '2024-12-23T22:31:09.289Z',
    'destination': '138322cf-e0ef-4448-abb6-fcc5db7ca98e',
    'is_favorite': true,
    'offers': [
      '2be22a44-d231-4ced-a567-11a1e3b96f70',
      '276594d9-6a44-4130-9dcc-a800efdadd2c',
      '4beb5cdc-a245-429a-ae86-24eec2ee7d42'
    ],
    'type': 'bus'
  },
  {
    'id': '07d98dd6-2733-4716-a357-ad2c1f554d50',
    'basePrice': 3510,
    'date_from': '2024-12-24T09:09:09.289Z',
    'date_to': '2024-12-25T06:47:09.289Z',
    'destination': '70b1cf3a-a553-46a5-80d3-4063927f5067',
    'is_favorite': true,
    'offers': [
      '60cadf55-f07b-4ef2-939c-fa6a92d9de1a',
      'bfb79c1a-d407-4c0a-9f81-5b765504692f'
    ],
    'type': 'check-in'
  },
  {
    'id': '8438321d-e91f-44ca-8687-41fd083d04d1',
    'basePrice': 8362,
    'date_from': '2024-12-26T00:06:09.289Z',
    'date_to': '2024-12-28T00:20:09.289Z',
    'destination': '7e96ad24-14ae-40c8-9b82-f980b3f0026c',
    'is_favorite': true,
    'offers': [
      '99d86e0f-c27a-46d0-8185-22a342edb4b5'
    ],
    'type': 'restaurant'
  },
  {
    'id': '4340a7f2-fc8f-4a10-8afb-8ec4ca330774',
    'basePrice': 6913,
    'date_from': '2024-12-29T23:05:09.289Z',
    'date_to': '2024-12-30T13:38:09.289Z',
    'destination': '138322cf-e0ef-4448-abb6-fcc5db7ca98e',
    'is_favorite': true,
    'offers': [
      '6e00fee0-dcf9-45e8-b3a4-9ac6057b2ab1',
      'f7f9ff7e-3d7c-4315-b941-fd2efca3aa5f'
    ],
    'type': 'taxi'
  },
  {
    'id': 'd366b184-1330-4f00-83f8-f1d8c1d4c0de',
    'basePrice': 4947,
    'date_from': '2024-12-31T23:22:09.289Z',
    'date_to': '2025-01-02T07:28:09.289Z',
    'destination': '003430c4-775c-492e-853b-fa87fb4d8f94',
    'is_favorite': false,
    'offers': [
      '4beb5cdc-a245-429a-ae86-24eec2ee7d42'
    ],
    'type': 'bus'
  },
  {
    'id': '0aa0ce12-578a-4c31-9240-798648541efa',
    'basePrice': 2436,
    'date_from': '2025-01-02T20:37:09.289Z',
    'date_to': '2025-01-04T05:55:09.289Z',
    'destination': '84c94673-9399-4e26-a743-5290f6d7efd2',
    'is_favorite': true,
    'offers': [
      '51dd8540-4616-4298-89fb-cc16e346aaf5',
      '38763783-864f-4fdc-a81a-2d0cfaedc9af',
      '5d9f2064-09db-4700-bb01-6b807244ec6d'
    ],
    'type': 'flight'
  },
  {
    'id': '1e59705a-7fb0-4984-9b6e-ddd6cf8ecd1d',
    'basePrice': 1468,
    'date_from': '2025-01-04T20:40:09.289Z',
    'date_to': '2025-01-06T05:05:09.289Z',
    'destination': 'd7559a1f-aacc-45b5-8d4a-4c7514e55bde',
    'is_favorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': '77aac86e-fc40-4910-89a5-38e788269e31',
    'basePrice': 8405,
    'date_from': '2025-01-08T00:44:09.289Z',
    'date_to': '2025-01-08T08:20:09.289Z',
    'destination': '51d47b97-8c2a-449e-8286-a2a85a17c5ac',
    'is_favorite': false,
    'offers': [
      '2da8a33e-44c7-4f95-92ad-e3522d159b3d',
      '16a2d5fb-89c4-4bed-bab0-5f43b6357c68',
      '51dd8540-4616-4298-89fb-cc16e346aaf5',
      '38763783-864f-4fdc-a81a-2d0cfaedc9af',
      '5d9f2064-09db-4700-bb01-6b807244ec6d'
    ],
    'type': 'flight'
  },
  {
    'id': '7472915d-679d-48d7-9954-a32318b98be0',
    'basePrice': 5074,
    'date_from': '2025-01-09T03:44:09.289Z',
    'date_to': '2025-01-10T10:29:09.289Z',
    'destination': '6fd5cef9-33b0-4331-9ee8-13b2cc0cc30d',
    'is_favorite': true,
    'offers': [
      '8b31c844-db81-4a5c-b1b9-d4b642ac23dd',
      '400cb042-e4c9-4911-8f0d-9db319ef9635',
      '0d26d66f-bfcc-473d-88ff-0d7d7c0fe65b'
    ],
    'type': 'train'
  },
  {
    'id': 'b1b83065-a00e-410f-8259-42264f0a6803',
    'basePrice': 2418,
    'date_from': '2025-01-11T09:46:09.289Z',
    'date_to': '2025-01-12T23:54:09.289Z',
    'destination': '003430c4-775c-492e-853b-fa87fb4d8f94',
    'is_favorite': false,
    'offers': [
      '400cb042-e4c9-4911-8f0d-9db319ef9635',
      '0d26d66f-bfcc-473d-88ff-0d7d7c0fe65b'
    ],
    'type': 'train'
  }
];

const getRandomPoint = getRandomElement(mockPoints); //Функция-обертка, возвращающая getRandomArrayElement ОДНОГО ПОИНТА!!!

export {getRandomPoint};

