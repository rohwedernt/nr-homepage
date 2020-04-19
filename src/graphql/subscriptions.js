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
        galleryID
        url
      }
      url
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
        galleryID
        url
      }
      url
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
        galleryID
        url
      }
      url
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
    }
  }
`;
export const onCreateImageItem = /* GraphQL */ `
  subscription OnCreateImageItem {
    onCreateImageItem {
      id
      name
      description
      defaultImage {
        id
        galleryID
        url
      }
      images {
        items {
          id
          galleryID
          url
        }
        nextToken
      }
    }
  }
`;
export const onUpdateImageItem = /* GraphQL */ `
  subscription OnUpdateImageItem {
    onUpdateImageItem {
      id
      name
      description
      defaultImage {
        id
        galleryID
        url
      }
      images {
        items {
          id
          galleryID
          url
        }
        nextToken
      }
    }
  }
`;
export const onDeleteImageItem = /* GraphQL */ `
  subscription OnDeleteImageItem {
    onDeleteImageItem {
      id
      name
      description
      defaultImage {
        id
        galleryID
        url
      }
      images {
        items {
          id
          galleryID
          url
        }
        nextToken
      }
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
      id
      galleryID
      url
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
      id
      galleryID
      url
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
      id
      galleryID
      url
    }
  }
`;
