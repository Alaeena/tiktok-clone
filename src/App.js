import { Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider, VideoProvider } from '@/config';
import { publicRoutes, modalRoutes } from '@/routes';
import { DefaultLayout } from '@/layouts';

function App() {
    const location = useLocation();
    const background = location.state?.background;

    const renderModel = () =>
        modalRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
        });
    const render = () =>
        publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <Layout>
                            <Page />
                        </Layout>
                    }
                />
            );
        });
    return (
        <UserProvider>
            <VideoProvider>
                <div className="App">
                    <Routes location={background || location}>{render()}</Routes>
                </div>
                {background && <Routes>{renderModel()}</Routes>}
            </VideoProvider>
        </UserProvider>
    );
}

export default App;
