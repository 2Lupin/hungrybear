import React from "react";
import { Item, ItemContent, Segment, Button } from "semantic-ui-react";

export default function RestaurantListItem({restaurant}) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
            <Item>
              <Item.Image size='small' src={restaurant.restaurantPhotoURL} />
              <ItemContent>
                <Item.Header content={restaurant.name} />
                <Item.Description>
                  {restaurant.description}
                </Item.Description>
              </ItemContent>
            </Item>
          </Item.Group>
      </Segment>
      <Segment clearing>
        <Button   
          color='teal' 
          floated='right' 
          content='View Menu' 
        />
      </Segment>
    </Segment.Group>
  );
}
