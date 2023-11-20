import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '@/services';

import { UserInfo, LoadingInfo } from './UserInfo';
import { UserList, LoadingList } from './UserList';

import classNames from 'classnames/bind';
import Styles from './Profile.module.scss';
const cx = classNames.bind(Styles);

function Profile() {
    const [data, setData] = useState();
    const { nickname } = useParams();

    useEffect(() => {
        setData();
        getUser(nickname).then((data) => {
            setData(data);
        });
    }, [nickname]);
    return (
        <div className={cx('wrapper')}>
            {data ? (
                <>
                    <UserInfo data={data} />
                    <UserList data={data} />
                </>
            ) : (
                <>
                    <LoadingInfo />
                    <LoadingList />
                </>
            )}
        </div>
    );
}

export default Profile;
