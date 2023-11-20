import { useState, useEffect } from 'react';

import { getFollowingList } from '@/services';
import LoadingItem from './LoadingItem';
import AccountItem from './AccountItem';

// CSS Style
import classNames from 'classnames/bind';
import Styles from './AccountList.module.scss';
const cx = classNames.bind(Styles);

function SuggestedList() {
    const [list, setList] = useState();
    const [toggle, setToggle] = useState(5);
    let content = list ? list : [];
    content = content.length >= toggle ? content.slice(0, toggle - 1) : content;

    useEffect(() => {
        getFollowingList().then((data) => {
            setList(data);
        });
    }, []);
    const handleToggle = () => {
        setToggle((prev) => prev + 5);
    };
    const renderList = () => content.map((item, index) => <AccountItem key={index}>{item}</AccountItem>);
    return (
        <div className={cx('menu')}>
            <h2 className={cx('header')}>'Following accounts'</h2>
            <ul className={cx('list')}>{list ? renderList() : <LoadingItem />}</ul>
            {list && list.length >= toggle && (
                <button className={[cx('button')]} onClick={handleToggle}>
                    <span>{'See more'}</span>
                </button>
            )}
        </div>
    );
}

export default SuggestedList;
