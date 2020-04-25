/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLinkItem = /* GraphQL */ `
  query GetLinkItem($id: ID!) {
    getLinkItem(id: $id) {
      id
      name
      description
      image {
        id
        name
        item {
          id
          name
          description
          type
          date
        }
        url
      }
      url
      type
      date
      myContent
    }
  }
`;
export const listLinkItems = /* GraphQL */ `
  query ListLinkItems(
    $filter: ModelLinkItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLinkItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image {
          id
          name
          url
        }
        url
        type
        date
        myContent
      }
      nextToken
    }
  }
`;
export const getMusicItem = /* GraphQL */ `
  query GetMusicItem($id: ID!) {
    getMusicItem(id: $id) {
      id
      name
      description
      url
      date
    }
  }
`;
export const listMusicItems = /* GraphQL */ `
  query ListMusicItems(
    $filter: ModelMusicItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMusicItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        url
        date
      }
      nextToken
    }
  }
`;
export const getImageItem = /* GraphQL */ `
  query GetImageItem($id: ID!) {
    getImageItem(id: $id) {
      id
      name
      description
      image {
        id
        name
        item {
          id
          name
          description
          type
          date
        }
        url
      }
      imageGallery {
        items {
          id
          name
          url
        }
        nextToken
      }
      type
      date
    }
  }
`;
export const listImageItems = /* GraphQL */ `
  query ListImageItems(
    $filter: ModelImageItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image {
          id
          name
          url
        }
        imageGallery {
          nextToken
        }
        type
        date
      }
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
      id
      name
      item {
        id
        name
        description
        image {
          id
          name
          url
        }
        imageGallery {
          nextToken
        }
        type
        date
      }
      url
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        item {
          id
          name
          description
          type
          date
        }
        url
      }
      nextToken
    }
  }
`;
export const getLinkItemsByDate = /* GraphQL */ `
  query GetLinkItemsByDate(
    $type: String
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLinkItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getLinkItemsByDate(
      type: $type
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        image {
          id
          name
          url
        }
        url
        type
        date
        myContent
      }
      nextToken
    }
  }
`;
