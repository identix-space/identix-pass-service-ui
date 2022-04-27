import React, {useState, FC} from 'react';
import VCWalletIcon from '../../../../public/assets/vc-wallet-icon.svg';
import MarketplaceIcon from '../../../../public/assets/marketplace-icon.svg';
import ServicesIcon from '../../../../public/assets/services-icon.svg';
import IssueAVCIcon from '../../../../public/assets/issue-a-vc-icon.svg';
import VerifierIcon from '../../../../public/assets/verifier-icon.svg';
import EventLogsIcon from '../../../../public/assets/event-logs-icon.svg';
import styled from 'styled-components';
import Link from 'next/link';
import {useRouter} from 'next/router';

interface PanelProps {
    open: boolean;
}

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

const ChooseIcon: FC<{title: string}> = ({title}): JSX.Element => {
    switch (title) {
        case 'VC Wallet':
            return (
                <VCWalletIcon className="fill"/>
            );
        case 'Marketplace':
            return (
                <MarketplaceIcon className="stroke"/>
            );
        case 'Services':
            return (
                <ServicesIcon className="fill"/>
            );
        case 'Issue a VC':
            return (
                <IssueAVCIcon className="fillstroke"/>
            );
        case 'Verifier':
            return (
                <VerifierIcon className="fill"/>
            );
        case 'Event Logs':
            return (
                <EventLogsIcon className="stroke"/>
            );
        default:
            return (
                <></>
            );
    }
};

const SidePanel = (): JSX.Element => {
    const [opened, setOpened] = useState(false);
    const router = useRouter();

    return (
        <Panel open={opened}>
            <nav>
                <ul>
                    {menuItems.map(({href, title}) => (
                        <Link href={href} key={title}>
                            <a>
                                <li className={`${
                                    router.asPath === href ? 'active-link' : ''
                                }`}>
                                    <ChooseIcon title={title}/>
                                    <Title open={opened}>{title}</Title>
                                </li>
                            </a>
                        </Link>
                    ))}
                </ul>
            </nav>
            <BgClick onClick={() => setOpened(!opened)}/>
        </Panel>
    );
};

const Panel = styled.aside<PanelProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${(props) => props.open ? '160px' : '78px'};
  height: 100%;
  padding-top: 120px;
  background: #2A3F7E;
  cursor: pointer;

  
  ul {
    position: relative;
    z-index: 99;
    padding: 0;

    a {
      height: 100%;
      display: flex;
      align-items: center;
      color: #0BCDED;
      text-decoration: none;
      transition: all .2s;

      svg {
        transition: all .2s;
      }

      li {
        display: flex;
        align-items: center;
        height: 50px;
        list-style: none;
        padding: 12px 0 12px 28px;
        font-size: 14px;
      }

      &:hover {
        color: white;

        .fill {
          fill: #FFFFFF;
        }

        .stroke {
          stroke: #FFFFFF;
        }

        .fillstroke {
          fill: #FFFFFF;
          stroke: #FFFFFF;
        }
      }
    }
  }
`;

const Title = styled.span<PanelProps>`
  display: ${(props) => props.open ? 'block' : 'none'};
  margin-top: 4px;
  margin-left: 16px;
`;

const BgClick = styled.div`
  position: inherit;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 98;
  -webkit-transition: all .2s;
  -moz-transition: all .2s;
  -o-transition: all .2s;
  transition: all .2s;

  &:hover {
    background: #2e4686;
    box-shadow: 1px 11px 12px #0CCEEE;
  }
`;

export default SidePanel;
