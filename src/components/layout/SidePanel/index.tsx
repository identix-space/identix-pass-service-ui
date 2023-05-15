import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {Body2} from '../../../utils/typography';
import {useWhoamiQuery} from '../../../generated/graphql';
import {Logout, startAndEnd} from '../../../utils/misc';
import {Tooltip} from 'react-tooltip';
import LogoutIcon from '../../../../public/assets/logout-icon.svg';
import 'react-tooltip/dist/react-tooltip.css';

const SidePanel = (): JSX.Element => {
    const {data} = useWhoamiQuery();

    return (
        <>
            <Panel>
                {data &&
                    <>
                        <UserInfo>
                            <Avatar>
                                <Image src="/assets/avatar.png" layout="fill" objectFit="cover"/>
                            </Avatar>
                            <UserTexts>
                                <Did data-tooltip-id="copy-tooltip" data-tooltip-place="bottom" margin="14px 0 0" onClick={() => {
                                    navigator.clipboard.writeText(data.whoami);
                                }} style={{cursor: 'pointer'}}>{startAndEnd(data.whoami, 11)}</Did>
                            </UserTexts>
                        </UserInfo>
                        <LogoutBtn onClick={Logout}>
                            <LogoutIcon className="fillstroke"/>
                            <Title>Logout</Title>
                        </LogoutBtn>
                    </>
                }
                <Tooltip id="copy-tooltip" content="Click to copy"/>
            </Panel>
        </>
    );
};

const Panel = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 85px 0 32px;
  background: #1b2f6c;
  z-index: 999;

  @media (min-width: 1400px) {
    width: 260px;
    padding-top: 95px;
  }
`;

const LogoutBtn = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 0 0 23px;
  font-size: 13px;
  color: #0BCDED;
  transition: all .2s;
  cursor: pointer;

  .fillstroke {
    transition: all .2s;
  }

  &:hover {
    color: white;

    .fillstroke {
      fill: #FFFFFF;
      stroke: #FFFFFF;
    }
  }

  @media (min-width: 1400px) {
    padding: 12px 0 12px 28px;
    font-size: 14px;
  }
`;

const Did = styled(Body2)`
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
`;
const Title = styled.span`
  display: block;
  margin-top: 4px;
  margin-left: 14px;

  @media (min-width: 1400px) {
    margin-left: 16px;
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

const UserInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;
  z-index: 99;
  cursor: auto;

  @media (min-width: 1400px) {
    margin-bottom: 30px;
  }
`;

const UserTexts = styled.div`
  display: inline;
`;

export default SidePanel;
