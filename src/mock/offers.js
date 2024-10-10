//import { getRandomArrayElement } from '../utils.js';
//import { TYPE, OFFERS } from '../const.js';

const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': '3e881377-3fbc-4a2a-a6e0-44af86a60cc2',
        'title': 'Upgrade to a business class',
        'price': 179
      },
      {
        'id': '472d68cb-4eea-49d8-90a1-0a407f0e75a8',
        'title': 'Choose the radio station',
        'price': 103
      },
      {
        'id': 'f2d80432-bb7b-40e7-bb55-b15318915e89',
        'title': 'Choose temperature',
        'price': 181
      },
      {
        'id': '6e00fee0-dcf9-45e8-b3a4-9ac6057b2ab1',
        'title': 'Drive quickly, I\'m in a hurry',
        'price': 83
      },
      {
        'id': 'f7f9ff7e-3d7c-4315-b941-fd2efca3aa5f',
        'title': 'Drive slowly',
        'price': 146
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': '2be22a44-d231-4ced-a567-11a1e3b96f70',
        'title': 'Infotainment system',
        'price': 169
      },
      {
        'id': '276594d9-6a44-4130-9dcc-a800efdadd2c',
        'title': 'Order meal',
        'price': 179
      },
      {
        'id': '4beb5cdc-a245-429a-ae86-24eec2ee7d42',
        'title': 'Choose seats',
        'price': 47
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': '8b31c844-db81-4a5c-b1b9-d4b642ac23dd',
        'title': 'Book a taxi at the arrival point',
        'price': 37
      },
      {
        'id': '400cb042-e4c9-4911-8f0d-9db319ef9635',
        'title': 'Order a breakfast',
        'price': 167
      },
      {
        'id': '0d26d66f-bfcc-473d-88ff-0d7d7c0fe65b',
        'title': 'Wake up at a certain time',
        'price': 100
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': '624c8521-d65b-42de-a20e-1d6476bc6fab',
        'title': 'Choose meal',
        'price': 156
      },
      {
        'id': '2da8a33e-44c7-4f95-92ad-e3522d159b3d',
        'title': 'Choose seats',
        'price': 41
      },
      {
        'id': '16a2d5fb-89c4-4bed-bab0-5f43b6357c68',
        'title': 'Upgrade to comfort class',
        'price': 45
      },
      {
        'id': '51dd8540-4616-4298-89fb-cc16e346aaf5',
        'title': 'Upgrade to business class',
        'price': 64
      },
      {
        'id': '38763783-864f-4fdc-a81a-2d0cfaedc9af',
        'title': 'Add luggage',
        'price': 150
      },
      {
        'id': '5d9f2064-09db-4700-bb01-6b807244ec6d',
        'title': 'Business lounge',
        'price': 128
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': 'cd30f8b8-f859-4442-b279-2ed167e0213f',
        'title': 'Choose the time of check-in',
        'price': 47
      },
      {
        'id': '8fb141ff-24a0-4898-81d1-c55bdc5498ab',
        'title': 'Choose the time of check-out',
        'price': 184
      },
      {
        'id': 'caf57f37-09ed-4db0-a2a9-3c3c0bb8f60e',
        'title': 'Add breakfast',
        'price': 186
      },
      {
        'id': '60cadf55-f07b-4ef2-939c-fa6a92d9de1a',
        'title': 'Laundry',
        'price': 44
      },
      {
        'id': 'bfb79c1a-d407-4c0a-9f81-5b765504692f',
        'title': 'Order a meal from the restaurant',
        'price': 178
      }
    ]
  },
  {
    'type': 'sightseeing',
    'offers': []
  },
  {
    'type': 'ship',
    'offers': [
      {
        'id': '91314df0-bbc8-4c77-88e5-8cfbdc05df9f',
        'title': 'Choose meal',
        'price': 148
      },
      {
        'id': '44937bea-6614-428d-b14f-1e825b73d919',
        'title': 'Choose seats',
        'price': 165
      },
      {
        'id': 'cc292862-2533-4fb2-a0c5-d3df56a22fb6',
        'title': 'Upgrade to comfort class',
        'price': 68
      },
      {
        'id': 'dcda3800-8d92-452a-952b-d2dfbde77e7f',
        'title': 'Upgrade to business class',
        'price': 133
      },
      {
        'id': '6b618816-5d54-44b8-a6ff-8c829f432238',
        'title': 'Add luggage',
        'price': 79
      },
      {
        'id': '83cec865-501b-4d4c-9611-25d70e33e8d6',
        'title': 'Business lounge',
        'price': 100
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': '88cd908d-04f9-4ca9-9f45-a9f4f042d572',
        'title': 'With automatic transmission',
        'price': 149
      },
      {
        'id': 'b8a77d60-8225-4a88-aea7-6730c56d780d',
        'title': 'With air conditioning',
        'price': 43
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': '61bffe81-b851-4e7a-83be-8d1ac7c891ef',
        'title': 'Choose live music',
        'price': 42
      },
      {
        'id': '99d86e0f-c27a-46d0-8185-22a342edb4b5',
        'title': 'Choose VIP area',
        'price': 62
      }
    ]
  }
];

export {mockOffers};


