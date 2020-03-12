import _ from 'lodash';

export function paginate(users, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(users)
        .slice(startIndex)
        .take(pageSize)
        .value();
}