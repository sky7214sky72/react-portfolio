function BattersTable({players}) {
    return (
        <table>
            <thead>
            <tr>
                <th>팀</th>
                <th>이름</th>
                <th>pwRC+</th>
                <th>pOPS+</th>
            </tr>
            </thead>
            <tbody>
            {players.map(player => (
                <tr key={player.name}>
                    <td>{player.teamName}</td>
                    <td>{player.name}</td>
                    <td>{player.wrcPlus}</td>
                    <td>{player.opsPlus}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default BattersTable;