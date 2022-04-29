export function redirect(url: string): void {
    if (typeof window !== 'undefined') {
        window.location.href = url;
    }
}

export function generateSSORedirectUrl(): string {
    return `https://sso.identix.space/auth?redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}`;
}

export function extractTokenFromUrl(url: string): string {
    console.log('url ', url);
    const queryParams = new URLSearchParams(new URL(url).search);
    console.log('queryParams ', queryParams);
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
    return `${process.env.NEXT_PUBLIC_APP_URL}${uri}`;
}

