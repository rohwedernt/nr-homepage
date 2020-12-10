import React, { useState, useEffect } from 'react';
//import { API, graphqlOperation } from 'aws-amplify';
//import { listLinkItems } from '../../graphql/queries';
import NasaGlobe from '../Content/NasaGlobe';

export default function AstronomyContainer(props) {
  //const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    //let filters = { filter: { type: { contains: 'astronomy' } } };
    setIsLoading(true);

    // try {
    //   const itemData = await API.graphql(graphqlOperation(listLinkItems, filters))
    //   const items = itemData.data.listLinkItems.items;
    //   setItems(items);
    //   setIsLoading(false);
    // } catch (err) { console.log('error fetching astronomy items', err) };
  }

  return (
    !isLoading && <NasaGlobe />
  );
}
