export const formatToCorrectDate = (date: string | null): string => {
    if (date === null)
        return "Релиз завершён";

    const locale = new Intl.Locale("ru", {});

    const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",                // "numeric" | "2-digit"
        month: "long",                  // "numeric" | "2-digit" | "long" | "short" | "narrow"
        day: "numeric",                 // "numeric" | "2-digit"
        weekday: "short",               // "long" | "short" | "narrow"
        hour: "numeric",                // "numeric" | "2-digit"
        minute: "numeric",              // "numeric" | "2-digit"
        timeZoneName: "short",   // "long" | "short" | "longGeneric" | "shortOffset" | "longOffset" | "shortGeneric"
        hour12: false,                  // true | false
        formatMatcher : "basic",     // "best fit" | "basic"
    };

    const ruDate = Intl.DateTimeFormat(locale.toString(), dateOptions);
    return ruDate.format(new Date(date));
}