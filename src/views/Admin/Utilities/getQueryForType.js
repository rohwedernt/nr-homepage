import { ItemTypes } from '../../../data/ItemTypes';
import { createLinkItem, createImageItem, createMusicItem } from '../../../graphql/mutations';
import { updateLinkItem, updateImageItem, updateMusicItem } from '../../../graphql/mutations';
import { deleteLinkItem, deleteImageItem, deleteMusicItem } from '../../../graphql/mutations';


export function getCreateQueryForType(type) {
    let query;

    switch (type) {
        case ItemTypes.dev || ItemTypes.astronomy:
            query = createLinkItem
            break;
        case ItemTypes.travel || ItemTypes.food:
            query = createImageItem
            break;
        case ItemTypes.music:
            query = createMusicItem
            break;
        default:
            console.log('invalid type for query')
            break;
    }

    return query;
}

export function getUpdateQueryForType(type) {
    let query;

    switch (type) {
        case ItemTypes.dev || ItemTypes.astronomy:
            query = updateLinkItem
            break;
        case ItemTypes.travel || ItemTypes.food:
            query = updateImageItem
            break;
        case ItemTypes.music:
            query = updateMusicItem
            break;
        default:
            console.log('invalid type for query')
            break;
    }

    return query;
}

export function getDeleteQueryForType(type) {
    let query;

    switch (type) {
        case ItemTypes.dev || ItemTypes.astronomy:
            query = deleteLinkItem
            break;
        case ItemTypes.travel || ItemTypes.food:
            query = deleteImageItem
            break;
        case ItemTypes.music:
            query = deleteMusicItem
            break;
        default:
            console.log('invalid type for query')
            break;
    }

    return query;
}
