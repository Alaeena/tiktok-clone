import { useState, useEffect } from 'react';

import { getSuggestedUser } from '@/services';
import LoadingItem from './LoadingItem';
import AccountItem from './AccountItem';

// CSS Style
import classNames from 'classnames/bind';
import Styles from './AccountList.module.scss';
const cx = classNames.bind(Styles);

function SuggestedList() {
    const [list, setList] = useState([]);
    const [toggle, setToggle] = useState(false);
    const content = toggle === true ? list : list.slice(0, 4);

    useEffect(() => {
        getSuggestedUser().then((data) => {
            setList(data);
        });
    }, []);
    const handleToggle = () => {
        setToggle((prev) => !prev);
    };
    const renderList = () =>
        content.map((item, index) => (
            <AccountItem key={index} showTippy>
                {item}
            </AccountItem>
        ));
    return (
        <div className={cx('menu')}>
            <h2 className={cx('header')}>'Suggested accounts'</h2>
            <ul className={cx('list')}>{content.length > 0 ? renderList() : <LoadingItem />}</ul>
            {list.length > 0 && (
                <button className={[cx('button')]} onClick={handleToggle}>
                    <span>{toggle === true ? 'See less' : 'See more'}</span>
                </button>
            )}
        </div>
    );
}

export default SuggestedList;
