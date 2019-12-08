import uuid from 'uuid/v1';
import moment from 'moment';

import mock from 'utils/mock';

mock.onGet('/api/invoices').reply(200, {
  invoices: []
});

mock.onGet('/api/invoices/1').reply(200, {
  invoice: {
    id: uuid(),
    due_date: moment(),
    issue_date: moment().add(15, 'days'),
    ref: 'STRNGLE-9483',
    customer: {
      name: 'Tracey Herman',
      company: 'Big Realty',
      nzbn: '(707) 747-5696',
      address: '850 Southampton Rd, Benicia, Ca 94513'
    },
    products: [
      {
        id: uuid(),
        desc: 'Strinlge Premium Package',
        value: '9.99'
      }
    ],
    subtotal: '9.99',
    taxes: '0.00',
    total: '9.99',
    currency: '$',
    created_at: moment()
  }
});
