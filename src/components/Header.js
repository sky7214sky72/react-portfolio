import React from 'react';

const Header = ({ activeTab, setActiveTab }) => {
    return (
        <header>
            <h1>pWRC+, pOPS+ (데이터는 매일 00시에 갱신됩니다)</h1>
            <nav>
                {/*<button*/}
                {/*    className={activeTab === 'pitchers' ? 'active' : ''}*/}
                {/*    onClick={() => setActiveTab('pitchers')}*/}
                {/*>*/}
                {/*    Pitchers*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className={activeTab === 'batters' ? 'active' : ''}*/}
                {/*    onClick={() => setActiveTab('batters')}*/}
                {/*>*/}
                {/*    Batters*/}
                {/*</button>*/}
            </nav>
        </header>
    );
};

export default Header;