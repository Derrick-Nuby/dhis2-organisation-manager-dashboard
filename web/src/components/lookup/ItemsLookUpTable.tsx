import React from 'react';
import { DataTable, TableHead, DataTableRow, DataTableColumnHeader, TableBody, DataTableCell, Button } from '@dhis2/ui';
import { useDataQuery } from '@dhis2/app-runtime';
import { Pagination, CircularLoader } from '@dhis2/ui';

const query = {
    dataStore: {
        resource: 'dataStore/lookup',
        params: () => ({
            fields: '.',
        }),
    },
};

const ItemsLookUpTable = () => {

    const { loading, error, data, refetch } = useDataQuery(query);

    console.log('Data:', data.dataStore.entries);


    const handleEditLookup = () => {
        // setShowModal(true);
        console.log("handleEditLookup");
    };

    const handleDeleteLookup = () => {
        console.log("handleDeleteLookup");

    };
    return (
        <div>
            <DataTable>
                <TableHead>
                    <DataTableRow>
                        <DataTableColumnHeader>TYPE</DataTableColumnHeader>
                        <DataTableColumnHeader>NAME</DataTableColumnHeader>
                        <DataTableColumnHeader>CODE</DataTableColumnHeader>
                        <DataTableColumnHeader>VALUE</DataTableColumnHeader>
                        <DataTableColumnHeader>DESCRIPTION</DataTableColumnHeader>
                        <DataTableColumnHeader>ACTIONS</DataTableColumnHeader>
                    </DataTableRow>
                </TableHead>
                <TableBody>
                    {loading && <CircularLoader />}
                    {error && <span>{`ERROR: ${error.message}`}</span>}
                    {data && (
                        data.dataStore.entries.map((element, index) => (
                            <DataTableRow key={element.key}>
                                <DataTableCell>{element.value.type}</DataTableCell>
                                <DataTableCell>{element.value.mainName}</DataTableCell>
                                <DataTableCell>{element.value.code}</DataTableCell>
                                <DataTableCell>{element.value.value}</DataTableCell>
                                <DataTableCell>{element.value.description}</DataTableCell>
                                <DataTableCell>
                                    <Button primary className='small' onClick={handleEditLookup}>Edit</Button>
                                    <Button destructive className='small' onClick={handleDeleteLookup}>Delete</Button>
                                </DataTableCell>
                            </DataTableRow>
                        ))
                    )}
                </TableBody>
            </DataTable>
        </div>
    );
};

export default ItemsLookUpTable;
