import App from "./components/App.tsx";
import {createServer} from "ultra/server.ts";

/**
 * This is a somewhat hacky way to get SSR and JSX working with WebUI.
 * This should probably be replaced with a more sophisticated solution that does not require creating a server every time the page should be rendered.
 */

export async function renderServerHTML(): string {
    const server = await createServer({
        importMapPath: import.meta.resolve("../importMap.json"),
        browserEntrypoint: import.meta.resolve('./client.tsx'),
    });

    const stream: ReadableStream = await server.render(<App/>);

    const readerResult = await stream.getReader().read();

    return new TextDecoder().decode(readerResult.value);
}
