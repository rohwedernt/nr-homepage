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
      date
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
      date
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
      date
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
export const updateImageItem = /* GraphQL */ `
  mutation UpdateImageItem(
    $input: UpdateImageItemInput!
    $condition: ModelImageItemConditionInput
  ) {
    updateImageItem(input: $input, condition: $condition) {
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
export const deleteImageItem = /* GraphQL */ `
  mutation DeleteImageItem(
    $input: DeleteImageItemInput!
    $condition: ModelImageItemConditionInput
  ) {
    deleteImageItem(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
