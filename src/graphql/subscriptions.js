/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLinkItem = /* GraphQL */ `
  subscription OnCreateLinkItem {
    onCreateLinkItem {
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
export const onUpdateLinkItem = /* GraphQL */ `
  subscription OnUpdateLinkItem {
    onUpdateLinkItem {
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
export const onDeleteLinkItem = /* GraphQL */ `
  subscription OnDeleteLinkItem {
    onDeleteLinkItem {
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
export const onCreateMusicItem = /* GraphQL */ `
  subscription OnCreateMusicItem {
    onCreateMusicItem {
      id
      name
      description
      url
      date
    }
  }
`;
export const onUpdateMusicItem = /* GraphQL */ `
  subscription OnUpdateMusicItem {
    onUpdateMusicItem {
      id
      name
      description
      url
      date
    }
  }
`;
export const onDeleteMusicItem = /* GraphQL */ `
  subscription OnDeleteMusicItem {
    onDeleteMusicItem {
      id
      name
      description
      url
      date
    }
  }
`;
export const onCreateImageItem = /* GraphQL */ `
  subscription OnCreateImageItem {
    onCreateImageItem {
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
export const onUpdateImageItem = /* GraphQL */ `
  subscription OnUpdateImageItem {
    onUpdateImageItem {
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
export const onDeleteImageItem = /* GraphQL */ `
  subscription OnDeleteImageItem {
    onDeleteImageItem {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
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
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
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
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
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
