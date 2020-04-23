import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listImageItems } from '../../graphql/queries';

// custom components
import ItemContent from '../Content/ItemContent';


export default function FoodAndDrinkContainer(props) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    let filters = { filter: { type: { contains: 'food' } } };
    setIsLoading(true);

    try {
      const itemData = await API.graphql(graphqlOperation(listImageItems, filters))
      const items = itemData.data.listImageItems.items;
      setItems(items);
      setIsLoading(false);
    } catch (err) { console.log('error fetching items') };
  }

  return (
    <ItemContent 
        items={items}
        isLoading={isLoading}
        actionFunc={(item) => props.openDialog(item.imgs, item.title, item.description)}
        {...props}
    />
  );
}
