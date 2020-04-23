/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLinkItem = /* GraphQL */ `
  mutation CreateLinkItem(
    $input: CreateLinkItemInput!
    $condition: ModelLinkItemConditionInput
  ) {
    createLinkItem(input: $input, condition: $condition) {
      id
      name
      description
      image {
        id
        galleryID
        url
      }
      url
      type
      myContent
    }
  }
`;
export const updateLinkItem = /* GraphQL */ `
  mutation UpdateLinkItem(
    $input: UpdateLinkItemInput!
    $condition: ModelLinkItemConditionInput
  ) {
    updateLinkItem(input: $input, condition: $condition) {
      id
      name
      description
      image {
        id
        galleryID
        url
      }
      url
      type
      myContent
    }
  }
`;
export const deleteLinkItem = /* GraphQL */ `
  mutation DeleteLinkItem(
    $input: DeleteLinkItemInput!
    $condition: ModelLinkItemConditionInput
  ) {
    deleteLinkItem(input: $input, condition: $condition) {
      id
      name
      description
      image {
        id
        galleryID
        url
      }
      url
      type
      myContent
    }
  }
`;
export const createMusicItem = /* GraphQL */ `
  mutation CreateMusicItem(
    $input: CreateMusicItemInput!
    $condition: ModelMusicItemConditionInput
  ) {
    createMusicItem(input: $input, condition: $condition) {
      id
      name
      description
      url
    }
  }
`;
export const updateMusicItem = /* GraphQL */ `
  mutation UpdateMusicItem(
    $input: UpdateMusicItemInput!
    $condition: ModelMusicItemConditionInput
  ) {
    updateMusicItem(input: $input, condition: $condition) {
      id
      name
      description
      url
    }
  }
`;
export const deleteMusicItem = /* GraphQL */ `
  mutation DeleteMusicItem(
    $input: DeleteMusicItemInput!
    $condition: ModelMusicItemConditionInput
  ) {
    deleteMusicItem(input: $input, condition: $condition) {
      id
      name
      description
      url
    }
  }
`;
export const createImageItem = /* GraphQL */ `
  mutation CreateImageItem(
    $input: CreateImageItemInput!
    $condition: ModelImageItemConditionInput
  ) {
    createImageItem(input: $input, condition: $condition) {
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
      type
    }
  }
`;
export const updateImageItem = /* GraphQL */ `
  mutation UpdateImageItem(
    $input: UpdateImageItemInput!
    $condition: ModelImageItemConditionInput
  ) {
    updateImageItem(input: $input, condition: $condition) {
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
      type
    }
  }
`;
export const deleteImageItem = /* GraphQL */ `
  mutation DeleteImageItem(
    $input: DeleteImageItemInput!
    $condition: ModelImageItemConditionInput
  ) {
    deleteImageItem(input: $input, condition: $condition) {
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
      type
    }
  }
`;
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      id
      galleryID
      url
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      id
      galleryID
      url
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      id
      galleryID
      url
    }
  }
`;
