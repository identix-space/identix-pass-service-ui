import React, {MouseEventHandler, useCallback, useState} from 'react';
import styles from '../tableIssueAVC.module.scss';
import data from './data.json';

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

export function EventsLogTable({data}: { data: Data }) {
    const [sortKey, setSortKey] = useState<SortKeys>('id');
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

    const headers: { key: SortKeys; label: string }[] = [
        {key: 'id', label: 'Event ID'},
        {key: 'event_date', label: 'Event date'},
        {key: 'credential', label: 'Credential(s)'},
        {key: 'event_type', label: 'Event type'},
        {key: 'src_did', label: 'Rst DID'},
        {key: 'dst_did', label: 'Dst DID'},
        {key: 'status', label: 'Status'},
        {key: 'status_updated', label: 'Status updated'}
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
        <table className={styles.table_wide}>
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
                        <tr key={person.id} className={styles.body_row}>
                            <td className={styles.body_td}>#{person.id}</td>
                            <td className={styles.body_td}>{person.event_date}</td>
                            <td className={styles.body_td}>{person.credential}</td>
                            <td className={styles.body_td}>{person.event_type}</td>
                            <td className={styles.body_td}>{person.src_did}</td>
                            <td className={styles.body_td}>{person.dst_did}</td>
                            <td className={`${styles.body_td} ${styles.green}`}>{person.status}</td>
                            <td className={styles.body_td}>{person.status_updated}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
