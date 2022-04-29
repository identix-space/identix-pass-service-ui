export function redirect(url: string): void {
    if (typeof window !== 'undefined') {
        window.location.href = url;
    }
}

export function generateSSORedirectUrl(): string {
    if (process.env.NEXT_PUBLIC_APP_URL) {
        return `https://sso.identix.space/auth?redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}`;
    } else {
        return 'https://sso.identix.space/auth?redirect_uri=https://pass-dev.identix.space';
    }
}

export function extractTokenFromUrl(url: string): string {
    const queryParams = new URLSearchParams(new URL(url).search);
    const userAccessToekn = queryParams.get('token');
    if (!userAccessToekn) {
        return '';
    }
    return decodeURIComponent(userAccessToekn);
}

export function setAuthorizationToken(token: string) {
    localStorage.setItem('authorization-token', token);
}

export function generateAfterWeb2OutServisesUserLogin(uri: string): string {
    if (process.env.NEXT_PUBLIC_APP_URL) {
        return `${process.env.NEXT_PUBLIC_APP_URL}${uri}`;
    } else {
        return `https://pass-dev.identix.space${uri}`;
    }
}

