import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';
import RestaurantList from './RestaurantList';
import { sampleData } from '../../sampleData/sampleData';
import RestaurantFilters from './RestaurantFilter';

export default function RestaurantDashboard() {
    const [restaurants, setRestaurants] = useState(sampleData);

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <RestaurantList restaurants={restaurants} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <RestaurantFilters />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}