export const UpdateObjectInArray = (items, itemID, objParam, newObjProps) => {
    return items.map(u => {
        if (u[objParam] === itemID) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}