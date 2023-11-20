export const Home = ({ width = '3.2rem', height = '3.2rem' }) => (
    <svg width={width} height={height} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
        ></path>
    </svg>
);

export const UserGroup = ({ width = '3.2rem', height = '3.2rem' }) => (
    <svg width={width} height={height} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5 17C25.5 21.1421 22.1421 24.5 18 24.5C13.8579 24.5 10.5 21.1421 10.5 17C10.5 12.8579 13.8579 9.5 18 9.5C22.1421 9.5 25.5 12.8579 25.5 17Z"></path>
        <path d="M7.10396 34.7906C8.78769 30.2189 12.8204 27 18.0009 27C23.1818 27 27.2107 30.2213 28.8958 34.7898C29.3075 35.906 28.6141 37 27.5 37H8.5C7.38629 37 6.69289 35.9067 7.10396 34.7906Z"></path>
        <path d="M40.6308 37H32C31.2264 34.1633 30.0098 31.5927 28.144 29.7682C29.5384 28.9406 31.1829 28.5 33 28.5C37.239 28.5 40.536 30.8992 41.9148 35.0108C42.2516 36.0154 41.5423 37 40.6308 37Z"></path>
        <path d="M33 26.5C36.0376 26.5 38.5 24.0376 38.5 21C38.5 17.9624 36.0376 15.5 33 15.5C29.9624 15.5 27.5 17.9624 27.5 21C27.5 24.0376 29.9624 26.5 33 26.5Z"></path>
    </svg>
);

export const Compass = ({ width = '3.2rem', height = '3.2rem' }) => (
    <svg
        fill="rgba(22, 24, 35, 1)"
        width={width}
        height={height}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 40.5a16.5 16.5 0 1 0 0-33 16.5 16.5 0 0 0 0 33Zm4.43-14.54c-.12.6-.49 1.12-1.01 1.44l-8.88 5.37a.65.65 0 0 1-.98-.69l2.01-10.18c.12-.6.49-1.12 1.01-1.44l8.88-5.37a.65.65 0 0 1 .98.69l-2.01 10.18Z"
        ></path>
    </svg>
);

