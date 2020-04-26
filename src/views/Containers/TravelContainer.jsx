import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getImageItemsByDate } from '../../graphql/queries';

// custom components
import ItemContent from '../Content/ItemContent';


export default function TravelContainer(props) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    let sort = { limit: 20, type: 'travel', sortDirection: 'DESC' };
    setIsLoading(true);

    try {
      const itemData = await API.graphql(graphqlOperation(getImageItemsByDate, sort))
      const items = itemData.data.getImageItemsByDate.items;
      setItems(items);
      setIsLoading(false);
    } catch (err) { console.log('error fetching travel items', err) };
  }

  return (
    <ItemContent 
        items={items}
        isLoading={isLoading}
        actionFunc={(item) => props.openDialog(item)}
        {...props}
    />
  );
}
