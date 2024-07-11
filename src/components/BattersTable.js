function BattersTable({hitters}) {
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
            {hitters.map(hitters => (
                <tr key={hitters.name}>
                    <td>{hitters.teamName}</td>
                    <td>{hitters.name}</td>
                    <td>{hitters.wrcPlus}</td>
                    <td>{hitters.opsPlus}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default BattersTable;