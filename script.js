const textarea = document.createElement("textarea");
const info = document.createElement("div");
const keyBoard = document.createElement("div");
const body = document.querySelector("body");
info.classList.add("info");
info.innerText = "Shift + Alt for change language. OS: Windows. Skype: live:mr.vromanovski";
textarea.classList.add("textarea");
keyBoard.classList.add("keys-container");
body.append(textarea);
body.append(info);
body.append(keyBoard);

let lang = "eng";

const setLanguage = () => {
    if(localStorage.getItem("language")){
        lang = localStorage.getItem("language")
    }else{
        lang ="eng"
    }
}

setLanguage()

let capsLock = false;

let shift = false;


const englishKeys = {
    backquote: "`",
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    minus: "-",
    equal: "=",
    Backspace: "Backspace",
    Tab: "Tab",
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    bracketLeft: "[",
    bracketRight: "]",
    del: "Delete",
    CapsLock: "CapsLock",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    semicolon: ";",
    quote: "'",
    enter: "Enter",
    shift: "Shift",
    z: "z",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    comma: ",",
    period: ".",
    slash: "/",
    arrowUp: "&#8593",
    shiftRight: "Shift",
    control: "Control",
    window: ":",
    alt: "Alt",
    space: "Space",
    arrowLeft: "&#8592",
    arrowDown: "&#8595",
    arrowRight: "&#8594",
}

const englishKeysUp = {
    backquote: "|",
    one: "!",
    two: "@",
    three: "#",
    four: "$",
    five: "%",
    six: "^",
    seven: "&",
    eight: "*",
    nine: "(",
    zero: ")",
    minus: "_",
    equal: "+",
    Backspace: "Backspace",
    Tab: "Tab",
    q: "Q",
    w: "W",
    e: "E",
    r: "R",
    t: "T",
    y: "Y",
    u: "U",
    i: "I",
    o: "O",
    p: "P",
    bracketLeft: "{",
    bracketRight: "}",
    del: "Delete",
    CapsLock: "CapsLock",
    a: "A",
    s: "S",
    d: "D",
    f: "F",
    g: "G",
    h: "H",
    j: "J",
    k: "K",
    l: "L",
    semicolon: ";",
    quote: "'",
    enter: "Enter",
    shift: "Shift",
    z: "Z",
    x: "X",
    c: "C",
    v: "V",
    b: "B",
    n: "N",
    m: "M",
    comma: "<",
    period: "~",
    slash: "?",
    arrowUp: "&#8593",
    shiftRight: "Shift",
    control: "Control",
    window: ":",
    alt: 'Alt',
    space: "Space",
    arrowLeft: "&#8592",
    arrowDown: "&#8595",
    arrowRight: "&#8594",
}

const russianKeys = {
    backquote: "ё",
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
    minus: "-",
    equal: "=",
    Backspace: "Backspace",
    Tab: "Tab",
    q: "й",
    w: "ц",
    e: "у",
    r: "к",
    t: "е",
    y: "н",
    u: "г",
    i: "ш",
    o: "щ",
    p: "з",
    bracketLeft: "х",
    bracketRight: "ъ",
    del: "Delete",
    CapsLock: "CapsLock",
    a: "ф",
    s: "ы",
    d: "в",
    f: "а",
    g: "п",
    h: "р",
    j: "о",
    k: "л",
    l: "д",
    semicolon: "ж",
    quote: "э",
    enter: "Enter",
    shift: "Shift",
    z: "я",
    x: "ч",
    c: "с",
    v: "м",
    b: "и",
    n: "т",
    m: "ь",
    comma: "б",
    period: "ю",
    slash: ".",
    arrowUp: "&#8593",
    shiftRight: "Shift",
    control: "Control",
    window: "'",
    alt: "Alt",
    space: "Space",
    arrowLeft: "&#8592",
    arrowDown: "&#8595",
    arrowRight: "&#8594",
}

const russianKeysUp = {
    backquote: "Ё",
    one: "!",
    two: '"',
    three: "№",
    four: ";",
    five: "%",
    six: ":",
    seven: "?",
    eight: "*",
    nine: "(",
    zero: ")",
    minus: "_",
    equal: "+",
    Backspace: "Backspace",
    Tab: "Tab",
    q: "Й",
    w: "Ц",
    e: "У",
    r: "К",
    t: "Е",
    y: "Н",
    u: "Г",
    i: "Ш",
    o: "Щ",
    p: "З",
    bracketLeft: "Х",
    bracketRight: "Ъ",
    del: "Delete",
    CapsLock: "CapsLock",
    a: "Ф",
    s: "Ы",
    d: "В",
    f: "А",
    g: "П",
    h: "Р",
    j: "О",
    k: "Л",
    l: "Д",
    semicolon: "Ж",
    quote: "Э",
    enter: "Enter",
    shift: "Shift",
    z: "Я",
    x: "Ч",
    c: "С",
    v: "М",
    b: "И",
    n: "Т",
    m: "Ь",
    comma: "Б",
    period: "Ю",
    slash: ",",
    arrowUp: "&#8593",
    shiftRight: "Shift",
    control: "Control",
    window: "/",
    alt: "Alt",
    space: "Space",
    arrowLeft: "&#8592",
    arrowDown: "&#8595",
    arrowRight: "&#8594",
}

