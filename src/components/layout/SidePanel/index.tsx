import React from 'react';
import {Tooltip} from 'react-tooltip';
import styled from 'styled-components';
import {Body3, Body4} from '../../../utils/typography';
import {copyToClipboard, logout, startAndEnd} from '../../../utils/misc';
import {useMyAccountInfoStore} from '../../../store/store';
import LogoutIcon from '../../../../public/assets/logout-icon.svg';
import 'react-tooltip/dist/react-tooltip.css';
import {useDeleteAccountMutation} from '../../../generated/graphql';

const SidePanel = (): JSX.Element => {
    const {myDid, dataFromUAE} = useMyAccountInfoStore();
    const [deleteAccount] = useDeleteAccountMutation();

    const onDeleteAccount = async () => {
        try {
            await deleteAccount();
            await logout();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <Panel>
                {myDid &&
                <>
                    <UserInfo>
                        {/*<Avatar>*/}
                        {/*    <Image src="/assets/avatar.png" layout="fill" objectFit="cover"/>*/}
                        {/*</Avatar>*/}
                        <Name fontWeight={'bold'}>{dataFromUAE.fullnameEN}</Name>
                        <Did data-tooltip-id="copy-tooltip" data-tooltip-place="bottom" margin="14px 0 0"
                            onClick={() => copyToClipboard(myDid)}
                            style={{cursor: 'pointer'}}>{startAndEnd(myDid, 14)}</Did>
                        <DidMd data-tooltip-id="copy-tooltip" data-tooltip-place="bottom" margin="14px 0 0"
                            onClick={() => copyToClipboard(myDid)}
                            style={{cursor: 'pointer'}}>{startAndEnd(myDid, 12)}</DidMd>

                    </UserInfo>

                    <div>
                        <LogoutBtn onClick={onDeleteAccount}>
                            Delete account
                        </LogoutBtn>
                        <LogoutBtn onClick={logout}>
                            <LogoutIcon className="fillstroke" />
                            <Title>Logout</Title>
                        </LogoutBtn>
                    </div>
                </>
                }
                <Tooltip id="copy-tooltip" content="Click to copy" />
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

  @media (max-width: 1000px) {
    width: 180px;
    padding: 75px 0 30px;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 122px;
    padding: 63px 0 6px;
    flex-direction: row;
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

  @media (max-width: 600px) {
    padding: 0 15px;
  }
`;

const Did = styled(Body3)`
  display: block;

  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const DidMd = styled(Did)`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }

  @media (max-width: 600px) {
    margin: 2px 0;
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

const Name = styled(Body4)`
  @media (max-width: 600px) {
    margin: 2px 0;
  }
`;
// const Avatar = styled.div`
//   width: 40px;
//   height: 40px;
//   border: 2px solid #0BCDED;
//   filter: drop-shadow(0px 4px 12px rgba(11, 205, 237, 0.51));
//   border-radius: 20px;
//   overflow: hidden;
// `;

const UserInfo = styled.div`
  position: relative;
  padding: 0 20px;
  margin-bottom: 20px;
  z-index: 99;
  cursor: auto;

  @media (min-width: 1400px) {
    margin-bottom: 30px;
  }

  @media (max-width: 1000px) {
    padding: 0 15px;
  }
`;

export default SidePanel;
