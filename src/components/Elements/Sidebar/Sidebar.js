import { useAuth } from '@/hooks';
import classNames from 'classnames/bind';
import Styles from './Sidebar.module.scss';

// Services
// Custom Modules
import Menu from './MenuList';
import { SuggestedList, FollowingList } from './AccountList';
import Discover from './Discover';
import Footer from './Footer';
import Login from './Login';

const cx = classNames.bind(Styles);

function Sidebar() {
    const { state } = useAuth();
    const isLogin = state.isLogin;

    return (
        <div className={cx('wrapper')}>
            <Menu />
            {!isLogin && <Login />}
            <SuggestedList />
            {isLogin && <FollowingList />}
            <Discover title={'Explore'} />
            <Footer />
        </div>
    );
}
export default Sidebar;
