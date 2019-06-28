export function selectBook(book) {
    //selectBook is an action creator which returns an action having a type property
    return {
        type : 'BOOK_SELECTED',
        payload : book
    }
}