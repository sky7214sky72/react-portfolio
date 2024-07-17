import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import BattersTable from './components/BattersTable';
import PitchersTable from './components/PitchersTable';

function App() {
    const [activeTab, setActiveTab] = useState('batters'); // Set a default value for activeTab
    const [hitters, setHitters] = useState([]);
    const [pitchers, setPitchers] = useState([]);
    const API_URL = "/baseball/hitter";
    const PITCHERS_URL = "/baseball/pitcher";

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setHitters(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [API_URL]);

    useEffect(() => {
        fetch(PITCHERS_URL)
            .then(response => response.json())
            .then(data => setPitchers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [PITCHERS_URL]);

    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-muted/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="max-w-6xl w-full mx-auto grid gap-2">
                    <h1 className="font-semibold text-3xl">KBO Player Stats</h1>
                    <div className="flex items-center text-sm gap-2">
                        <div className="text-muted-foreground flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-[#09CE6B] rounded-full animate-ping duration-[5000]"></span>
                            Current Season
                        </div>
                    </div>
                </div>
                <div className="grid gap-6 max-w-6xl w-full mx-auto">
                    <div dir="ltr" data-orientation="horizontal" className="w-full">
                        <div
                            role="tablist"
                            aria-orientation="horizontal"
                            className="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground flex border-b"
                            tabIndex="0"
                            data-orientation="horizontal"
                            style={{ outline: "none" }}
                        >
                            <button
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'pitchers'}
                                aria-controls="radix-:r3:-content-pitchers"
                                data-state={activeTab === 'pitchers' ? 'active' : 'inactive'}
                                id="radix-:r3:-trigger-pitchers"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                                data-orientation="horizontal"
                                data-radix-collection-item=""
                                onClick={() => setActiveTab('pitchers')} // Pass a function to setActiveTab
                            >
                                Pitchers
                            </button>
                            <button
                                type="button"
                                role="tab"
                                aria-selected={activeTab === 'batters'}
                                aria-controls="radix-:r3:-content-batters"
                                data-state={activeTab === 'batters' ? 'active' : 'inactive'}
                                id="radix-:r3:-trigger-batters"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                                data-orientation="horizontal"
                                data-radix-collection-item=""
                                onClick={() => setActiveTab('batters')} // Pass a function to setActiveTab
                            >
                                Batters
                            </button>
                        </div>
                        {activeTab === 'pitchers' ? <PitchersTable pitchers={pitchers} /> : <BattersTable hitters={hitters} />}
                        <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-:r3:-trigger-batters"
                            hidden={activeTab !== 'batters'}
                            id="radix-:r3:-content-batters"
                            tabIndex="0"
                            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-6"
                        ></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;