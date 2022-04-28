import React, {MouseEventHandler, useCallback, useState} from 'react';
import styles from '../tableIssueAVC.module.scss';
import data from './data.json';
import {useRouter} from 'next/router';

type Data = typeof data;

type SortKeys = keyof Data[0];

type SortOrder = 'ascn' | 'desc';

function sortData({
    tableData,
    sortKey,
    reverse
}: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
}) {
    if (!sortKey) {
        return tableData;
    }

    const sortedData = data.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
        return sortedData.reverse();
    }

    return sortedData;
}

function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick
}: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            onClick={onClick}
            className={`${
                sortKey === columnKey && sortOrder === 'desc'
                    ? `${styles.sort_button} ${styles.sort_reverse}`
                    : `${styles.sort_button}`
            }`}
        />
    );
}

export function VerificationRequestsTable({data}: { data: Data }) {
    const [sortKey, setSortKey] = useState<SortKeys>('vc_did');
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');
    const router = useRouter();
    const handleRowClick = () => {
        router.push('/verifier/request');
    };

    const headers: { key: SortKeys; label: string }[] = [
        {key: 'vc_did', label: 'VC DID'},
        {key: 'holder', label: 'Holder'},
        {key: 'request_date', label: 'Request date'},
        {key: 'status', label: 'Status'},
        {key: 'request_processed', label: 'Request processed'}
    ];

    const sortedData = useCallback(
        () => sortData({tableData: data, sortKey, reverse: sortOrder === 'desc'}),
        [data, sortKey, sortOrder]
    );

    function changeSort(key: SortKeys) {
        setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');

        setSortKey(key);
    }

    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    {headers.map((row) => {
                        return (
                            <td key={row.key} className={styles.head_td}>
                                {row.label}{' '}
                                <SortButton
                                    columnKey={row.key}
                                    onClick={() => changeSort(row.key)}
                                    {...{
                                        sortOrder,
                                        sortKey
                                    }}
                                />
                            </td>
                        );
                    })}
                </tr>
            </thead>

            <tbody>
                {sortedData().map((person) => {
                    return (
                        <tr key={person.id} className={styles.body_row} onClick={() => handleRowClick()}>
                            <td className={styles.body_td}>{person.vc_did}</td>
                            <td className={styles.body_td}>{person.holder}</td>
                            <td className={styles.body_td}>{person.request_date}</td>
                            <td className={`${styles.body_td} ${styles.green}`}>{person.status}</td>
                            <td className={styles.body_td}>{person.request_processed}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
