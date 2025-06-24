import './globals.css';
import LoadingPage from './LoadingPage';

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body fallback={<LoadingPage/>}>
                {children}
            </body>
        </html>
    )
}