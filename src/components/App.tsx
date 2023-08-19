import {MyButton} from "./MyButton.tsx";
import {MyDisplayField} from "./MyDisplayField.tsx";
import {MyNumberField} from "./MyNumberField.tsx";

// the main component for the UI
export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>Ultra</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
        <h1>Yep, hello</h1>
        {/* All the global functions for accessing the html are hidden in the components. */}
        <MyNumberField id={'Diameter'} name={'Diameter'}/>
        <MyNumberField id={'Price'} name={'Price'}/>

        <MyButton id={'Calculate'} name={'Calculate Area'}/>
        <MyButton id={'Exit'} name={'Exit Application'}/>

        <MyDisplayField id={'Result'} defaultText={'Calculation'}/>

        {/* This script tag is required by webui. */}
        <script src="/webui.js"/>
        </body>
        </html>
    )
}