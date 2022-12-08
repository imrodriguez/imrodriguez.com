import i18next from "i18next";

export const getLanguageUrl = (url:string) => {
    if (i18next.language === "en") {
        return url
    }

    if (url === "/") {
        return `/${i18next.language}`
    }

    return `/${i18next.language}${url}`
}