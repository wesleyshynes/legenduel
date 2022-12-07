import { useRouteError } from "react-router-dom";

export default function RouteErrorScreen() {
    const error: any = useRouteError();
    console.error(error);
    return (
        <div className="App route-error-screen">
            <h1>Route Error</h1>
            <h2>Details below</h2>
            {error && (
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            )}
        </div>
    )
}