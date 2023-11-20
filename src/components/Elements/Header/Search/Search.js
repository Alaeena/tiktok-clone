import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomTippy from '@tippyjs/react/headless';

// Node Modules
import { useState, useEffect, useRef } from 'react';
import { getUsers } from '@/services';
import { Wrapper } from '@/components/Modules';

// CSS styles
import classNames from 'classnames/bind';
import Styles from './Search.module.scss';
const cx = classNames.bind(Styles);
let TimerId;

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [focus, setFocus] = useState(false);
    const [loading, setLoading] = useState(false);

    const input = useRef();

    useEffect(() => {
        const value = searchValue.trim();
        if (!value) {
            return;
        }
        TimerId = setTimeout(()=>{
            setLoading(true);
            getUsers(value).then((data) => {
                setLoading(false);
                setSearchResult(data);
            });
        },300)
        
        return ()=> clearTimeout(TimerId)
    }, [searchValue]);
    function renderResult(attrs) {
        return (
            <div className={cx('search-result')} {...attrs}>
                <Wrapper value={searchValue}>{searchResult}</Wrapper>;
            </div>
        );
    }
    function handleChange(value) {
        if (value.startsWith(' ')) {
            setSearchValue('');
        } else {
            setSearchValue(value);
        }
    }
    function handleClear() {
        setSearchValue('');
        input.current.focus();
    }
    return (
        <div>
            <CustomTippy
                interactive
                visible={focus && !!searchValue }
                render={renderResult}
                onClickOutside={() => setFocus(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={input}
                        value={searchValue}
                        onChange={(e) => handleChange(e.target.value)}
                        onFocus={() => setFocus(true)}
                        placeholder="Search account and videos"
                        className={cx('search-input')}
                        spellCheck={false}
                    ></input>
                    <button className={cx('search-button')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                    {!loading && !!searchValue && (
                        <button className={cx('search-close')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />}
                </div>
            </CustomTippy>
        </div>
    );
}

export default Search;
