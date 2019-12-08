import mock from 'utils/mock';

mock.onGet('/api/userprofile').reply(200, {
    UserProfile: {
      "uid" : "qaMT6z4mDWZEovaU7XWDMyvwWJp2",
      "address" : "2800 Chestnut St.",
      "blurb" : "",
      "brokerlicense" : "01254853",
      "city" : "San Francisco",
      "company" : "Big Reality",
      "createdDate" : 1558402452727,
      "email" : "john.k.miller9211@yahoo.com",
      "fbookurl" : "",
      "firstname" : "John",
      "instaurl" : "",
      "lastLogin" : 1563242663343,
      "lastname" : "Miller",
      "license" : "30588LP9",
      "linurl" : "",
      "phone" : "4153625689",
      "picurl" : "/images/avatars/kpatel.png",
      "role" : "agent",
      "state" : "CA",
      "termsAccepted" : 1563242663361,
      "twitterurl" : "",
      "username" : "miller80",
      "website" : "",
      "zip" : "94109"
    } 
  });

  mock.onGet('/api/userprofile/notfications').reply(200, {
    notications: {
      "lastupdated" : 1558402453087,
      "news" : true,
      "securityEmails" : true,
      "surveys" : true,
      "systemEmails" : true,
      "tips" : false
    } 
  });