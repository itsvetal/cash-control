export const day = (date: Date) => {
    return date.toLocaleDateString('en-EN', {day: '2-digit'});
}

export const month = (date: Date) => {
    return date.toLocaleDateString('en-EN', {month: 'long'}).toLowerCase();
}

export const year = (date: Date) => {
    return date.getFullYear();
}
