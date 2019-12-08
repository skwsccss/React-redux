/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import BarChartIcon from '@material-ui/icons/BarChart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/PersonOutlined';

export default [
  {
    title: 'STRINGLE',
    pages: [
      // {
      //   title: 'Dashboard',
      //   href: '/dashboard',
      //   icon: HomeIcon
      // },
      {
        title: 'Listings',
        href: '/listings',
        icon: ListAltIcon
      },
      {
        title: 'My Visits',
        href: '/myvisits',
        icon: BarChartIcon
      }
      // {
      //   title: 'Management',
      //   href: '/management',
      //   icon: BarChartIcon,
      //   children: [
      //     {
      //       title: 'Customers',
      //       href: '/management/customers'
      //     },
      //     {
      //       title: 'Customer Details',
      //       href: '/management/customers/1/summary'
      //     },
      //     {
      //       title: 'Projects',
      //       href: '/management/projects'
      //     },
      //     {
      //       title: 'Orders',
      //       href: '/management/orders'
      //     },
      //     {
      //       title: 'Order Details',
      //       href: '/management/orders/1'
      //     }
      //   ]
      // },
      // {
      //   title: 'Project',
      //   href: '/projects',
      //   icon: FolderIcon,
      //   children: [
      //     {
      //       title: 'Browse',
      //       href: '/projects'
      //     },
      //     {
      //       title: 'Create',
      //       href: '/projects/create'
      //     },
      //     {
      //       title: 'Overview',
      //       href: '/projects/1/overview'
      //     },
      //     {
      //       title: 'Files',
      //       href: '/projects/1/files'
      //     },
      //     {
      //       title: 'Activity',
      //       href: '/projects/1/activity'
      //     },
      //     {
      //       title: 'Subscribers',
      //       href: '/projects/1/subscribers'
      //     }
      //   ]
      // }
    ]
  },
  {
    title: 'ACCOUNT',
    pages: [
      {
        title: 'Profile',
        href: '/account',
        icon: PersonIcon
      }
    ]
  }
];
