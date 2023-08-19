export type MyNumberFieldParams = { name: string, id: string };

/**
 * A simple JSX number field that is synced to the backend.
 * The value of the field can be retrieved in the backend by calling the function get${id}().
 */
export function MyNumberField({id, name}: MyNumberFieldParams) {
    return <>
        <label><span>{name}</span><input id={id} type={'number'}/></label>
        <script dangerouslySetInnerHTML={{__html: `
        function get${id}() {
            return document.getElementById('${id}').value;
        }
        `}}>
        </script>
    </>;
}