const drawButtons = (l) => {
    keyBoard.innerHTML = "";
    const fragment = document.createDocumentFragment();
    if(l == "eng"){
        for(let key in englishKeys){
            const button = document.createElement("button");
            if(englishKeysUp[key] === "&#8593"){
                button.classList.add("key");
                button.classList.add("ArrowUP");
            }else if(englishKeysUp[key] === "&#8592"){
                button.classList.add("key");
                button.classList.add("ArrowLeft");
            }else if(englishKeysUp[key] === "&#8595"){
                button.classList.add("key");
                button.classList.add("ArrowDown");
            }else if(englishKeysUp[key] === "&#8594"){
                button.classList.add("key");
                button.classList.add("ArrowRight");
            }else if(englishKeys[key] == "Backspace"){
                button.classList.add("big");
                button.classList.add("backpace");
                button.addEventListener("click", () => {
                    textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd);
                    textarea.focus();
                  });
            }else if(englishKeys[key] == "CapsLock"){
                button.classList.add("big");
                button.classList.add("capslock");
            }else if(englishKeys[key] == "Shift"){
                button.classList.add("big");
                button.classList.add("shift");
                button.addEventListener("click", () => {
                    shift = !shift;
                    upperCase(lang)
                    textarea.focus();
                })
            }else if(englishKeys[key] == "Enter"){
                button.classList.add("big");
                button.classList.add("enter");
                button.addEventListener("click", () => {
                    textarea.value += "\n";
                    textarea.focus();
                  });
            }else if(englishKeys[key] == "Tab"){
                button.classList.add("big");
                button.classList.add("tab");
                button.addEventListener("click", () => {
                    textarea.value += "   ";
                    textarea.focus();
                })
            }else if(englishKeys[key] == "Space"){
                button.classList.add("space");
                button.addEventListener("click", () => {
                    textarea.value += " ";
                    textarea.focus();
                })
            }else if(englishKeys[key] == "Control"){
                button.classList.add("control");
            }else if(englishKeys[key] == "Delete"){
                button.classList.add("delete");
                button.addEventListener("click", () => {
                    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1);
                    textarea.focus();
                  });
            }else if(englishKeys[key] == "Alt"){
                button.classList.add("alt");
            }else{
                button.classList.add("key");
                button.addEventListener("click", () => {
                    textarea.value += button.innerHTML;
                    textarea.focus();
                })
                
            }
            button.innerHTML = `${englishKeys[key]}`
            fragment.append(button);
        }
        keyBoard.append(fragment);
    }else if(l == "rus"){
        for(let key in russianKeys){
            const button = document.createElement("button");
            if(englishKeysUp[key] === "&#8593"){
                button.classList.add("key");
                button.classList.add("ArrowUP");
            }else if(englishKeysUp[key] === "&#8592"){
                button.classList.add("key");
                button.classList.add("ArrowLeft");
            }else if(englishKeysUp[key] === "&#8595"){
                button.classList.add("key");
                button.classList.add("ArrowDown");
            }else if(englishKeysUp[key] === "&#8594"){
                button.classList.add("key");
                button.classList.add("ArrowRight");
            }else if(russianKeys[key] == "Backspace"){
                button.classList.add("big");
                button.classList.add("backpace");
                button.addEventListener("click", () => {
                    textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd);
                    textarea.focus();
                  });
            }else if(russianKeys[key] == "CapsLock"){
                button.classList.add("big");
                button.classList.add("capslock");
            }else if(russianKeys[key] == "Shift"){
                button.classList.add("big");
                button.classList.add("shift");
                button.addEventListener("click", () => {
                    shift = !shift;
                    upperCase(lang)
                    textarea.focus();
                })
            }else if(russianKeys[key] == "Enter"){
                button.classList.add("big");
                button.classList.add("enter");
                button.addEventListener("click", () => {
                    textarea.value += "\n";
                    textarea.focus();
                  });
            }else if(russianKeys[key] == "Tab"){
                button.classList.add("big");
                button.classList.add("tab");
            }else if(typeof(russianKeys[key]) == "number"){
                button.classList.add("number");
            }else if(russianKeys[key] == "Space"){
                button.classList.add("space");
                button.addEventListener("click", () => {
                    textarea.value += " ";
                    textarea.focus();
                })
            }else if(russianKeys[key] == "Control"){
                button.classList.add("control");
            }else if(russianKeys[key] == "Delete"){
                button.classList.add("delete");
                button.addEventListener("click", () => {
                    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1);
                    textarea.focus();
                  });
            }else if(russianKeys[key] == "Alt"){
                button.classList.add("alt");
            }else{
                button.classList.add("key");
                button.addEventListener("click", () => {
                    textarea.value += button.innerHTML; 
                    textarea.focus();
                })
                
            }
            button.innerHTML = `${russianKeys[key]}`
            fragment.append(button);
        }
        
    }
    keyBoard.append(fragment);
}

