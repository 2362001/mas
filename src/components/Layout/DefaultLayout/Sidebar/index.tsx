import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = {
  root: {
    width: 250,
    height: 900,
    boxSizing: 'border-box',
    borderTop : '1px solid #fff',
    color : '#fff',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: '/',
        expandAriaLabel: 'Expand Home section',
        icon : 'Home',
        key :'key0',
        // links: [
        //   {
        //     name: 'Activity',
        //     url: 'http://msn.com',
        //     key: 'key1',
        //     target: '_blank',
        //   },
        //   {
        //     name: 'MSN',
        //     url: 'http://msn.com',
        //     disabled: true,
        //     key: 'key2',
        //     target: '_blank',
        //   },
        // ],
        isExpanded: true,
      },
      {
        name: 'Alert List',
        url: '/alert',
        key: 'key4',
        icon:'Warning',
        isExpanded: false,
        target: '_blank',
      },
      {
        name: 'My Center',
        url: 'http://msn.com',
        key: 'key4',
        target: '_blank',
         links: [
          {
            name: 'My request and Provide',
            url: 'http://msn.com',
            key: 'key1',
            target: '_blank',
          },
          {
            name: 'My Create Alert',
            url: 'http://msn.com',
            key: 'key2',
            target: '_blank',
          },
          {
            name: 'My Response',
            url: 'http://msn.com',
            key: 'key9',
            target: '_blank',
          },
        ],
        isExpanded: true,

      },
      {
        name: 'Networks',
        icon:'BranchMerge',
        url: 'http://msn.com',
        key: 'key6',
      },
      {
        name: 'Report',
        icon:'BookmarkReport',
        url: 'http://msn.com',
        key: 'key7',
        target: '_blank',
      },
      {
        name: 'User Management',
        url: 'http://cnn.com',
        icon: 'UserSync',
        key: 'key8',
        target: '_blank',
      },
    ],
  },
];

const Sidebar: React.FunctionComponent = () => {
  return (
    <Nav
      // onLinkClick={_onLinkClick}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
      className='text-white'
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}

export default Sidebar