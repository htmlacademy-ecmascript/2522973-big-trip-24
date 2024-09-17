import { getRandomArrayElement } from '../utils.js';
//import { TYPE, CITIES, OFFERS } from '../const.js';

const mockPoints = [
  {
    'id': '0d685664-4f88-42a5-9dc7-7bcdcc5f20d3',
    'basePrice': 60,
    'dateFrom': '2024-09-08T04:36:09.239Z',
    'dateTo': '2024-09-08T13:05:09.239Z',
    'destination': '36eb5b49-2cec-4834-87e7-c464e155c2d4',
    'isFavorite': false,
    'offers': [
      'fdec3690-03d4-437d-96ce-3beb5cd46988',
      '417d4d4e-8f10-4963-9156-b9b8998eb157'
    ],
    'type': 'drive'
  },
  {
    'id': 'd84bd54e-b2b8-43b6-b7bd-4620e7228c78',
    'basePrice': 6774,
    'dateFrom': '2024-09-10T09:06:09.239Z',
    'dateTo': '2024-09-12T07:58:09.239Z',
    'destination': 'd9e9fc03-d3c9-4f60-baed-e5106dbfe007',
    'isFavorite': false,
    'offers': [
      'fdec3690-03d4-437d-96ce-3beb5cd46988',
      '417d4d4e-8f10-4963-9156-b9b8998eb157'
    ],
    'type': 'drive'
  },
  {
    'id': 'cf78f6f1-89fa-4525-9b06-630f76085018',
    'basePrice': 2278,
    'dateFrom': '2024-09-13T18:59:09.239Z',
    'dateTo': '2024-09-14T15:54:09.239Z',
    'destination': 'f9bc02d8-df0d-45c6-89a3-efcf48289a39',
    'isFavorite': true,
    'offers': [
      '253d0cac-ef24-48eb-8123-ea44cce78948',
      'e3a256a9-423a-44f3-8953-fb771f6272ce',
      '47987680-6915-4dfa-b219-360d004bcdd5',
      'ba7e1ad7-223a-4a88-bfd5-123b7ea84741',
      'f5e972a5-0868-4dcc-b744-832185567ff4',
      'a73620d0-5978-4568-8a94-f6c83be59056'
    ],
    'type': 'ship'
  },
  {
    'id': '6d9e8075-ad19-4565-9872-ffd7f574d352',
    'basePrice': 374,
    'dateFrom': '2024-09-15T13:16:09.239Z',
    'dateTo': '2024-09-17T08:39:09.239Z',
    'destination': '6b7d7f4e-739e-46e3-a7bc-8bde066d1e40',
    'isFavorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '188f3207-7aeb-406b-9e5e-6924dd4fb7bd',
    'basePrice': 7569,
    'dateFrom': '2024-09-18T21:15:09.239Z',
    'dateTo': '2024-09-19T11:01:09.239Z',
    'destination': 'a9670654-21d6-4ccf-bde9-e1fa264f46cb',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '725626fd-6452-46d6-bd29-be7db7c1b245',
    'basePrice': 6727,
    'dateFrom': '2024-09-20T14:32:09.239Z',
    'dateTo': '2024-09-21T14:52:09.239Z',
    'destination': '7e34b1b2-15ea-4f47-a0d1-e35a233774f2',
    'isFavorite': true,
    'offers': [
      'b839e0ce-46b4-4cfa-8953-e6957874ebd3',
      '0e10983a-ce28-4a91-9e6c-d7042d5bcd7d',
      '5cd19fae-7e59-454c-a390-be20c182effd'
    ],
    'type': 'flight'
  },
  {
    'id': '6d033118-fbab-4dcc-bb8e-750c0a5bb523',
    'basePrice': 3008,
    'dateFrom': '2024-09-23T15:34:09.239Z',
    'dateTo': '2024-09-23T22:57:09.239Z',
    'destination': '6b7d7f4e-739e-46e3-a7bc-8bde066d1e40',
    'isFavorite': false,
    'offers': [
      '776b2af8-48b5-49ad-bf4c-bbcee0139e1c',
      'a2611bbb-1e05-4670-93ba-b7827c45b2f3'
    ],
    'type': 'check-in'
  },
  {
    'id': '87fc6ece-f0ac-4b39-81b5-244a94865004',
    'basePrice': 9246,
    'dateFrom': '2024-09-25T06:52:09.239Z',
    'dateTo': '2024-09-26T05:21:09.239Z',
    'destination': 'a9670654-21d6-4ccf-bde9-e1fa264f46cb',
    'isFavorite': false,
    'offers': [
      '9badcbbd-1e40-4a42-b696-3da3052bc571',
      '32ac83c4-7a14-4f4d-aeff-7a94d00bc202',
      '2e554d1d-7ed4-4db5-983a-366d7fe120e0'
    ],
    'type': 'bus'
  },
  {
    'id': 'c1d05f2c-8a64-4f7b-a7f0-8bba0ebec169',
    'basePrice': 7028,
    'dateFrom': '2024-09-26T16:29:09.239Z',
    'dateTo': '2024-09-27T10:59:09.239Z',
    'destination': 'd9e9fc03-d3c9-4f60-baed-e5106dbfe007',
    'isFavorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': 'ce0c9436-4245-4994-b257-d986f8900386',
    'basePrice': 6476,
    'dateFrom': '2024-09-27T19:33:09.239Z',
    'dateTo': '2024-09-29T02:15:09.239Z',
    'destination': 'a9670654-21d6-4ccf-bde9-e1fa264f46cb',
    'isFavorite': true,
    'offers': [
      'fdec3690-03d4-437d-96ce-3beb5cd46988',
      '417d4d4e-8f10-4963-9156-b9b8998eb157'
    ],
    'type': 'drive'
  },
  {
    'id': 'e9cfcd4a-e4e2-4e66-805c-5fb9057b3f0b',
    'basePrice': 4321,
    'dateFrom': '2024-09-30T17:50:09.239Z',
    'dateTo': '2024-10-02T01:48:09.239Z',
    'destination': 'd26b78f2-6da4-49a2-9e70-15646eb228e0',
    'isFavorite': false,
    'offers': [
      'ff5bb648-e5bc-4ebf-9f3a-67647118f765',
      '05437e62-aeae-4399-abab-548d0aa6befe'
    ],
    'type': 'restaurant'
  },
  {
    'id': 'e0061dbd-9844-4efb-91a5-d0610bab7a1f',
    'basePrice': 6414,
    'dateFrom': '2024-10-02T10:01:09.239Z',
    'dateTo': '2024-10-03T21:11:09.239Z',
    'destination': '7e34b1b2-15ea-4f47-a0d1-e35a233774f2',
    'isFavorite': true,
    'offers': [
      'a2611bbb-1e05-4670-93ba-b7827c45b2f3'
    ],
    'type': 'check-in'
  },
  {
    'id': 'fa6d2b97-c59a-4fdc-818c-36954aa281a7',
    'basePrice': 7229,
    'dateFrom': '2024-10-04T17:24:09.239Z',
    'dateTo': '2024-10-05T11:45:09.239Z',
    'destination': 'd9e9fc03-d3c9-4f60-baed-e5106dbfe007',
    'isFavorite': true,
    'offers': [
      '2e554d1d-7ed4-4db5-983a-366d7fe120e0'
    ],
    'type': 'bus'
  },
  {
    'id': '6d4158a7-8664-4989-91f5-0da781f24811',
    'basePrice': 6182,
    'dateFrom': '2024-10-07T10:53:09.239Z',
    'dateTo': '2024-10-09T05:46:09.239Z',
    'destination': 'a9670654-21d6-4ccf-bde9-e1fa264f46cb',
    'isFavorite': false,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': 'fff6b6c9-1bce-4267-84eb-9afd49ae14b8',
    'basePrice': 9377,
    'dateFrom': '2024-10-10T03:59:09.239Z',
    'dateTo': '2024-10-11T21:10:09.239Z',
    'destination': 'a9670654-21d6-4ccf-bde9-e1fa264f46cb',
    'isFavorite': true,
    'offers': [
      'ba7e1ad7-223a-4a88-bfd5-123b7ea84741',
      'f5e972a5-0868-4dcc-b744-832185567ff4',
      'a73620d0-5978-4568-8a94-f6c83be59056'
    ],
    'type': 'ship'
  },
  {
    'id': 'eaf7cd69-399e-44bd-82da-2997fa3e0e7a',
    'basePrice': 7972,
    'dateFrom': '2024-10-12T23:51:09.239Z',
    'dateTo': '2024-10-13T23:01:09.239Z',
    'destination': '68c7958d-37a6-41df-b563-38eb8d4cda75',
    'isFavorite': false,
    'offers': [
      'fdec3690-03d4-437d-96ce-3beb5cd46988',
      '417d4d4e-8f10-4963-9156-b9b8998eb157'
    ],
    'type': 'drive'
  },
  {
    'id': '6f6d74d1-bbc8-494f-85b4-0b54e412b87a',
    'basePrice': 4790,
    'dateFrom': '2024-10-14T18:27:09.239Z',
    'dateTo': '2024-10-15T06:14:09.239Z',
    'destination': '8a5e9c25-35e5-49ff-b3ba-ecde45919cb9',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '4a97801e-d477-4077-88ae-8a6d2da5d9a9',
    'basePrice': 7166,
    'dateFrom': '2024-10-15T22:19:09.239Z',
    'dateTo': '2024-10-17T14:12:09.239Z',
    'destination': 'a9670654-21d6-4ccf-bde9-e1fa264f46cb',
    'isFavorite': false,
    'offers': [
      '05437e62-aeae-4399-abab-548d0aa6befe'
    ],
    'type': 'restaurant'
  },
  {
    'id': 'f4f9a516-7956-4097-a144-d7feae96c353',
    'basePrice': 5237,
    'dateFrom': '2024-10-19T08:46:09.239Z',
    'dateTo': '2024-10-20T17:35:09.239Z',
    'destination': '6b7d7f4e-739e-46e3-a7bc-8bde066d1e40',
    'isFavorite': true,
    'offers': [
      'cc1e55e9-e7ca-4b96-a8f5-f8872adf8d96',
      '8c379b95-bf04-4e0b-ac27-af7dadc9cfd0'
    ],
    'type': 'taxi'
  },
  {
    'id': '247efdf7-b15f-43d0-a4d0-1ce94872f3f3',
    'basePrice': 8872,
    'dateFrom': '2024-10-21T12:56:09.239Z',
    'dateTo': '2024-10-22T08:43:09.239Z',
    'destination': 'd26b78f2-6da4-49a2-9e70-15646eb228e0',
    'isFavorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': '8cfd5929-62ef-4979-893d-55d7791d0520',
    'basePrice': 2011,
    'dateFrom': '2024-10-23T20:56:09.239Z',
    'dateTo': '2024-10-25T18:31:09.239Z',
    'destination': '36eb5b49-2cec-4834-87e7-c464e155c2d4',
    'isFavorite': true,
    'offers': [
      'b9a0d3c2-8ca1-4723-ae6d-401836c55af1'
    ],
    'type': 'train'
  },
  {
    'id': '77aebdaa-c06f-486e-8fcb-fc09562a14d1',
    'basePrice': 8633,
    'dateFrom': '2024-10-26T18:10:09.239Z',
    'dateTo': '2024-10-27T22:56:09.239Z',
    'destination': 'a9670654-21d6-4ccf-bde9-e1fa264f46cb',
    'isFavorite': true,
    'offers': [
      'e3a256a9-423a-44f3-8953-fb771f6272ce',
      '47987680-6915-4dfa-b219-360d004bcdd5',
      'ba7e1ad7-223a-4a88-bfd5-123b7ea84741',
      'f5e972a5-0868-4dcc-b744-832185567ff4',
      'a73620d0-5978-4568-8a94-f6c83be59056'
    ],
    'type': 'ship'
  },
  {
    'id': 'e474d26f-5414-4860-b0c3-bab975b1c9ec',
    'basePrice': 5081,
    'dateFrom': '2024-10-29T09:15:09.239Z',
    'dateTo': '2024-10-29T17:24:09.239Z',
    'destination': '8a5e9c25-35e5-49ff-b3ba-ecde45919cb9',
    'isFavorite': false,
    'offers': [
      '32ac83c4-7a14-4f4d-aeff-7a94d00bc202',
      '2e554d1d-7ed4-4db5-983a-366d7fe120e0'
    ],
    'type': 'bus'
  },
  {
    'id': 'a59fb3a2-2cf2-4412-b95a-16e8b43d9440',
    'basePrice': 9345,
    'dateFrom': '2024-10-31T15:57:09.239Z',
    'dateTo': '2024-11-02T15:21:09.239Z',
    'destination': '36eb5b49-2cec-4834-87e7-c464e155c2d4',
    'isFavorite': true,
    'offers': [
      '754d4038-22ec-4ae4-90c9-7b53b9d846cb',
      '37f742d3-cf91-47d9-9089-156c62569bdc',
      '776b2af8-48b5-49ad-bf4c-bbcee0139e1c',
      'a2611bbb-1e05-4670-93ba-b7827c45b2f3'
    ],
    'type': 'check-in'
  },
  {
    'id': '4724a5ea-5c4d-4eb3-9ac1-d5d2f85c75f1',
    'basePrice': 7989,
    'dateFrom': '2024-11-03T04:36:09.239Z',
    'dateTo': '2024-11-04T01:37:09.239Z',
    'destination': '8a5e9c25-35e5-49ff-b3ba-ecde45919cb9',
    'isFavorite': true,
    'offers': [
      '9badcbbd-1e40-4a42-b696-3da3052bc571',
      '32ac83c4-7a14-4f4d-aeff-7a94d00bc202',
      '2e554d1d-7ed4-4db5-983a-366d7fe120e0'
    ],
    'type': 'bus'
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints); //Функция-обертка, возвращающая getRandomArrayElement ОДНОГО ПОИНТА!!!
}
export {getRandomPoint};

