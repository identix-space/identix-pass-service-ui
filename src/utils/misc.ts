import {AgentsRoles} from '../generated/graphql';
import {LogoutDocument} from '../generated/graphql';
import {getApolloClient} from './ApolloClient';
import {Day} from '@hassanmojab/react-modern-calendar-datepicker';
import { ApolloError } from '@apollo/client';

export function redirect(url: string): void {
    if (typeof window !== 'undefined') {
        window.location.href = url;
    }
}

export function generateSSORedirectUrl(): string {
    return `https://sso.identix.space/auth?redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}`;
}

export function extractTokenFromUrl(url: string): string {
    const queryParams = new URLSearchParams(new URL(url).search);
    const userAccessToekn = queryParams.get('token');
    console.log('tokenUrl', userAccessToekn);
    console.log('query', queryParams);
    if (!userAccessToekn) {
        return '';
    }
    return decodeURIComponent(userAccessToekn);
}

export function setAuthorizationToken(token: string) {
    localStorage.setItem('authorization-token', token);
}

export function generateAfterWeb2OutServisesUserLogin(uri: string): string {
    return `${process.env.NEXT_PUBLIC_APP_URL}${uri}`;
}

export async function logout() {
    try {
        await getApolloClient.query({query: LogoutDocument});
    } finally {
        localStorage.clear();
        redirect('/');
    }
}

export function startAndEnd(str: string, gap: number) {
    const lngth = 35;
    const gapMin = 0;
    if (str && str.length > lngth) {
        return `${str.substr(gapMin, gap)}...${str.substr(str.length - gap, str.length)}`;
    }
    return str;
}

export function formatDate(date: string) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString('en-US', {month: 'short'});
    return `${day} ${month} ${d.getFullYear()}`;
}

export const checkOfPermission = async (did: string, userDid: string, role: AgentsRoles) => {
    if (role === AgentsRoles.Holder) {
        return did === userDid;
    }
    if (role === AgentsRoles.Issuer) {
        return did === userDid;
    }
    if (role === AgentsRoles.Verifier) {
        return did === userDid;
    }
    return false;
};

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
};

export const convertDate = (date: Day) => {
    return new Date(date.year, date.month - 1, date.day);
};

export const getApolloError = (err: ApolloError) => {
    if (err && err.message) {
        return err.message.substr(0, 200);
    }

    return 'Something went wrong';
};
