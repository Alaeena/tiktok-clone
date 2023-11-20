import { useState } from 'react';
import { Face } from '@/components/Icons/regular';
// CSS styles
import classNames from 'classnames/bind';
import Styles from './VideoComment.module.scss';
const cx = classNames.bind(Styles);

// CONSTANT
const maxLength = 150;
const defaultHeight = '18px';

function CommentBar() {
    const [value, setValue] = useState('');
    const [height, setHeight] = useState(defaultHeight);
    const handleChange = (e) => {
        const element = e.target ? e.target : e;
        element.style.height = defaultHeight;
        element.style.height = element.scrollHeight + 'px';
        setHeight(element.style.height);
        setValue(element.value);
    };
    return (
        <div className={cx('search')}>
            <div className={cx('text-box')}>
                <textarea
                    value={value}
                    onChange={handleChange}
                    style={{ height }}
                    placeholder="Add comment..."
                    spellCheck={false}
                    maxLength={maxLength}
                ></textarea>
                {height > defaultHeight && (
                    <p className={cx({ maxed: maxLength === value.length })}>
                        {value.length}/{maxLength}
                    </p>
                )}
                <button className={cx('emote')}>
                    <Face />
                </button>
            </div>
            <button className={cx('submit', { active: !!value })}>Post</button>
        </div>
    );
}

export default CommentBar;
