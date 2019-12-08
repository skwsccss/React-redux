import uuid from 'uuid/v1';

import mock from 'utils/mock';

mock.onGet('/api/listingsdetails/1').reply(200, {
    listing: {
        id: uuid(),
        "accesscode" : "79d2fde8300eaa8ca07da6130efe8633fde94f1e",
        "city" : "San Francisco",
        "client" : "",
        "clientEmail" : "kpatel@amsiemail.com",
        "county" : "San Francisco County",
        "createdDate" : 1560910511801,
        "lastUpdated" : 1560910465758,
        "listPrice" : 980000,
        "location" : {
          "googlePlaceID" : "ChIJkcbTU-6AhYARtWiE-tSUsRU",
          "lat" : 37.7994053,
          "lng" : -122.41510619999997,
          "url" : "https://maps.google.com/?q=66+Macondray+Ln,+San+Francisco,+CA+94133,+USA&ftid=0x808580ee53d3c691:0x15b194d4fa8468b5"
        },
        "mls" : "12345678",
        "name" : "66 Macondray Lane",
        "neigborhood" : "Russian Hill",
        "offerAccepted" : false,
        "offers" : [],
        "priceHistory" : [ {
          "date" : 1560910511791,
          "price" : 980000
        } ],
        "recentActivity" : [ {
          "date" : 1561330233519,
          "description" : "You have received an new offer for 66 Macondray Ln",
          "title" : "Offer Received",
          "type" : "oReceived"
        } ],
        "role" : "seller",
        "state" : "CA",
        "status" : "active",
        "street" : "66 Macondray Ln",
        "toDo" : [ {
          "assigned" : "agent",
          "docReq" : false,
          "number" : 1,
          "pending" : true,
          "task" : "Identify dates for the open house."
        } ],
        "userId" : "qaMT6z4mDWZEovaU7XWDMyvwWJp2",
        "zip" : "94133",
        visitors: [
            {
              uid: uuid(),
              needsLoan: false,
              isAgent: true,
              fName: "Sam",
              lName: "Smith",
              email: "Sam.Smith@gmail.com",
              phone: "(415) 778-0094",
              timeStamp: 1569902400,
              wantsDisclosure: false
            },
            {
              uid: uuid(),
              needsLoan: false,
              isAgent: false,
              fName: "Rick",
              lName: "Johnson",
              email: "rjohnson@yahoo.com",
              phone: "(510) 889-6433",
              timeStamp: 1568902400,
              wantsDisclosure: false
            }
          ],
      }
  });

  mock.onGet('/api/listings').reply(200, {
    listings: [
        {
          "id": uuid(),
          "totalVisits": 4,
          "accesscode" : "79d2fde8300eaa8ca07da6130efe8633fde94f1e",
          "city" : "San Francisco",
          "client" : "",
          "clientEmail" : "kpatel@amsiemail.com",
          "county" : "San Francisco County",
          "createdDate" : 1560910511801,
          "lastUpdated" : 1560910465758,
          "listPrice" : 980000,
          "location" : {
            "googlePlaceID" : "ChIJkcbTU-6AhYARtWiE-tSUsRU",
            "lat" : 37.7994053,
            "lng" : -122.41510619999997,
            "url" : "https://maps.google.com/?q=66+Macondray+Ln,+San+Francisco,+CA+94133,+USA&ftid=0x808580ee53d3c691:0x15b194d4fa8468b5"
          },
          "mls" : "12345678",
          "name" : "66 Macondray Lane",
          "neigborhood" : "Russian Hill",
          "offerAccepted" : false,
          "offers" : [ "-Li5XLoHfN8odBGXtVUs" ],
          "priceHistory" : [ {
            "date" : 1560910511791,
            "price" : 980000
          } ],
          "recentActivity" : [ {
            "date" : 1561330233519,
            "description" : "You have received an new offer for 66 Macondray Ln",
            "title" : "Offer Received",
            "type" : "oReceived"
          } ],
          "role" : "seller",
          "state" : "CA",
          "status" : "closed",
          "street" : "66 Macondray Ln",
          "toDo" : [ {
            "assigned" : "agent",
            "docReq" : false,
            "number" : 1,
            "pending" : true,
            "task" : "Identify dates for the open house."
          } ],
          "userId" : "qaMT6z4mDWZEovaU7XWDMyvwWJp2",
          "zip" : "94133"
        },
        {
          "id": uuid(),
          "totalVisits": 9,
          "accesscode" : "79d2fde8300eaa8ca07da6130efe8633fde94f1e",
          "city" : "San Francisco",
          "client" : "",
          "clientEmail" : "kpatel@amsiemail.com",
          "county" : "San Francisco County",
          "createdDate" : 1560910511801,
          "lastUpdated" : 1560910465758,
          "listPrice" : 980000,
          "location" : {
            "googlePlaceID" : "ChIJkcbTU-6AhYARtWiE-tSUsRU",
            "lat" : 37.7994053,
            "lng" : -122.41510619999997,
            "url" : "https://maps.google.com/?q=66+Macondray+Ln,+San+Francisco,+CA+94133,+USA&ftid=0x808580ee53d3c691:0x15b194d4fa8468b5"
          },
          "mls" : "afab333",
          "name" : "New Home Sale",
          "neigborhood" : "Russian Hill",
          "offerAccepted" : false,
          "offers" : [ "-Li5XLoHfN8odBGXtVUs" ],
          "priceHistory" : [ {
            "date" : 1560910511791,
            "price" : 980000
          } ],
          "recentActivity" : [ {
            "date" : 1561330233519,
            "description" : "You have received an new offer for 66 Macondray Ln",
            "title" : "Offer Received",
            "type" : "oReceived"
          } ],
          "role" : "seller",
          "state" : "CA",
          "status" : "active",
          "street" : "334 Mission Blvd, Suite 1",
          "toDo" : [ {
            "assigned" : "agent",
            "docReq" : false,
            "number" : 1,
            "pending" : true,
            "task" : "Identify dates for the open house."
          } ],
          "userId" : "qaMT6z4mDWZEovaU7XWDMyvwWJp2",
          "zip" : "94133"
        }
      ]
  });