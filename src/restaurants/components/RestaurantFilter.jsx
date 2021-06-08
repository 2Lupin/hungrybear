import React from 'react';
import { Menu, Header } from 'semantic-ui-react';

export default function RestaurantFilters() {
    return (
        <>
             <Menu vertical size='large' style={{width: '100%'}}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item 
                    content='All Restaurants'
                    //active={predicate.get('filter') === 'all'}
                    //onClick={() => setPredicate('filter', 'all')}
                    //disabled={loading}
                />
                <Menu.Item 
                    content="Fast Food" 
                    //active={predicate.get('filter') === 'isGoing'}
                    //onClick={() => setPredicate('filter', 'isGoing')}
                    //disabled={loading}
                />
                <Menu.Item 
                    content="Fast Casual" 
                    //active={predicate.get('filter') === 'isHost'}
                    //onClick={() => setPredicate('filter', 'isHost')}
                    //disabled={loading}
                />
                <Menu.Item 
                    content="Sports Bars" 
                    //active={predicate.get('filter') === 'isHost'}
                    //onClick={() => setPredicate('filter', 'isHost')}
                    //disabled={loading}
                />
                <Menu.Item 
                    content="Casual Dining" 
                    //active={predicate.get('filter') === 'isHost'}
                    //onClick={() => setPredicate('filter', 'isHost')}
                    //disabled={loading}
                />
                <Menu.Item 
                    content="Fine Dining" 
                    //active={predicate.get('filter') === 'isHost'}
                    //onClick={() => setPredicate('filter', 'isHost')}
                    //disabled={loading}
                />
                <Menu.Item 
                    content="Food Trucks" 
                    //active={predicate.get('filter') === 'isHost'}
                    //onClick={() => setPredicate('filter', 'isHost')}
                    //disabled={loading}
                />
            </Menu>
        </>
    )
}