const input = document.querySelector("#input");
const output = document.querySelector("#output");


const regex1 = /(&[0-9a-f])/gi;

const colours = {
    "&0": "#00000",
    "&1":"#0000AA",
    "&2":"#00AA00",
    "&3":"#00AAAA",
    "&4":"#AA0000",
    "&5":"#AA00AA",
    "&6":"#FFAA00",
    "&7":"#AAAAAA",
    "&8":"#555555",
    "&9":"#5555FF",

    "&a": "55FF55",
    "&b": "55FFFF",
    "&c": "FF5555",
    "&d": "FF55FF",
    "&e": "FFFF55",
    "&f": "FFFFFF",
    "&g": "DDD605"
}


let chars  = {
    '<': '&lt;',
    '>': '&gt;'
}

const sanitize = (str) => str.replace(/[&<>]/g, tag => chars[tag] || tag);

input.onkeyup = () => {
    value = sanitize(input.value);

    let result = "";
    while((result = regex1.exec(value)) !== null) {
        value = value.split(result[0]).join(`<font color="${colours[result[0].toLowerCase()]}">`)
    }

    output.innerHTML = value;
}

input.onkeyup();