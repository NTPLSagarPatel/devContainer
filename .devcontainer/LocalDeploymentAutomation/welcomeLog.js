const colorGreen = 32;
const colorYellow = 33;
const colorBlue = 34;
const redColor = 31;
const highlightedBlue = 44;
const underlined = 4;

function setTextColor(color){
    color = color ? color : 0;
    return `\u001b[${color}m`;
}

let welcomeBlock = `







${setTextColor(highlightedBlue)}Welcome to DIP!${setTextColor()}

Use this terminal to configure git or any other settings.

${setTextColor(colorGreen)}To run DIP${setTextColor()}, simply open each of the colored terminals and press 'enter'. Each colored terminal runs a difference part of the platform (${setTextColor(colorBlue)}UI pieces are blue${setTextColor()}, ${setTextColor(colorGreen)}DIP Engine pieces are green${setTextColor()}).

${setTextColor(colorYellow)}If this is the first time you've run the DIP Dev Container${setTextColor()}, check if the 'Configuring...' terminal is done installing the platform dependencies before attempting to run it. ${setTextColor(underlined)}If there are any errors in the 'Configuring...' terminal${setTextColor()}, simply run the 'npm run setup-local' command below to retry:
`;

function addColorToText(text, color){
    if(isNaN(color)){
        color = 0;
    }
    return `\u001b[${color}m${text}\u001b[0m`;
}

console.log(welcomeBlock);