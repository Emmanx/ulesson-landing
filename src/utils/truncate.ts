
export const truncate = (item: string, length: number) =>{
    if (item && item.length > length){
        return item.substring(0, length)+ '...'
    }
    return item
}