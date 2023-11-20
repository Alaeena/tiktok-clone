import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

import classNames from 'classnames';
import images from '@/assets/img';
import Styles from './Images.module.scss';

const Images = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [_fallback, setFallback] = useState('');
    function handleError() {
        setFallback(images.noImg);
    }
    return (
        <img
            ref={ref}
            alt={alt}
            src={_fallback || src}
            className={classNames(className, Styles.wrapper)}
            {...props}
            onError={handleError}
        />
    );
});
Images.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
Images.displayName = 'Images';
export default Images;
