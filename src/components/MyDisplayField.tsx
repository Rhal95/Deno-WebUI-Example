export type MyDisplayFieldParams = { defaultText: string, id: string };

/**
 * A simple component that displays a text which is synced to the backend.
 * the text can be changed by calling the function set${id} with a string as parameter.
 */
export function MyDisplayField({defaultText, id}: MyDisplayFieldParams) {
    return <>
        <div id={id}>{defaultText}</div>
        <script dangerouslySetInnerHTML={{__html: `
            function set${id}(result) {
            document.getElementById('${id}').innerHTML = result;
        }
        `}}/>
    </>;
}