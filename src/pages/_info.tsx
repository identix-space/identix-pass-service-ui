import React, {ReactNode} from 'react';
import packageJson from '../../package.json';

export default function _InfoPage(): ReactNode {
    return (
        <div>
            {
                `${packageJson.name} ${packageJson.version} ${String(process.env.NEXT_PUBLIC_APP_URL)}`
            }
            <hr/>
            {
                `Date: ${new Date().toISOString()}`
            }
        </div>
    );
}
