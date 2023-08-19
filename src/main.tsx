import {WebUI} from "https://raw.githubusercontent.com/webui-dev/deno-webui/main/mod.ts";
import {renderServerHTML} from "./server.tsx";


// calculates the area of a circle
function calculateArea(diameter: number): number {
    const radius = diameter / 2;
    return Math.PI * radius * radius;
}

// the window we will be using
const myWindow = new WebUI();

// Allow multi access because my firefox windows closed every time on its own without it
myWindow.setMultiAccess(true);

// Bind to the events of the buttons in the UI via their IDs
myWindow.bind("Exit", () => WebUI.exit());
myWindow.bind("Calculate", calculate);

// the backend function to calculate the event triggered in the ui
async function calculate({ window }) {
    console.log("Calculating area");
    try {
        // window.script runs a javascript function in the frontend and returns the result
        const diameter = parseFloat(await window.script("return getDiameter()").catch((e) => {
            console.error(`Error in the JavaScript: ${e}`);
            return 0;
        }));
        console.log(`Diameter: ${diameter}`)
        const price = parseFloat(await window.script("return getPrice()").catch((e) => {
            console.error(`Error in the JavaScript: ${e}`);
            return 0;
        }));
        console.log(`Price: ${price}`)
        const area = calculateArea(diameter);
        console.log(`Area: ${area}`)
        if (price !== 0) {
            const result = area / price;
            console.log(`Result: ${result}`)
            //window.run runs a javascript function in the frontend and returns a boolean indicating success
            window.run(`setResult(${result});`);
        }
    } catch (e) {
        console.error(`Error in the backend: ${e}`);
    }
}

// Render the HTML in the window
// Change the browser to whatever you want
myWindow.showBrowser(await renderServerHTML(), WebUI.Browser.AnyBrowser);

// wait here until the window is closed
await WebUI.wait();

console.log("Window closed");

// exit deno because sometimes the application won't shut down completely without it
Deno.exit(0);