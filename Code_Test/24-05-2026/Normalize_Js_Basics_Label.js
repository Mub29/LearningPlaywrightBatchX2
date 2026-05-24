

function normalizeJsBasicsLabel(label) {




    let str = label || '';
    const prefix = 'js-basic'


    str = str.trim();

    if (!str) {
        return prefix;
    }

    str = str.toLowerCase();

    str = str.replace(/[^a-z0-9]+/g, "-");

    str = str.replace(/^-+|-+$/g, "");

    return prefix + "-" + str;
}
console.log(normalizeJsBasicsLabel(" Login Button "));
// Expected output: "js-basic-login-button

console.log(normalizeJsBasicsLabel("User Profile: Edit!"));
// Expected output: "js-basic-user-name"

console.log(normalizeJsBasicsLabel("-- - Search@@Box-- -"));


console.log(normalizeJsBasicsLabel("---Special___Chars---"));
// Expected output: "js-basic-special-chars"

console.log(normalizeJsBasicsLabel(""));











