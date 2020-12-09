import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getLinkItemsByDate } from '../../graphql/queries';

// custom components
import ItemContent from '../Content/ItemContent';


export default function DevContainer(props) {
  const [myStuff, setMyStuff] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, [myStuff]);

  async function fetchItems() {
    let sort = myStuff ? 
      { type: 'dev', sortDirection: 'DESC', filter: { myContent: { eq: true } } } : 
      { type: 'dev', sortDirection: 'DESC' };
    setIsLoading(true);

    try {
      const itemData = await API.graphql(graphqlOperation(getLinkItemsByDate, sort));
      const items = itemData.data.getLinkItemsByDate.items;
      setItems(items);
      setIsLoading(false);
    } catch (err) { console.log('error fetching dev items', err) };
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
