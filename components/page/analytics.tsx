import { useEffect } from 'react';
import { withRouter } from 'next/router';

export default withRouter(function Analytics(props) {
    const { router } = props;

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            const ga = (window as any).ga;
            ga('set', 'page', url);
            ga('send', 'pageview');
        };
        router.events.on('routeChangeStart', handleRouteChange)
        return () => router.events.off('routeChangeStart', handleRouteChange);
    }, [])

    return null;
})