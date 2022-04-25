import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {useRouter} from 'next/router';

const menuItems = [
    {
        href: '/vc-wallet',
        title: 'VC Wallet'
    },
    {
        href: '/marketplace',
        title: 'Marketplace'
    },
    {
        href: '/services',
        title: 'Services'
    },
    {
        href: '/issue-a-vc',
        title: 'Issue a VC'
    },
    {
        href: '/verifier',
        title: 'Verifier'
    },
    {
        href: '/event-logs',
        title: 'Event Logs'
    }
];

const SidePanel = (): JSX.Element => {
    const router = useRouter();

    return (
        <Panel>
            <nav>
                <ul>
                    {menuItems.map(({href, title}) => (
                        <li key={title}>
                            <Link href={href}>
                                <a className={`${
                                    router.asPath === href ? 'active-link' : ''
                                }`}>
                                    {title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Panel>
    );
};

const Panel = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  height: 100%;
  padding-top: 120px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(179.18deg, #2A3F7E 6.96%, #696DE4 174.88%);

  li {
    list-style: none;
    padding: 12px 0;
    
    a {
      color: #0BCDED;
      text-decoration: none;
      transition: all .2s;
      
      &:hover {
        color: white;
      }
    }
  }
`;

export default SidePanel;
