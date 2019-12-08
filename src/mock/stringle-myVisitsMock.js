import uuid from 'uuid/v1';
import mock from 'utils/mock';

mock.onGet('/api/myvisits').reply(200, {
    myVisits: [ 
      {
        "uid" : uuid(),
        "address" : "400 Market St.",
        "brokerlicense" : "01254853",
        "city" : "San Francisco",
        "company" : "Big Reality",
        "email" : "john.k.miller9211@yahoo.com",
        "firstname" : "John",
        "lastname" : "Miller",
        "license" : "30588LP9",
        "phone" : "4153625689",
        "picurl" : "/images/avatars/kpatel.png",
        "state" : "CA",
        "zip" : "94123",
        visitdatetime : 1560910511801,
        disclosures : true,
        loan : false,
        listPrice : 980000,
        mls: '89777LPL3'
      },
      {
        "uid" : uuid(),
        "address" : "2800 Chestnut St.",
        "brokerlicense" : "01254853",
        "city" : "San Francisco",
        "company" : "Small Reality",
        "email" : "smith.johnson@outlook.com",
        "firstname" : "Rick",
        "lastname" : "Johnson",
        "license" : "890PLO5E",
        "phone" : "4158963255",
        "picurl" : "/images/avatars/kpatel.png",
        "state" : "CA",
        "zip" : "94109",
        visitdatetime : 1560910511801,
        disclosures : false,
        loan : false,
        listPrice : 980000,
        mls: '733pl933'
      } 
  ]
  });

  mock.onGet('/api/listingSubmit').reply(200, {
    listingDetails: [ 
      {
        "uid" : uuid(),
        "address" : "400 Market St.",
        "brokerlicense" : "01254853",
        "city" : "San Francisco",
        "company" : "Big Reality",
        "email" : "john.k.miller9211@yahoo.com",
        "firstname" : "John",
        "lastname" : "Miller",
        "license" : "30588LP9",
        "phone" : "4153625689",
        "picurl" : "/images/avatars/kpatel.png",
        "state" : "CA",
        "zip" : "94123",
        visitdatetime : 1560910511801,
        disclosures : true,
        loan : false,
        listPrice : 980000
      }
  ]
  });

  mock.onGet('/api/visit/1').reply(200, {
    visitDetails:
      {
        "uid" : uuid(),
        "address" : "400 Market St.",
        "brokerlicense" : "01254853",
        "city" : "San Francisco",
        "company" : "Big Reality",
        "email" : "john.k.miller9211@yahoo.com",
        "firstname" : "John",
        "lastname" : "Miller",
        "license" : "30588LP9",
        "phone" : "4153625689",
        "state" : "CA",
        "zip" : "94123",
        visitdatetime : 1560910511801,
        disclosures : true,
        loan : false,
        listPrice : 980000,
        mls: '897PLKO009'
      }
  });