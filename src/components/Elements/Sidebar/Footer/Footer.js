import classNames from 'classnames/bind';
import Styles from './Footer.module.scss';
const cx = classNames.bind(Styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('line')}>
                <a rel="noreferrer" href="https://www.tiktok.com/about?lang=en" target="_blank">
                    About
                </a>
                <a rel="noreferrer" href="https://newsroom.tiktok.com/" target="_blank">
                    Newsroom
                </a>
                <a rel="noreferrer" href="https://www.tiktok.com/about/contact?lang=en" target="_blank">
                    Contact
                </a>
                <a rel="noreferrer" href="https://careers.tiktok.com" target="_blank">
                    Careers
                </a>
                <a rel="noreferrer" href="https://www.bytedance.com/" target="_blank">
                    ByteDance
                </a>
            </div>
            <div className={cx('line')}>
                <a rel="noreferrer" href="https://www.tiktok.com/forgood" target="_blank">
                    TikTok for Good
                </a>
                <a
                    rel="noreferrer"
                    href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;refer=tiktok_web"
                    target="_blank"
                >
                    Advertise
                </a>
                <a rel="noreferrer" href="https://developers.tiktok.com/?refer=tiktok_web" target="_blank">
                    Developers
                </a>
                <a rel="noreferrer" href="https://www.tiktok.com/transparency" target="_blank">
                    Transparency
                </a>
                <a rel="noreferrer" href="https://www.tiktok.com/tiktok-rewards/en" target="_blank">
                    TikTok Rewards
                </a>
                <a rel="noreferrer" href="https://www.tiktok.com/embed" target="_blank">
                    TikTok Embeds
                </a>
            </div>
            <div className={cx('line')}>
                <a rel="noreferrer" href="https://support.tiktok.com/en" target="_blank">
                    Help
                </a>
                <a rel="noreferrer" href="https://www.tiktok.com/safety?lang=en" target="_blank">
                    Safety
                </a>
                <a rel="noreferrer" href="https://www.tiktok.com/legal/terms-of-service?lang=en" target="_blank">
                    Terms
                </a>
                <a rel="noreferrer" href="https://www.tiktok.com/legal/privacy-policy-row?lang=en" target="_blank">
                    Privacy
                </a>
                <a rel="noreferrer" href="https://www.tiktok.com/creators/creator-portal/en-us/" target="_blank">
                    Creator Portal
                </a>
                <a rel="noreferrer" href="https://www.tiktok.com/community-guidelines?lang=en" target="_blank">
                    Community Guidelines
                </a>
            </div>
            <span className={cx('span')}>© 2023 TikTok</span>
        </div>
    );
}

export default Footer;
