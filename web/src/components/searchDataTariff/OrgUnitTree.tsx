import i18n from "@dhis2/d2-i18n";
import React, { useState, useEffect } from "react";
import { OrganisationUnitTree } from "@dhis2/ui";
import useOrgUnitRoots from "../../hooks/useOrgUnitRoots";
import { useDataQuery } from "@dhis2/app-runtime";


interface OrgUnit {
    id?: string;
    path?: string;
    selected?: string[];
}

interface OrgUnitTreeProps {
    orgUnit?: OrgUnit;
    onChange: (orgUnit: OrgUnit) => void;
}

const OrgUnitTree: React.FC<OrgUnitTreeProps> = ({ orgUnit, onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const { roots, error } = useOrgUnitRoots();

    useEffect(() => {
        if (roots && !orgUnit && typeof onChange === 'function') {
            const [root] = roots;
            onChange({ ...root, selected: [root.path] });
        }
    }, [roots, orgUnit, onChange]);

    const query = {
        orgUnits: {
            resource: 'organisationUnits',
            params: ({ searchValue }: { searchValue: string; }) => ({
                fields: ['id', 'displayName', 'path'],
                filter: `displayName:ilike:${searchValue}`,
                paging: false,
            }),
        },
    };

    const { loading, data, refetch } = useDataQuery(query, {
        lazy: true,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.length === 3) {
            refetch({ searchValue: value });
        }
    };

    useEffect(() => {
        if (inputValue.length === 3) {
            refetch({ searchValue: inputValue });
        }
    }, [inputValue, refetch]);

    console.log(data.orgUnits.organisationUnits);




    return roots ? (
        <div>
            <input
                type="text"
                placeholder="Search organization unit by name"
                value={inputValue}
                onChange={handleInputChange}
                className="border rounded p-2 w-full"
            />
            <OrganisationUnitTree
                roots={roots.map((r) => r.id)}
                selected={orgUnit?.selected}
                singleSelection={true}
                initiallyExpanded={roots.map((r) => r.path)}
                onChange={(selectedOrgUnits) => {
                    if (typeof onChange === 'function') {
                        onChange({ id: selectedOrgUnits.id, selected: [selectedOrgUnits.path] });
                    }
                }}
            />
        </div>
    ) : error ? (
        <div>{error.message}</div>
    ) : null;
};

export default OrgUnitTree;
