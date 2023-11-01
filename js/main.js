const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


export function getLanguages() {
    return ["de", "en", "fr", "it", "es"]
}


let defaultTranslations = null
export function setDefaultTranslations(value) {
    defaultTranslations = value
}


export function getDefaultTranslations() {
    return defaultTranslations
}


export function flattenTranslations(obj) {
    const result = {}

    const insertValue = ([entryKey, entryValue], path) => {
        const p = path === "" ? entryKey : `${path}.${entryKey}`
        if (entryValue && typeof entryValue === "object")
            Object.entries(entryValue).forEach((c) => insertValue(c, p))
        else
            result[p] = entryValue
    }

    Object.entries(obj).forEach((entry) => insertValue(entry, ""))
    return result
}


export function nestTranslations(data) {
    if (Array.isArray(data) || Object(data) !== data)
        return data;
    const result = {};
    let cur, prop, idx, last, temp;
    for (const p of Object.keys(data)) {
        cur = result;
        prop = "";
        last = 0;
        do {
            idx = p.indexOf(".", last);
            temp = p.substring(last, idx !== -1 ? idx : undefined);
            if (!cur[prop]) {
                cur[prop] = {};
            }
            cur = cur[prop]
            prop = temp;
            last = idx + 1;
        } while (idx >= 0);
        cur[prop] = data[p];
    }
    return result[""];
}


export function getUrlParameter(parameterName) {
    return urlParams.get(parameterName)
}


export function getRequiredUrlParameter(parameterName) {
    let result = getUrlParameter(parameterName)
    if (typeof result === 'string' && result.length > 0) return result;
    if (typeof result === "number" && !isNaN(result)) return result;

    // error case
    throw `Missing URL parameter: ${parameterName}`;
}


export function loadJSON(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            dataType: "json",
            success: (response) => {
                try {
                    if (typeof response === "string") {
                        resolve(JSON.parse(response));
                    } else if (typeof response === "object") {
                        resolve(response);
                    } else {
                        resolve({});
                    }
                } catch (error) {
                    console.error(error);
                    resolve({});
                }
            },
            error: (error) => {
                reject(error);
            },
        });
    });
}