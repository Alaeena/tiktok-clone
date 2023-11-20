import { getVideosList } from '@/services';
import { useState, useEffect, useRef } from 'react';
import { useVideo } from '@/hooks';

import BottomModal from '@/components/Elements/BottomModal';
import HomeItem from './HomeItem';
import classNames from 'classnames/bind';
import Styles from './HomeList.module.scss';
const cx = classNames.bind(Styles);

function Home() {
    const listRef = useRef();

    const { setPlaying, disabled, list, setList } = useVideo();
    const [currentPage, setCurrentPage] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (list.length === 0 || disabled) {
            return;
        }
        const nodeList = listRef.current.querySelectorAll('div[id]');
        const nextPage = page + 1;
        const offsetList = Array.from(nodeList).reduce(
            (start, element, index) => {
                const prev = start[start.length - 1] || 0;
                const value = index === 0 ? element.offsetHeight - 200 : element.offsetHeight + prev;
                return [...start, value];
            },
            [0],
        );

        let TimerId;
        function handleScroll() {
            clearTimeout(TimerId);
            let videoIndex = 0;
            for (let index in offsetList) {
                const height = offsetList[index];
                if (window.scrollY >= height) {
                    videoIndex = index;
                } else {
                    break;
                }
            }
            if (Number(videoIndex) === list.length - 1 && page !== nextPage) {
                setPage(nextPage);
            }
            TimerId = setTimeout(() => setPlaying(list[videoIndex].id), 200);
        }
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);
    useEffect(() => {
        if (currentPage !== page) {
            getVideosList(page).then((data) => setList((prev) => [...prev, ...data]));
            setCurrentPage(page);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    return (
        <div ref={listRef} className={cx('container')}>
            {list.map((item, index) => (
                <HomeItem key={index} data={item} map={list} />
            ))}
            <span className="tiktok-loading"></span>
            <BottomModal />
        </div>
    );
}

export default Home;
