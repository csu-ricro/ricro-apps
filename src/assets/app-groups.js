import IconAtom from 'mdi-material-ui/Atom';
import IconBook from 'mdi-material-ui/Book';
import IconFolderOpen from 'mdi-material-ui/FolderOpen';
import IconForum from 'mdi-material-ui/Forum';
import IconSchool from 'mdi-material-ui/School';
import IconSignatureFreehand from 'mdi-material-ui/SignatureFreehand';
import React from 'react';

export default [
  {
    name: 'Responsible Conduct of Research',
    shortName: 'RCR',
    apps: [
      {
        name: 'RCR Training',
        description: 'RCR online training and certification',
        icon: <IconSchool />,
        link: '/rcr/training/',
      },
      {
        name: 'RCR Repository',
        description: 'Resources related to various RCR topics',
        icon: <IconBook />,
        link: '/rcr/repository/',
      },
    ],
  },
  {
    name: 'Biosafety Office',
    shortName: 'BSO',
    apps: [
      {
        name: 'BSL3 File Repository',
        protected: true,
        description: 'Files related to BSL3 facilities and trianing',
        icon: <IconFolderOpen />,
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
        name: 'Nucleus',
        description: 'Manage users and app configurations',
        protected: true,
        icon: <IconAtom />,
        link: '/nucleus/',
      },
      {
        name: 'Email Signature Generator',
        description: 'Create a custom CSU branded email signature',
        protected: true,
        icon: <IconSignatureFreehand />,
        link: '/internal/email-signature-generator/',
      },
    ],
  },
];
