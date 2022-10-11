'use strict';

import './index.css';
import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import {
    SortingState,
    IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {IntegratedFiltering, SearchState,} from '@devexpress/dx-react-grid';
import {Grid, SearchPanel, Table, TableHeaderRow, Toolbar, VirtualTable} from '@devexpress/dx-react-grid-material-ui';

export default () => {

    function calculateExp(startDate) {
        let start = new Date(startDate);
        let nowDate = Date.now();
        let now = new Date(nowDate);

        let myExp = now - start;

        if (myExp/1000/60/60/24 > 1) {
            if(myExp/1000/60/60/24/365 > 1) {
                return ""+Math.round(myExp/1000/60/60/24/365) + " Years"
            } else {
                return Math.round(myExp/1000/60/60/24)  + " Days";
            }
        } else {
            return "less than 1 day";
        }
    }
    const URL = 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders?requireTotalCount=true';

    const [columns] = useState([
        { name: 'language', title: 'Language' },
        { name: 'framework', title: 'Framework/Lib' },
        { name: 'experience', title: 'Experience' },
    ]);

    const [rows] = useState([
        {framework: 'React', experience: calculateExp("10/8/2022"), language:'JavaScript'},
        {framework: 'Laravel', experience: calculateExp("10/5/2022"), language:'PHP'},
        {framework: 'ASP.net', experience:calculateExp("10/5/2022"), language:'C#'},
        {framework: 'D#', experience:calculateExp("10/5/2022"), language:'C#'},
        {framework: 'Pure', experience:calculateExp("10/5/2022"), language:'HTML'},
        {framework: 'Pure', experience:calculateExp("10/5/2022"), language:'PHP'},
        {framework: 'Pure', experience:calculateExp("10/3/2022"), language:'JavaScript'},
        {framework: 'Pure', experience:calculateExp("10/5/2022"), language:'CSS'},
        {framework: 'Discord.py', experience:calculateExp("10/6/2022"), language:'Python'}
    ]);
    const [searchValue, setSearchState] = useState('');
    const [sorting, setSorting] = useState([{ columnName: 'Experience', direction: 'asc' }]);

    return (
        <Paper>
            <Grid
                rows={rows}
                columns={columns}
            >
                <SortingState
                    sorting={sorting}
                    onSortingChange={setSorting}
                />
                <SearchState
                    value={searchValue}
                    onValueChange={setSearchState}
                />
                <IntegratedFiltering />
                <IntegratedSorting />
                <Table />
                <TableHeaderRow showSortingControls/>
                <Toolbar />
                <SearchPanel />
            </Grid>
        </Paper>
    );
};
