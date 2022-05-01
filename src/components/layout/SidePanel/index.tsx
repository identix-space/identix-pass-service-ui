import React, {useState, FC} from 'react';
import Image from 'next/image';
import VCWalletIcon from '../../../../public/assets/vc-wallet-icon.svg';
import MarketplaceIcon from '../../../../public/assets/marketplace-icon.svg';
import ServicesIcon from '../../../../public/assets/services-icon.svg';
import IssueAVCIcon from '../../../../public/assets/issue-a-vc-icon.svg';
import VerifierIcon from '../../../../public/assets/verifier-icon.svg';
import EventLogsIcon from '../../../../public/assets/event-logs-icon.svg';
import styled from 'styled-components';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Body2} from '../../../utils/typography';
import {SidePanelProps} from './SidePanel.props';
import {useWhoamiQuery} from '../../../generated/graphql';

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

function startAndEnd(str: string) {
    const lngth = 35;
    const gapMin = 0;
    const gapMax = 7;
    if (str && str.length > lngth) {
        return `${str.substr(gapMin, gapMax)}...${str.substr(str.length - gapMax, str.length)}`;
    }
    return str;
}

const SidePanel = (): JSX.Element => {
    const [opened, setOpened] = useState(false);
    const router = useRouter();
    const {data} = useWhoamiQuery();

    return (
        <Panel open={opened}>
            <UserInfo open={opened}>
                <Avatar>
                    <Image src="/assets/avatar.png" layout="fill" objectFit="cover"/>
                </Avatar>
                <UserTexts open={opened}>
                    <Body2 margin="14px 0 0">{data && startAndEnd(data.whoami)}</Body2>
                    {/*<PublicKey>Public key:1812ab...bde0cd</PublicKey>*/}
                </UserTexts>
            </UserInfo>
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

const Panel = styled.aside<SidePanelProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${(props) => props.open ? '140px' : '68px'};
  height: 100%;
  padding-top: 85px;
  background: #1b2f6c;
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
        padding: 12px 0 12px 23px;
        font-size: 13px;

        @media (min-width: 1400px) {
          padding: 12px 0 12px 28px;
          font-size: 14px;
        }
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

  @media (min-width: 1400px) {
    width: ${(props) => props.open ? '160px' : '78px'};
    padding-top: 78px;
  }
`;

const Title = styled.span<SidePanelProps>`
  display: ${(props) => props.open ? 'block' : 'none'};
  margin-top: 4px;
  margin-left: 14px;

  @media (min-width: 1400px) {
    margin-left: 16px;
  }
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
    //background: #253c79;
    box-shadow: 1px 11px 12px #0CCEEE;
  }
`;

const UserInfo = styled.div<SidePanelProps>`
  position: relative;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  z-index: ${(props) => props.open ? '99' : '97'};
  cursor: auto;

  @media (min-width: 1400px) {
    margin-bottom: 30px;
  }
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #0BCDED;
  filter: drop-shadow(0px 4px 12px rgba(11, 205, 237, 0.51));
  border-radius: 20px;
  overflow: hidden;
`;

// const PublicKey = styled.span`
//   font-size: 10px;
//   color: #0BCDED;
// `;

const UserTexts = styled.div<SidePanelProps>`
  display: ${(props) => props.open ? 'inline' : 'none'};
`;

export default SidePanel;
