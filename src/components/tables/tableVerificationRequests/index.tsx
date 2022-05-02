import React from 'react';
import styles from '../tableIssueAVC.module.scss';
import {Vc, VerificationCase} from '../../../generated/graphql';
import {startAndEnd} from '../../../utils/misc';
import Link from 'next/link';
import {Body5} from '../../../utils/typography';

// type verificationCasesType = {
//     verifierDid: VerificationCase;
//     status: string;
// }

type Data = {
    vcDid: string;
    vcTypeDid: string;
    vcParams: string;
    issuerDid: string;
    holderDid: string;
    createdAt: string;
    verificationCases: Array<VerificationCase>;
};
// type SortKeys = keyof Data[0];
//
// type SortOrder = 'ascn' | 'desc';
//
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

export function VerificationRequestsTable({data}: { data: any }) {
    // const [sortKey, setSortKey] = useState<SortKeys>('vc_did');
    // const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');
    // const router = useRouter();
    // const handleRowClick = () => {
    //     router.push('/verifier/[id]');
    // };

    const headers: { key: keyof Vc; label: string }[] = [
        {key: 'vcDid', label: 'VC DID'},
        {key: 'issuerDid', label: 'Issuer'},
        {key: 'holderDid', label: 'Holder'},
        {key: 'createdAt', label: 'Request date'},
        {key: 'verificationCases', label: 'Status'},
        {key: 'updatedAt', label: 'Request processed'}
    ];

    // const sortedData = useCallback(
    //     () => sortData({tableData: data, sortKey, reverse: sortOrder === 'desc'}),
    //     [data, sortKey, sortOrder]
    // );
    //
    // function changeSort(key: SortKeys) {
    //     setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');
    //
    //     setSortKey(key);
    // }

    return (
        <>
            {data && data.getUserVCs.length !== 0
                ? <table className={styles.table}>
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
                        {data && data.getUserVCs.map((vc: Data, key: number) => {
                            return (
                                <tr key={key} className={styles.body_row}>
                                    <td className={styles.body_td}>{startAndEnd(vc.vcDid, 7)}</td>
                                    <td className={styles.body_td}>{startAndEnd(vc.vcTypeDid, 7)}</td>
                                    <td className={styles.body_td}>{startAndEnd(vc.holderDid, 7)}</td>
                                    <td className={styles.body_td}>{vc.createdAt}</td>
                                    <td className={styles.body_td}>{vc.verificationCases[0] && vc.verificationCases[0].status}</td>
                                    <td className={styles.body_td}>
                                        <Link href={'/verifier/[id]'} as={`/verifier/${vc.vcDid}`} passHref>
                                            <a>
                                                Details
                                            </a>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                : <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Body5 margin="100px 0 80px">Nothing here yet.</Body5>
                </div>
            }
        </>
    );
}