export const Camera = ({ width = '3.2rem', height = '3.2rem' }) => (
    <svg width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 17.5714C6.5 14.7292 8.86029 12.5 11.6782 12.5H27.8621C30.6799 12.5 33.0402 14.7292 33.0402 17.5714V18.6843L36.745 15.9435C37.6399 15.2815 38.8324 15.1731 39.8318 15.6537C40.8365 16.1369 41.5 17.1486 41.5 18.2857V29.7143C41.5 30.8514 40.8365 31.8631 39.8318 32.3463C38.8324 32.8269 37.6399 32.7185 36.745 32.0565L33.0402 29.3158V30.4286C33.0402 33.2708 30.6799 35.5 27.8621 35.5H11.6782C8.86029 35.5 6.5 33.2708 6.5 30.4286V17.5714Z"></path>
        <path
            d="M23.25 23.134C23.9167 23.5189 23.9167 24.4811 23.25 24.866L17.25 28.3301C16.5833 28.715 15.75 28.2339 15.75 27.4641L15.75 20.5359C15.75 19.7661 16.5833 19.285 17.25 19.6699L23.25 23.134Z"
            fill="white"
        ></path>
    </svg>
);
export const EyeClosed = ({ width = '2rem', height = '2rem', className, onClick }) => (
    <svg
        className={className}
        onClick={onClick}
        width={width}
        height={height}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M2.8 7.8c2.1 1 4.5 1.6 7 1.6s4.9-.6 7-1.6m-7 2v3M5.1 9.2l-1.5 2.6m11-2.6 1.5 2.6" opacity=".5"></path>
    </svg>
);
export const EyeOpen = ({ width = '2rem', height = '2rem', className, onClick }) => (
    <svg
        className={className}
        onClick={onClick}
        width={width}
        height={height}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" opacity=".5">
            <path d="M9.8 4.8c3 0 5.3 1.7 7 5-1.7 3.3-4 5-7 5s-5.3-1.7-7-5c1.6-3.4 4-5 7-5Z"></path>
            <path d="M9.8 11.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
        </g>
    </svg>
);
export const DirectionUp = ({ width = '1.6rem', height = '1.6rem' }) => (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.1086 20.3412C23.1028 19.2196 24.8972 19.2196 25.8914 20.3412L42.8955 39.5236C44.2806 41.0861 43.1324 43.5 41.004 43.5L6.99596 43.5C4.86764 43.5 3.71945 41.0861 5.10454 39.5235L22.1086 20.3412Z"
        ></path>
        <path d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5L40.5 4.5C42.1569 4.5 43.5 5.84315 43.5 7.5C43.5 9.15685 42.1569 10.5 40.5 10.5L7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5Z"></path>
    </svg>
);
export const DirectionRight = ({ width = '1.6rem', height = '1.6rem' }) => (
    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path d="M43 26.6a3 3 0 0 0 0-5.2L14.5 4.95a3 3 0 0 0-4.5 2.6v32.9a3 3 0 0 0 4.5 2.6L43 26.6Z"></path>
    </svg>
);
export const SongPlaying = ({ onClick }) => (
    <svg
        onClick={onClick}
        width="24"
        data-e2e=""
        height="24"
        viewBox="0 0 48 48"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.3359 8.37236C22.3296 7.04325 25 8.47242 25 10.8685V37.1315C25 39.5276 22.3296 40.9567 20.3359 39.6276L10.3944 33H6C4.34314 33 3 31.6568 3 30V18C3 16.3431 4.34315 15 6 15H10.3944L20.3359 8.37236ZM21 12.737L12.1094 18.6641C11.7809 18.8831 11.3948 19 11 19H7V29H11C11.3948 29 11.7809 29.1169 12.1094 29.3359L21 35.263V12.737ZM32.9998 24C32.9998 21.5583 32.0293 19.3445 30.4479 17.7211C30.0625 17.3255 29.9964 16.6989 30.3472 16.2724L31.6177 14.7277C31.9685 14.3011 32.6017 14.2371 33.0001 14.6195C35.4628 16.9832 36.9998 20.3128 36.9998 24C36.9998 27.6872 35.4628 31.0168 33.0001 33.3805C32.6017 33.7629 31.9685 33.6989 31.6177 33.2724L30.3472 31.7277C29.9964 31.3011 30.0625 30.6745 30.4479 30.2789C32.0293 28.6556 32.9998 26.4418 32.9998 24ZM37.0144 11.05C36.6563 11.4705 36.7094 12.0995 37.1069 12.4829C40.1263 15.3951 42.0002 19.4778 42.0002 23.9999C42.0002 28.522 40.1263 32.6047 37.1069 35.5169C36.7094 35.9003 36.6563 36.5293 37.0144 36.9498L38.3109 38.4727C38.6689 38.8932 39.302 38.9456 39.7041 38.5671C43.5774 34.9219 46.0002 29.7429 46.0002 23.9999C46.0002 18.2569 43.5774 13.078 39.7041 9.43271C39.302 9.05421 38.6689 9.10664 38.3109 9.52716L37.0144 11.05Z"
        ></path>
    </svg>
);
export const StopFill = ({ onClick }) => (
    <svg
        onClick={onClick}
        width="20"
        data-e2e=""
        height="20"
        viewBox="0 0 48 48"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M8 6C8 5.44771 8.44772 5 9 5H17C17.5523 5 18 5.44772 18 6V42C18 42.5523 17.5523 43 17 43H9C8.44772 43 8 42.5523 8 42V6Z"></path>
        <path d="M30 6C30 5.44771 30.4477 5 31 5H39C39.5523 5 40 5.44772 40 6V42C40 42.5523 39.5523 43 39 43H31C30.4477 43 30 42.5523 30 42V6Z"></path>
    </svg>
);
export const PlayFill = ({ onClick, className }) => (
    <svg
        onClick={onClick}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="20"
        height="20"
        fill="#fff"
    >
        <path d="M43 26.6a3 3 0 0 0 0-5.2L14.5 4.95a3 3 0 0 0-4.5 2.6v32.9a3 3 0 0 0 4.5 2.6L43 26.6Z"></path>
    </svg>
);
export const Heart = ({ onClick }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <g fillRule="evenodd" clipPath="url(#heart-fill-03bd63df_a)" clipRule="evenodd">
            <path d="M7.5 2.25c3 0 4.5 2 4.5 2s1.5-2 4.5-2c3.5 0 6 2.75 6 6.25 0 4-3.269 7.566-6.25 10.25C14.41 20.407 13 21.5 12 21.5s-2.45-1.101-4.25-2.75C4.82 16.066 1.5 12.5 1.5 8.5c0-3.5 2.5-6.25 6-6.25Z"></path>
            <path
                fill="black"
                fillOpacity=".03"
                d="M2.402 12.2c1.187 2.497 3.357 4.727 5.348 6.55C9.55 20.399 11 21.5 12 21.5s2.41-1.093 4.25-2.75c2.98-2.684 6.25-6.25 6.25-10.25 0-.087-.002-.174-.005-.26C20.567 13.661 13.68 18.5 11.75 18.5c-1.437 0-6.14-2.687-9.348-6.3Z"
            ></path>
        </g>
    </svg>
);
export const Comment = ({ width = '2.4rem', height = '2.4rem' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height} fill="currentColor">
        <path d="M3.5 21.44C3.5 11.47 13.04 4 24 4s20.5 7.47 20.5 17.44c0 5.85-2.93 10.69-6.47 14.37a41.67 41.67 0 0 1-11.06 7.97A2.05 2.05 0 0 1 24 41.95v-3.08c-10.96 0-20.5-7.47-20.5-17.43Zm11.79 3.07a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Zm8.71 0a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12Zm11.27-2.56a2.56 2.56 0 1 0-5.12 0 2.56 2.56 0 0 0 5.12 0Z"></path>
    </svg>
);
export const Favorite = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={width}
        height={height}
        className={className}
        fill="currentColor"
    >
        <path
            fill="currentColor"
            d="M4 4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v15.13a1 1 0 0 1-1.555.831l-6.167-4.12a.5.5 0 0 0-.556 0l-6.167 4.12A1 1 0 0 1 4 19.63V4.5Z"
        ></path>
        <path
            fill="currentColor"
            fillOpacity=".03"
            d="M4.032 4.144A1.894 1.894 0 0 0 4 4.5v15.13a1 1 0 0 0 1.555.831l6.167-4.12a.5.5 0 0 1 .41-.066l-.427-.198a1.489 1.489 0 0 0-1.377.063c-.581.339-1.45.85-2.25 1.339-.59.359-1.427.695-2.187.962-.929.325-1.86-.387-1.86-1.37V4.143Zm8.251 12.202 6.162 4.115A1 1 0 0 0 20 19.63V4.5a2 2 0 0 0-1.123-1.798c.21.254.334.58.33.936a117.008 117.008 0 0 1-.896 13.408c-.124.99-1.17 1.553-2.076 1.133l-3.952-1.833Z"
        ></path>
    </svg>
);
export const Share = ({ width = '2.4rem', height = '2.4rem' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={width} height={height} fill="currentColor">
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10.938 3.175a.674.674 0 0 1 1.138-.488l6.526 6.215c.574.547.554 1.47-.043 1.991l-6.505 5.676a.674.674 0 0 1-1.116-.508V13.49s-6.985-1.258-9.225 2.854c-.209.384-1.023.518-.857-1.395.692-3.52 2.106-9.017 10.082-9.017V3.175Z"
            clipRule="evenodd"
        ></path>
        <path
            fill="#161823"
            fillRule="evenodd"
            d="m15.754 6.212 1.295 2.59a1.122 1.122 0 0 1-.268 1.349l-5.799 5.042s-.28 1.403.562 1.403c.842 0 7.578-6.174 7.578-6.174s.28-.842-.561-1.684c-.843-.842-2.807-2.526-2.807-2.526Z"
            clipRule="evenodd"
            opacity=".03"
        ></path>
        <path
            fill="url(#pc-share-44d9fe83_a)"
            fillRule="evenodd"
            d="M10.937 6.23v7.297s-6.683-.942-8.777 2.246C.146 18.839.331 12.309 3.363 9.057c3.033-3.252 7.574-2.827 7.574-2.827Z"
            clipRule="evenodd"
            opacity=".09"
        ></path>
        <defs>
            <radialGradient
                id="pc-share-44d9fe83_a"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(-113.046 11.628 5.43) scale(8.93256 8.78076)"
                gradientUnits="userSpaceOnUse"
            >
                <stop></stop>
                <stop offset=".995" stopOpacity=".01"></stop>
                <stop offset="1" stopOpacity=".01"></stop>
            </radialGradient>
        </defs>
    </svg>
);
export const Locked = ({ width = '2.4rem', height = '2.4rem' }) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translateY(2px)' }}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 3C17.9249 3 13 7.92487 13 14V21H8C6.89543 21 6 21.8954 6 23V41C6 42.1046 6.89543 43 8 43H40C41.1046 43 42 42.1046 42 41V23C42 21.8954 41.1046 21 40 21H35V14C35 7.92487 30.0751 3 24 3ZM31 21V14C31 10.134 27.866 7 24 7C20.134 7 17 10.134 17 14V21H31Z"
        ></path>
    </svg>
);
export const Cloud = () => (
    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
        <path d="M25.84 37h8.66a9.5 9.5 0 0 0 1.35-18.9A12 12 0 0 0 12 20v.01A8.5 8.5 0 0 0 12.5 37h10.34V25.6l-1.72 1.74a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 0 1 0-1.41l4.4-4.4c.68-.76 1.22-.77 2 .08l4.28 4.32a1 1 0 0 1 0 1.4l-.7.72a1 1 0 0 1-1.42 0l-1.72-1.75V37Z"></path>
    </svg>
);
