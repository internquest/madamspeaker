import React from 'react'

const Header = () => {
  return (
    <header className="box-border fixed m-0 w-full px-0 py-[10px] text-[var(--black)] z-[3] top-0 mix-blend-difference [transition:0.3s]">
    <div className="box-border relative m-0 w-full flex justify-between items-center px-[30px] py-0">
        <a aria-label="Home" href="/" className="box-border relative m-0 no-underline block text-[var(--black)] h-[60px] filter invert brightness-[0.5] [transition:0.3s]">
            <span aria-label="Home" className="box-border relative m-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 59.5" className="box-border relative m-0 block max-w-full w-auto h-full">
                    <path d="m100,2.72c-2.21,0-3.91.59-5.12,1.78-1.2,1.13-1.81,2.69-1.81,4.68v2.89h4.32v7.31h-7.53v-9.52c0-3,.9-5.38,2.71-7.14,1.81-1.81,4.28-2.72,7.43-2.72v2.72Zm-12.64,0c-2.21,0-3.91.59-5.12,1.78-1.2,1.13-1.81,2.69-1.81,4.68v2.89h4.32v7.31h-7.53v-9.52c0-3,.9-5.38,2.71-7.14,1.81-1.81,4.28-2.72,7.43-2.72v2.72Z" className="box-border fill-[var(--black)] relative m-0 [transition:0.3s]"></path>
                    <path d="m0,0h10.54l23.48,52.78h.1L57.6,0h10.54v59.5h-7.13V14.62c0-.96.03-1.93.1-2.89v-2.8h-.2l-22.68,50.57h-8.33L7.23,8.92h-.2c.07,2.32.1,4.65.1,6.97v43.6H0V0Z" className="box-border relative m-0 fill-[var(--black)] [transition:0.3s]"></path>
                </svg>
            </span>
        </a>
        <a aria-label="Home" href="/" className="box-border relative m-0 no-underline block text-[var(--black)] h-[60px] filter invert brightness-[0.5] [transition:0.3s]">
            <span aria-label="Home" className="box-border relative m-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.54 59.5" className="box-border relative m-0 block max-w-full w-auto h-full">
                    <path d="m46.67,59.5c-4.71,0-8.77-.85-12.16-2.55-3.34-1.7-5.92-4.11-7.73-7.23-1.75-3.18-2.71-6.88-2.88-11.09h6.08c.11,3.18.85,5.94,2.22,8.3,1.37,2.36,3.29,4.16,5.75,5.42,2.47,1.26,5.42,1.89,8.88,1.89,3.18,0,5.94-.55,8.3-1.64,2.36-1.1,4.16-2.6,5.42-4.52,1.26-1.92,1.89-4.11,1.89-6.57,0-2.96-1.01-5.31-3.04-7.07-1.97-1.81-5.26-2.71-9.86-2.71h-7.48c-5.59,0-9.89-1.31-12.9-3.94-2.96-2.63-4.44-6.16-4.44-10.6,0-3.4.85-6.38,2.55-8.96,1.75-2.58,4.22-4.57,7.4-6,3.23-1.48,6.99-2.22,11.26-2.22,4.55,0,8.41.82,11.59,2.47,3.18,1.64,5.59,3.94,7.23,6.9,1.7,2.96,2.66,6.41,2.88,10.35h-6.08c-.27-4.6-1.73-8.16-4.36-10.68-2.58-2.52-6.36-3.78-11.34-3.78-3.12,0-5.81.49-8.05,1.48-2.25.93-3.97,2.3-5.18,4.11-1.21,1.75-1.81,3.81-1.81,6.16,0,2.85.9,5.04,2.71,6.57,1.86,1.53,4.85,2.3,8.96,2.3h7.48c6.41,0,11.09,1.45,14.05,4.36,3.01,2.9,4.52,6.6,4.52,11.09,0,3.56-.9,6.74-2.71,9.53-1.75,2.74-4.27,4.88-7.56,6.41-3.29,1.48-7.15,2.22-11.59,2.22Z" className="box-border relative m-0 fill-[var(--black)] [transition:0.3s]"></path>
                    <path d="m0,17.09c1.81,0,3.21-.55,4.19-1.64.99-1.15,1.48-2.68,1.48-4.6v-2.79h-3.53V.99h6.16v9.2c0,2.9-.74,5.23-2.22,6.99-1.48,1.7-3.51,2.55-6.08,2.55v-2.63Zm10.44,0c1.81,0,3.21-.55,4.19-1.64.99-1.15,1.48-2.68,1.48-4.6v-2.79h-3.53V.99h6.16v9.2c0,2.9-.74,5.23-2.22,6.99-1.48,1.7-3.51,2.55-6.08,2.55v-2.63Z" className="box-border relative fill-[var(--black)] m-0 [transition:0.3s]"></path>
                </svg>
            </span>
        </a>
        <div className="box-border relative m-0 hidden">
            <svg width="59" height="49" viewBox="0 0 59 49" fill="none"
                xmlns="http://www.w3.org/2000/svg" className="box-border relative m-0 block max-w-full">
                <path d="M2.99996 7.38318C4.84471 5.42766 6.68529 5.47591 8.35175 5.10955C17.1088 3.18439 25.5385 4.19482 33.9972 4.70357C40.6031 5.10089 47.355 4.7802 53.6957 7.23685C54.56 7.57171 55.3594 8.27213 56.1589 9.02849" stroke="black" stroke-width="4.96263" stroke-linecap="round" className="box-border relative m-0"></path>
                <path d="M2.99979 23.5199C4.83734 21.5576 6.67808 21.5991 8.34318 21.2266C17.0931 19.2692 25.5265 20.2486 33.987 20.7263C40.5943 21.0993 47.3449 20.7537 53.6946 23.187C54.5602 23.5187 55.3621 24.2162 56.1644 24.9696" stroke="black" stroke-width="4.96263" stroke-linecap="round" className="box-border relative m-0"></path>
                <path d="M2.99976 39.4011C4.94355 37.544 6.77914 37.6877 8.46238 37.4084C17.3075 35.9404 25.6735 37.3872 34.0943 38.3344C40.6707 39.0741 47.4301 39.1044 53.6347 41.8869C54.4805 42.2662 55.2424 43.0072 56.0016 43.804" stroke="black" stroke-width="4.96263" stroke-linecap="round" className="box-border relative m-0"></path>
            </svg>
            <svg width="52" height="50" viewBox="0 0 52 50" fill="none"
                xmlns="http://www.w3.org/2000/svg" className="box-border relative m-0 block max-w-full">
                <path d="M3.92142 40.2015C4.32691 37.5439 5.86838 36.537 7.03086 35.288C13.1396 28.7248 20.6483 24.7625 27.8956 20.371C33.5555 16.9415 38.9271 12.8383 45.5399 11.2535C46.4412 11.0375 47.4971 11.1591 48.5849 11.3266" stroke="black" stroke-width="4.96263" stroke-linecap="round" className="box-border relative m-0"></path>
                <path d="M7.26722 3.72198C9.94081 4.00318 11.0185 5.49605 12.3203 6.59907C19.161 12.3953 23.4689 19.7112 28.1933 26.746C31.8829 32.2399 36.2319 37.4145 38.1232 43.9462C38.3809 44.8365 38.3087 45.8969 38.192 46.9913" stroke="black" stroke-width="4.96263" stroke-linecap="round" className="box-border relative m-0"></path>
            </svg>
        </div>
    </div>
</header>
  )
}

export default Header
