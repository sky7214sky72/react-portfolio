import React from 'react';

const Header = ({ activeTab, setActiveTab }) => {
    return (
        <header>
            <h1>pWRC+, pOPS+</h1>
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