
export const convertDateToPersionDate = (date) => {
    const persionDate = new Date(date).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' })
    return persionDate
}

