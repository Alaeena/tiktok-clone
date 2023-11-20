import { Home, Following, Upload, Profile, Error, Video } from '../pages';
import { routesConfig } from '../config';
import { OnlyHeader } from '../layouts';

const publicRoutes = [
    { path: routesConfig.root, component: Home },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: OnlyHeader },
    { path: routesConfig.error, component: Error, layout: OnlyHeader },
];

const modalRoutes = [{ path: routesConfig.video, component: Video }];
export { publicRoutes, modalRoutes };
