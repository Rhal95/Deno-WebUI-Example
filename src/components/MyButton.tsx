export type MyButtonProps = {
    id: string,
    name: string
}

/**
 * A simple button component
 * events from the button can be bound to the backend by calling the function window.bind(${id}, ...)
 */
export const MyButton = ({id, name}: MyButtonProps) => {
    return (
        <button id={id} >{ name }</button>
    )
}