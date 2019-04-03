import IconBookmark from 'mdi-material-ui/Bookmark';
import IconBookOpenPageVariant from 'mdi-material-ui/BookOpenPageVariant';
import IconFileDownload from 'mdi-material-ui/FileDownload';
import IconForum from 'mdi-material-ui/Forum';
import React from 'react';

export default [
  {
    name: 'Responsible Conduct of Research',
    shortName: 'RCR',
    apps: [
      {
        name: 'RCR Training',
        description: 'RCR online training and certification',
        icon: <IconBookOpenPageVariant />,
        protected: true,
        link: '/rcr/training/',
      },
      {
        name: 'RCR Repository',
        description: 'Resources related to various RCR topics',
        icon: <IconBookmark />,
        link: '/rcr/repository/',
      },
    ],
  },
  {
    name: 'Biosafety Office',
    shortName: 'BSO',
    apps: [
      {
        name: 'BSL3 Files',
        protected: true,
        description: 'Files related to BSL3 facilities and trianing',
        icon: <IconFileDownload />,
        link: '/bso/bsl3-files/',
      },
    ],
  },
  {
    name: 'Office of Sponsored Programs',
    shortName: 'OSP',
    apps: [
      {
        name: 'Protocol Status',
        protected: 'true',
        description: 'Request the status of a research protocol',
        icon: <IconForum />,
        link: '/protocol-status/',
      },
    ],
  },
  {
    name: 'Internal',
    shortName: null,
    apps: [
      {
        name: 'Email Signature Generator',
        description: 'Create a customized email signature',
        protected: true,
        icon: 'email',
        link: '/signature-generator/',
      },
    ],
  },
];
