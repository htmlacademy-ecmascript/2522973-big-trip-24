const mockDestinations = [
  {
    'id': 'd9e9fc03-d3c9-4f60-baed-e5106dbfe007',
    'description': 'Paris - is a wonderful city!',
    'name': 'Paris',
    'pictures': []
  },
  {
    'id': '6b7d7f4e-739e-46e3-a7bc-8bde066d1e40',
    'description': 'Venice - with a beautiful old town',
    'name': 'Venice',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/4.jpg',
        'description': 'Venice with an embankment of a mighty river as a centre of attraction'
      }
    ]
  },
  {
    'id': 'a9670654-21d6-4ccf-bde9-e1fa264f46cb',
    'description': 'Frankfurt - with an embankment of a mighty river as a centre of attraction',
    'name': 'Frankfurt',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Frankfurt is a beautiful city'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/4.jpg',
        'description': 'Frankfurt with an embankment of a mighty river as a centre of attraction'
      }
    ]
  },
  {
    'id': 'f9bc02d8-df0d-45c6-89a3-efcf48289a39',
    'description': 'Oslo - in a middle of Europe',
    'name': 'Oslo',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/6.jpg',
        'description': 'Oslo with crowded streets'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/4.jpg',
        'description': 'Oslo is a beautiful city'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/14.jpg',
        'description': 'Oslo for those who value comfort and coziness'
      }
    ]
  },
  {
    'id': '36eb5b49-2cec-4834-87e7-c464e155c2d4',
    'description': 'Monaco - middle-eastern paradise',
    'name': 'Monaco',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/3.jpg',
        'description': 'Monaco for those who value comfort and coziness'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/2.jpg',
        'description': 'Monaco middle-eastern paradise'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/2.jpg',
        'description': 'Monaco with a beautiful old town'
      }
    ]
  },
  {
    'id': '68c7958d-37a6-41df-b563-38eb8d4cda75',
    'description': 'Berlin - a true asian pearl',
    'name': 'Berlin',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/13.jpg',
        'description': 'Berlin famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/8.jpg',
        'description': 'Berlin is a beautiful city'
      }
    ]
  },
  {
    'id': 'f4bf1e21-1019-4532-889a-8f0ec673be63',
    'description': 'Barcelona - famous for its crowded street markets with the best street food in Asia',
    'name': 'Barcelona',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/8.jpg',
        'description': 'Barcelona a perfect place to stay with a family'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/11.jpg',
        'description': 'Barcelona is a beautiful city'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/1.jpg',
        'description': 'Barcelona in a middle of Europe'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/20.jpg',
        'description': 'Barcelona for those who value comfort and coziness'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/14.jpg',
        'description': 'Barcelona with crowded streets'
      }
    ]
  },
  {
    'id': '7e34b1b2-15ea-4f47-a0d1-e35a233774f2',
    'description': 'Helsinki - with an embankment of a mighty river as a centre of attraction',
    'name': 'Helsinki',
    'pictures': []
  },
  {
    'id': 'd26b78f2-6da4-49a2-9e70-15646eb228e0',
    'description': 'Geneva - a perfect place to stay with a family',
    'name': 'Geneva',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/4.jpg',
        'description': 'Geneva full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/11.jpg',
        'description': 'Geneva full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Geneva for those who value comfort and coziness'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/16.jpg',
        'description': 'Geneva is a beautiful city'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/6.jpg',
        'description': 'Geneva full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    'id': '8a5e9c25-35e5-49ff-b3ba-ecde45919cb9',
    'description': 'Rotterdam - full of of cozy canteens where you can try the best coffee in the Middle East',
    'name': 'Rotterdam',
    'pictures': [
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/9.jpg',
        'description': 'Rotterdam with an embankment of a mighty river as a centre of attraction'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/13.jpg',
        'description': 'Rotterdam with crowded streets'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/3.jpg',
        'description': 'Rotterdam famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://24.objects.htmlacademy.pro/static/destinations/15.jpg',
        'description': 'Rotterdam in a middle of Europe'
      }
    ]
  }
];

export { mockDestinations };

