
export const convertDateToPersionDate = (date) => {
    var timestamp = Date.parse(date);
    const persionDate = new Date(date).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' })
    var englishDate = date
    if (isNaN(timestamp) == false) {
         englishDate = new Date(timestamp);
    };
    return persionDate === "Invalid Date" ? englishDate : persionDate
}

