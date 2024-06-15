
type SvgIconProps = {
    width?: number;
    height?: number;
    className?: string
}

export const MoonIcon = ({ width, height, className }: SvgIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none" className={className}>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.8244 0.166024C8.14853 0.922784 5.38462 4.17708 5.38462 8.07692C5.38462 12.5377 9.00078 16.1538 13.4615 16.1538C15.766 16.1538 17.8451 15.1887 19.3166 13.6406C17.8608 17.3633 14.2383 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C10.6231 0 11.2328 0.0569837 11.8244 0.166024Z" fill="white" />
    </svg>
);

export const SunIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
        <path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" />
    </svg>
);

export const AddTodoDark = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
        <circle cx="10" cy="10" r="9.5" stroke="#393A4B" />
    </svg>
)

export const AddTodoLight = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
        <circle cx="10" cy="10" r="9.5" fill="none" stroke="#E3E4F1" />
        <circle opacity="0.01" cx="10" cy="10" r="10" fill="url(#paint0_linear_0_343)" />
        <path opacity="0.01" d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5" stroke="none" strokeWidth="2" />
        <defs>
            <linearGradient id="paint0_linear_0_343" x1="-10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#55DDFF" />
                <stop offset="1" stopColor="#C058F3" />
            </linearGradient>
        </defs>
    </svg>
)

export const HoverCompletedIcon = ({ className }: SvgIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
        <circle cx="12" cy="12" r="11.5" stroke="url(#paint0_linear_0_155)" />
        <g opacity="0.01">
            <circle cx="12" cy="12" r="12" fill="url(#paint1_linear_0_155)" />
            <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_0_155" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#55DDFF" />
                <stop offset="1" stop-color="#C058F3" />
            </linearGradient>
            <linearGradient id="paint1_linear_0_155" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#55DDFF" />
                <stop offset="1" stop-color="#C058F3" />
            </linearGradient>
        </defs>
    </svg>
)

export const IconCompleted = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9.5" fill="white" stroke="#E3E4F1" />
        <circle cx="10" cy="10" r="10" fill="url(#paint0_linear_0_42)" />
        <path d="M6.66675 10.2534L8.91333 12.5L13.9133 7.5" stroke="white" strokeWidth="2" />
        <defs>
            <linearGradient id="paint0_linear_0_42" x1="-10" y1="10" x2="10" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#55DDFF" />
                <stop offset="1" stopColor="#C058F3" />
            </linearGradient>
        </defs>
    </svg>
)

export const LightDeleteIcon = ({ width = 18, height = 18 }: SvgIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
        <path d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#494C6B" />
    </svg>
);

export const DarkDeleteIcon = ({ width = 18, height = 18 }: SvgIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18" fill="none">
        <path d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" fill="#5B5E7E" />
    </svg>
);