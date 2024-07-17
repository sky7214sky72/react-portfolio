import React from 'react';
import '../index.css'
const Header = () => {
    return (
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
            <p className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4">
                <span> KBO Stats</span>
            </p>
            <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
                <a className="text-muted-foreground" href="https://blog.naver.com/blackropes/223505524129"
                   target="_blank" rel="noopener noreferrer">
                    스탯 계산식 출처
                </a>
                <p className="text-muted-foreground">
                    매일 0시 갱신
                </p>
            </nav>
        </header>
    );
};

export default Header;