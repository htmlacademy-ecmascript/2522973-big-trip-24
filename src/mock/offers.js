//import { getRandomArrayElement } from '../utils.js';
//import { TYPE, OFFERS } from '../const.js';

const mockOffers = [
  {
    'type': 'taxi',
    'offers': [
      {
        'id': '740a41fa-f027-4a53-adff-58d2b28d5ebd',
        'title': 'Upgrade to a business class',
        'price': 36
      },
      {
        'id': 'a12e7bfc-6420-4184-b192-fb5e960752cd',
        'title': 'Choose the radio station',
        'price': 122
      },
      {
        'id': 'c71d2c6c-ce6b-47b9-b687-d210ed14c09f',
        'title': 'Choose temperature',
        'price': 97
      },
      {
        'id': 'cc1e55e9-e7ca-4b96-a8f5-f8872adf8d96',
        'title': 'Drive quickly, I\'m in a hurry',
        'price': 74
      },
      {
        'id': '8c379b95-bf04-4e0b-ac27-af7dadc9cfd0',
        'title': 'Drive slowly',
        'price': 143
      }
    ]
  },
  {
    'type': 'bus',
    'offers': [
      {
        'id': '9badcbbd-1e40-4a42-b696-3da3052bc571',
        'title': 'Infotainment system',
        'price': 185
      },
      {
        'id': '32ac83c4-7a14-4f4d-aeff-7a94d00bc202',
        'title': 'Order meal',
        'price': 60
      },
      {
        'id': '2e554d1d-7ed4-4db5-983a-366d7fe120e0',
        'title': 'Choose seats',
        'price': 167
      }
    ]
  },
  {
    'type': 'train',
    'offers': [
      {
        'id': '2251f26f-ebba-4f3f-ac2a-fe5a3ff5bbfb',
        'title': 'Book a taxi at the arrival point',
        'price': 92
      },
      {
        'id': 'b4a9180f-fe2b-45a4-8a95-b4dce6dbf222',
        'title': 'Order a breakfast',
        'price': 195
      },
      {
        'id': 'b9a0d3c2-8ca1-4723-ae6d-401836c55af1',
        'title': 'Wake up at a certain time',
        'price': 179
      }
    ]
  },
  {
    'type': 'flight',
    'offers': [
      {
        'id': 'f33cba70-44f4-49e2-8b48-82778e76ba51',
        'title': 'Choose meal',
        'price': 45
      },
      {
        'id': '376a6e68-2721-4f37-bb3b-a577b48db7c9',
        'title': 'Choose seats',
        'price': 69
      },
      {
        'id': '1d75be2c-dc40-4d66-a2ab-1163af258996',
        'title': 'Upgrade to comfort class',
        'price': 36
      },
      {
        'id': 'b839e0ce-46b4-4cfa-8953-e6957874ebd3',
        'title': 'Upgrade to business class',
        'price': 200
      },
      {
        'id': '0e10983a-ce28-4a91-9e6c-d7042d5bcd7d',
        'title': 'Add luggage',
        'price': 49
      },
      {
        'id': '5cd19fae-7e59-454c-a390-be20c182effd',
        'title': 'Business lounge',
        'price': 33
      }
    ]
  },
  {
    'type': 'check-in',
    'offers': [
      {
        'id': '5b4eb446-15cc-455c-bcc5-d0b8413a36b2',
        'title': 'Choose the time of check-in',
        'price': 63
      },
      {
        'id': '754d4038-22ec-4ae4-90c9-7b53b9d846cb',
        'title': 'Choose the time of check-out',
        'price': 109
      },
      {
        'id': '37f742d3-cf91-47d9-9089-156c62569bdc',
        'title': 'Add breakfast',
        'price': 90
      },
      {
        'id': '776b2af8-48b5-49ad-bf4c-bbcee0139e1c',
        'title': 'Laundry',
        'price': 103
      },
      {
        'id': 'a2611bbb-1e05-4670-93ba-b7827c45b2f3',
        'title': 'Order a meal from the restaurant',
        'price': 124
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
        'id': '253d0cac-ef24-48eb-8123-ea44cce78948',
        'title': 'Choose meal',
        'price': 54
      },
      {
        'id': 'e3a256a9-423a-44f3-8953-fb771f6272ce',
        'title': 'Choose seats',
        'price': 171
      },
      {
        'id': '47987680-6915-4dfa-b219-360d004bcdd5',
        'title': 'Upgrade to comfort class',
        'price': 37
      },
      {
        'id': 'ba7e1ad7-223a-4a88-bfd5-123b7ea84741',
        'title': 'Upgrade to business class',
        'price': 136
      },
      {
        'id': 'f5e972a5-0868-4dcc-b744-832185567ff4',
        'title': 'Add luggage',
        'price': 191
      },
      {
        'id': 'a73620d0-5978-4568-8a94-f6c83be59056',
        'title': 'Business lounge',
        'price': 60
      }
    ]
  },
  {
    'type': 'drive',
    'offers': [
      {
        'id': 'fdec3690-03d4-437d-96ce-3beb5cd46988',
        'title': 'With automatic transmission',
        'price': 48
      },
      {
        'id': '417d4d4e-8f10-4963-9156-b9b8998eb157',
        'title': 'With air conditioning',
        'price': 117
      }
    ]
  },
  {
    'type': 'restaurant',
    'offers': [
      {
        'id': 'ff5bb648-e5bc-4ebf-9f3a-67647118f765',
        'title': 'Choose live music',
        'price': 139
      },
      {
        'id': '05437e62-aeae-4399-abab-548d0aa6befe',
        'title': 'Choose VIP area',
        'price': 192
      }
    ]
  }
];

export {mockOffers};


