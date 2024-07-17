import React from "react";

function PitchersTable({pitchers}) {
    return (
        <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:r3:-trigger-pitchers"
            id="radix-:r3:-content-pitchers"
            tabIndex="0"
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-6"
            style={{}}
        >
            <div className="grid gap-4">
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="[&amp;_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                Team
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                Player
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                FIP+
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                FIP-
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                FIP
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                ERA+
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                ERA-
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                ERA
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                K/9
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                BB/9
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                                HR/9
                            </th>
                        </tr>
                        </thead>
                        <tbody className="[&amp;_tr:last-child]:border-0">
                        {pitchers.map(pitchers => (
                            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                key={pitchers.name}>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                    {pitchers.team}
                                </td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                    {pitchers.name}
                                </td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pitchers.fipPlus}</td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pitchers.fipMinus}</td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pitchers.fip}</td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pitchers.eraPlus}</td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pitchers.eraMinus}</td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pitchers.era}</td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pitchers.kNine}</td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pitchers.bbNine}</td>
                                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{pitchers.homeRunNine}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PitchersTable;