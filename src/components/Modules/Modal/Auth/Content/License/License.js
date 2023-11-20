import classNames from 'classnames/bind';
import Styles from './License.module.scss';
const cx = classNames.bind(Styles);

function license() {
    return (
        <div className={cx('license')}>
            <p>
                By continuing, you agree to TikTok’s
                <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/terms-of-use?lang=en">
                    Terms of Service
                </a>
                and confirm that you have read TikTok’s
                <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/privacy-policy?lang=en">
                    Privacy Policy
                </a>
            </p>
        </div>
    );
}

export default license;
