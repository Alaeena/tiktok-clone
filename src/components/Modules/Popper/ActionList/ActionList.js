import { Flag, CircleError } from '@/components/Icons/regular';
import CustomTippy from '@tippyjs/react/headless';

import Styles from './ActionList.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(Styles);

function ActionList({ children }) {
    return (
        <div>
            <CustomTippy
                interactive
                delay={[200, 200]}
                placement="bottom-start"
                hideOnClick={false}
                render={() => (
                    <ul className={cx('list')}>
                            <li className={cx('item')}>
                                <Flag/>
                                <span>Report</span>
                            </li>
                            <li className={cx('item','last')}>
                                <CircleError/>
                                <span>Block</span>
                            </li>
                    </ul>
                )}
            >
                {children}
            </CustomTippy>
        </div>
    );
}

export default ActionList;
