var langs = ["es", "en"];
var defaultLang = "en";
var regex = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;

function parse(al){
    var strings = (al || "").match(regex);
    return strings.map(function(m){
        if(!m){
            return;
        }

        var bits = m.split(';');
        var ietf = bits[0].split('-');
        var hasScript = ietf.length === 3;

        return {
            code: ietf[0],
            script: hasScript ? ietf[1] : null,
            region: hasScript ? ietf[2] : ietf[1],
            quality: bits[1] ? parseFloat(bits[1].split('=')[1]) : 1.0
        };
    }).filter(function(r){
            return r;
        }).sort(function(a, b){
            return b.quality - a.quality;
        });
}

export async function onRequest(context) {
    let pathname = new URL(context.request.url).pathname;

    if (pathname.includes("/es")) {
        return context.next();
    }

    let languagesPrefered = parse(context.request.headers.get("Accept-Language"));
    let languagesSelected = languagesPrefered.filter(lang => {
        if (langs.some(l => lang.code.includes(l))) {
            return lang.code
        }
    })

    if (languagesSelected.length !== 0 && languagesSelected[0].code !== defaultLang) {
        return Response.redirect(`${new URL(context.request.url).protocol}${new URL(context.request.url).hostname}/${languagesSelected[0].code}${pathname}`)
    } else {
        return context.next()
    }
}