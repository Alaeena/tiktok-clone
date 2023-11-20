import { routesConfig } from '@/config';
import { DirectionRight } from '@/components/Icons/fill';
import { Button } from '@/components/Modules';

import Images from '@/components/Images/Image';
import images from '@/assets/img';

import classNames from 'classnames/bind';
import Styles from './Error.module.scss';
const cx = classNames.bind(Styles);

function Error() {
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${images.background})` }}>
            <p className={cx('title')}>
                <span>4</span>
                <Images src={images.zero} alt ="0" className={cx('image')} />
                <span>4</span>
            </p>
            <p className={cx('not-found')}>Couldn't find this page</p>
            <p className={cx('recommend')}>Check out more trending videos on TikTok</p>

            <Button style={['sizeL', 'primary', cx('button')]} link={routesConfig.root} leftIcon={<DirectionRight />}>
                Watch now
            </Button>
        </div>
    );
}

export default Error;
