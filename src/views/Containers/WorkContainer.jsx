import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listLinkItems } from '../../graphql/queries';

// custom components
import ItemContent from '../Content/ItemContent';


export default function WorkContainer(props) {
  const [myStuff, setMyStuff] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, [myStuff]);

  async function fetchItems() {
    let filters = { filter: { type: { contains: 'work' } } };
    filters.filter.myContent = myStuff ? { eq: true } : undefined;
    setIsLoading(true);

    try {
      const itemData = myStuff ? 
        await API.graphql(graphqlOperation(listLinkItems, filters)) :
        await API.graphql(graphqlOperation(listLinkItems))
      const items = itemData.data.listLinkItems.items;
      setItems(items);
      setIsLoading(false);
    } catch (err) { console.log('error fetching items') };
  }

  return (
    <ItemContent 
        items={items}
        isLoading={isLoading}
        myStuff={myStuff}
        setMyStuff={setMyStuff}
        actionFunc={(item) => window.open(item.url, '_blank')}
        {...props}
    />
  );
}
