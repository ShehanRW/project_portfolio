// pages/_app.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        // Automatically redirect to the home page on load
        router.push('/home');
    }, [router]);

    return <Component {...pageProps} />;
}

export default MyApp;
