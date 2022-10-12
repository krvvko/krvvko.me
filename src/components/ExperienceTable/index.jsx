'use strict';

import './index.css';
import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import {
    SortingState,
    IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {IntegratedFiltering, SearchState,} from '@devexpress/dx-react-grid';
import {Grid, SearchPanel, Table, TableHeaderRow, Toolbar} from '@devexpress/dx-react-grid-material-ui';

const ExperienceTable = () => {

    function calculateExp(startDate) {
        let start = new Date(startDate);
        let nowDate = Date.now();
        let now = new Date(nowDate);

        let myExp = now - start;

        if (myExp/1000/60/60/24 > 1) {
            return Math.round(myExp/1000/60/60/24);
            // if(myExp/1000/60/60/24/365 > 1) {
            //
            //     if (Math.round(myExp/1000/60/60/24/365) === 1) {
            //         return "Year: "+Math.round(myExp/1000/60/60/24/365)
            //     } else {
            //         return "Years: "+Math.round(myExp/1000/60/60/24/365)
            //     }
            //
            //
            // } else {
            //     return "Days: " + Math.round(myExp/1000/60/60/24);
            // }
        } else {
            return "less than 1 day";
        }
    }
    const URL = 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders?requireTotalCount=true';

    const [columns] = useState([
        { name: 'language', title: 'Language' },
        { name: 'framework', title: 'Framework/Lib' },
        { name: 'experience', title: 'Experience (Days)' },
    ]);

    const [rows] = useState([
        {framework: 'React', experience: calculateExp("10/8/2022"), language:'JavaScript'},
        {framework: 'Laravel', experience: calculateExp("4/21/2021"), language:'PHP'},
        {framework: 'ASP.net', experience:calculateExp("1/22/2022"), language:'C#'},
        {framework: 'D#', experience:calculateExp("2/21/2022"), language:'C#'},
        {framework: 'Pure', experience:calculateExp("11/3/2020"), language:'HTML'},
        {framework: 'Pure', experience:calculateExp("2/25/2021"), language:'PHP'},
        {framework: 'Pure', experience:calculateExp("5/3/2021"), language:'JavaScript'},
        {framework: 'Pure', experience:calculateExp("11/3/2020"), language:'CSS'},
        {framework: 'Discord.py', experience:calculateExp("3/27/2022"), language:'Python'}
    ]);
    const [searchValue, setSearchState] = useState('');
    return (
        <Paper>
            <Grid
                rows={rows}
                columns={columns}
            >
                <SortingState />
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

export default ExperienceTable;
