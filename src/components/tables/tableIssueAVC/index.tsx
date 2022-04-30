import React from 'react';
import styles from '../tableIssueAVC.module.scss';

function startAndEnd(str: string) {
    const lngth = 35;
    const gapMin = 0;
    const gapMax = 10;
    if (str && str.length > lngth) {
        return `${str.substr(gapMin, gapMax)}...${str.substr(str.length - gapMax, str.length)}`;
    }
    return str;
}
// type Data = {
//     vcDid: string;
//     vcTypeDid: string;
//     vcParams: string;
//     issuerDid: string;
//     holderDid: string;
//     createdAt: string;
// };
//
// type SortKeys = keyof Data;

// type SortOrder = 'ascn' | 'desc';

// function sortData({
//     tableData,
//     sortKey,
//     reverse
// }: {
//     tableData: Data;
//     sortKey: SortKeys;
//     reverse: boolean;
// }) {
//     if (!sortKey) {
//         return tableData;
//     }
//
//     const sortedData = data.sort((a, b) => {
//         return a[sortKey] > b[sortKey] ? 1 : -1;
//     });
//
//     if (reverse) {
//         return sortedData.reverse();
//     }
//
//     return sortedData;
// }
//
// function SortButton({
//     sortOrder,
//     columnKey,
//     sortKey,
//     onClick
// }: {
//     sortOrder: SortOrder;
//     columnKey: SortKeys;
//     sortKey: SortKeys;
//     onClick: MouseEventHandler<HTMLButtonElement>;
// }) {
//     return (
//         <button
//             onClick={onClick}
//             className={`${
//                 sortKey === columnKey && sortOrder === 'desc'
//                     ? `${styles.sort_button} ${styles.sort_reverse}`
//                     : `${styles.sort_button}`
//             }`}
//         />
//     );
// }

export function IssueAVCTable({data}: { data: any }) {
    // const [sortKey, setSortKey] = useState<SortKeys>('id');
    // const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

    const headers: { key: string; label: string }[] = [
        {key: 'vcDid', label: 'VC DID'},
        {key: 'vcTypeDid', label: 'VC type'},
        {key: 'holderDid', label: 'Holder'},
        {key: 'createdAt', label: 'Issuance date'},
        {key: '', label: ''}
    ];

    // const sortedData = useCallback(
    //     () => sortData({tableData: data, sortKey, reverse: sortOrder === 'desc'}),
    //     [data, sortKey, sortOrder]
    // );

    // function changeSort(key: SortKeys) {
    //     setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    //
    //     setSortKey(key);
    // }

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    {headers.map((row) => {
                        return (
                            <td key={row.key} className={styles.head_td}>
                                {row.label}{' '}
                                {/*<SortButton*/}
                                {/*    columnKey={row.key}*/}
                                {/*    onClick={() => changeSort(row.key)}*/}
                                {/*    {...{*/}
                                {/*        sortOrder,*/}
                                {/*        sortKey*/}
                                {/*    }}*/}
                                {/*/>*/}
                            </td>
                        );
                    })}
                </tr>
            </thead>

            <tbody>
                {data && data.map((vc: any, key: number) => {
                    return (
                        <tr key={key} className={styles.body_row}>
                            <td className={styles.body_td}>{startAndEnd(vc.vcDid)}</td>
                            <td className={styles.body_td}>{startAndEnd(vc.vcTypeDid)}</td>
                            <td className={styles.body_td}>{startAndEnd(vc.holderDid)}</td>
                            <td className={styles.body_td}>{startAndEnd(vc.createdAt)}</td>
                            <td className={styles.body_td}>
                                Details
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
