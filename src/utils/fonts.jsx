export const getTextAlign = (textAlign = "right") => {
    const textAlingMap = {
        left: "text-left",
        right: "text-right",
        center: "text-center",
        justify: "text-justify"
    }
    return `${textAlingMap[textAlign] || ""}`
}
export const getFontSizeForHeading = (level) => {
    const fontSizeMap = {
        1: "text-6xl leading-[70px] font-extrabold",
        2: "text-4xl md:text-5xl leading-[60px] font-extrabold ",
        3: "text-4xl leading-[50px] font-semibold",
        4: "text-3xl leading-[50px] font-medium",
        5: "text-2xl leading-[50px] font-medium",
        6: "text-xl leading-[50px] font-medium",
    }
    return `${fontSizeMap[level] || ""}`
}