drawButtons(lang)

const upperCase = (l) => {
    keyBoard.innerHTML = "";
    const fragment = document.createDocumentFragment();
    if(l == "eng"){
        for(let key in englishKeysUp){
            const button = document.createElement("button");
            if(englishKeysUp[key] == "Backspace" || englishKeysUp[key] == "Enter" || englishKeysUp[key] == "Tab"){
                button.classList.add("big");
            }else if(englishKeysUp[key] == "Shift"){
                button.classList.add("big");
                button.classList.add("active");
            }else if(englishKeys[key] == "CapsLock"){
                button.classList.add("big");
                button.classList.add("capslock");
            }else if(typeof(englishKeysUp[key]) == "number"){
                button.classList.add("number");
            }else if(englishKeysUp[key] == "Space"){
                button.classList.add("space");
            }else{
                button.classList.add("key");
                button.addEventListener("click", () => {
                    textarea.value += button.innerHTML;
                    if(shift){
                        shift = false
                        drawButtons(lang) 
                    }  
                })
            }
            button.innerHTML = `${englishKeysUp[key]}`
            fragment.append(button);
        }
    }else if(l == "rus"){
        for(let key in englishKeysUp){
            const button = document.createElement("button");
            if(russianKeysUp[key] == "Backspace" || englishKeysUp[key] == "Enter" || englishKeysUp[key] == "Tab"){
                button.classList.add("big");
            }else if(russianKeysUp[key] == "Shift"){
                button.classList.add("big");
                button.classList.add("active");
            }else if(russianKeysUp[key] == "CapsLock"){
                button.classList.add("big");
                button.classList.add("capslock");
            }else if(typeof(russianKeysUp[key]) == "number"){
                button.classList.add("number");
            }else if(russianKeysUp[key] == "Space"){
                button.classList.add("space");
            }else{
                button.classList.add("key");
                button.addEventListener("click", () => {
                    textarea.value += button.innerHTML;
                    if(shift){
                        shift = false
                        drawButtons(lang) 
                    }  
                })
            }
            button.innerHTML = `${russianKeysUp[key]}`
            fragment.append(button);
        }
    }
    
    keyBoard.append(fragment);
}

const setCapsLock = () => {
    const letters = document.querySelectorAll(".key");
    // const capsButton = document.querySelector(".capslock");
    if(capsLock){
        letters.forEach(item => {
            item.innerText = item.innerHTML.toUpperCase()
        })
    }else{
        letters.forEach(item => {
            item.innerText = item.innerHTML.toLowerCase()
        })
    }
    
}

const setLanguageInStorage = (lang) => {
    localStorage.setItem("language", lang)
    console.log(localStorage.getItem("language"))
}

window.addEventListener("keydown", (e) => {
    const keys = document.querySelectorAll("button")
    const arrowUp = document.querySelector(".ArrowUp")
    const arrowLeft = document.querySelector(".ArrowLeft")
    const arrowDown = document.querySelector(".ArrowDown")
    const arrowRight = document.querySelector(".ArrowRight")
    textarea.focus()
    keys.forEach(item => {
        if(e.key == item.innerHTML){
            item.classList.add("active")
        }else if(e.code == item.innerHTML){
            item.classList.add("active")
        }
        })
    
    if(e.key == "ArrowUp"){
        arrowUp.classList.add("active")
    }else if(e.key == "ArrowLeft"){
        arrowLeft.classList.add("active")
    }else if(e.key == "ArrowDown"){
        arrowDown.classList.add("active")
    }else if(e.key == "ArrowRight"){
        arrowRight.classList.add("active")
    }

    if(e.altKey && e.shiftKey){
        lang == "eng" ? lang = "rus" : lang = "eng"
        setLanguageInStorage(lang)
    }

    switch  (e.key) {
        case "Shift":
            shift = !shift;
            upperCase(lang);
            break;
        case "CapsLock":
            capsLock = !capsLock;
            setCapsLock();
            break;
    }
})

window.addEventListener("keyup", (e) => {
    let keys = document.querySelectorAll("button")
    const arrowUp = document.querySelector(".ArrowUp")
    const arrowLeft = document.querySelector(".ArrowLeft")
    const arrowDown = document.querySelector(".ArrowDown")
    const arrowRight = document.querySelector(".ArrowRight")
    keys.forEach(item => {
        if(e.key == item.innerHTML){
            item.classList.remove("active")
        }else if(e.code == item.innerHTML){
            item.classList.remove("active")
        }
    })

    if(e.key == "ArrowUp"){
        arrowUp.classList.remove("active")
    }else if(e.key == "ArrowLeft"){
        arrowLeft.classList.remove("active")
    }else if(e.key == "ArrowDown"){
        arrowDown.classList.remove("active")
    }else if(e.key == "ArrowRight"){
        arrowRight.classList.remove("active")
    }

    switch  (e.key) {
        case "Shift":
            shift = !shift;
            drawButtons(lang);
            break;
    }
})



