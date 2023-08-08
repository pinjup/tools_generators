import { ToolsContextProvider } from '@/components/Context';
import '@/styles/globals.css';
import Base from '@/templates/base';

export default function App({ Component, pageProps }) {
    return (
        <ToolsContextProvider>
            <Base>
                <Component {...pageProps} />
            </Base>
        </ToolsContextProvider>
    );
}
