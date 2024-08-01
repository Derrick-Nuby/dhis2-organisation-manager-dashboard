import React, { useState } from 'react';
import { Button, DataTable, DataTableCell, DataTableColumnHeader, DataTableRow, IconAdd16, TableBody, TableFoot, TableHead, InputField } from '@dhis2/ui';
import styles from './LookUp.module.css';
import CustomModal from '../ui/CustomModal';
import ItemsLookUpTable from './ItemsLookUpTable';


const LookUp: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [type, setType] = useState('');
    const [mainName, setMainName] = useState('');
    const [code, setCode] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [actions, setActions] = useState('');

    const handleAddLookup = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveChanges = () => {
        console.log({
            type,
            mainName,
            code,
            value,
            description,
            actions,
        });

        setType('');
        setMainName('');
        setCode('');
        setValue('');
        setDescription('');
        setActions('');
        handleCloseModal();
    };

    return (
        <div>
            <nav className={`${styles.pageHeader}`}>
                <h2 className={`${styles.pageTitle}`}>Lookup Management</h2>
                <Button primary onClick={handleAddLookup}> <IconAdd16 /> Add Lookup</Button>
                <CustomModal
                    isOpen={showModal}
                    onClose={handleCloseModal}
                    title="Add Lookup"
                    onSave={handleSaveChanges}
                >
                    <InputField
                        label="TYPE"
                        required
                        value={type}
                        onChange={({ value }) => setType(value)}
                        inputWidth="320px"
                    />

                    <InputField
                        label="NAME"
                        required
                        value={mainName}
                        onChange={({ value }) => setMainName(value)}
                        inputWidth="320px"
                    />
                    <InputField
                        label="CODE"
                        required
                        value={code}
                        onChange={({ value }) => setCode(value)}
                        inputWidth="320px"
                    />
                    <InputField
                        label="VALUE"
                        required
                        value={value}
                        onChange={({ value }) => setValue(value)}
                        inputWidth="320px"
                    />
                    <InputField
                        label="DESCRIPTION"
                        required
                        value={description}
                        onChange={({ value }) => setDescription(value)}
                        inputWidth="320px"
                    />
                    <InputField
                        label="ACTIONS"
                        required
                        value={actions}
                        onChange={({ value }) => setActions(value)}
                        inputWidth="320px"
                    />
                </CustomModal>
            </nav>
            <ItemsLookUpTable />
        </div>
    );
};

export default LookUp;
