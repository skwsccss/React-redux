/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import OverviewView from './views/Overview';
import PresentationView from './views/Presentation';


const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   component: () => <Redirect to="/presentation" />
  // },
  {
    path: '/',
    component: PresentationView,
    exact: true,
  },
  {
    path: '/visit',
    component: AuthLayout,
    routes: [
      {
        path: '/visit/results',
        exact: true,
        component: lazy(() => import('views/VisitResults'))
      },
      {
        path: '/visit/submit',
        exact: true,
        component: lazy(() => import('views/VisitSubmit'))
      },
      {
        exact: true,
        component: lazy(() => import('views/Visit'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('views/Login'))
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('views/Register'))
      },
      {
        path: '/auth/forgotpassword',
        exact: true,
        component: lazy(() => import('views/ForgotPassword'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('views/Error401'))
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('views/Error404'))
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        path: '/errors/visit',
        exact: true,
        component: lazy(() => import('views/Error500'))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: lazy(() => import('views/Dashboard'))
      },
      {
        path: '/myvisits',
        exact: true,
        component: lazy(() => import('views/MyVisits'))
      },
      {
        path: '/myvisits/:id/details',
        exact: true,
        component: lazy(() => import('views/MyVisitsDetail'))
      },
      {
        path: '/listings/create',
        exact: true,
        component: lazy(() => import('views/ListingsCreate'))
      },
      {
        path: '/listings/:id',
        exact: true,
        component: lazy(() => import('views/ListingsDetails'))
      },
      {
        path: '/listings/:id/:tab',
        exact: true,
        component: lazy(() => import('views/ListingsDetails'))
      },
      {
        path: '/listings',
        exact: true,
        component: lazy(() => import('views/ListingsList'))
      },
      {
        path: '/listingsdetails',
        exact: true,
        component: lazy(() => import('views/ListingsManagementDetails'))
      },
      {
        path: '/listingsdetails/:id',
        exact: true,
        component: lazy(() => import('views/ListingsManagementDetails'))
      },
      {
        path: '/account',
        exact: true,
        component: lazy(() => import('views/Account'))
      },
      {
        path: '/account/:tab',
        exact: true,
        component: lazy(() => import('views/Account'))
      },
      {
        path: '/invoices/:id',
        exact: true,
        component: lazy(() => import('views/InvoiceDetails'))
      },
      {
        path: '/overview',
        exact: true,
        component: OverviewView
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
