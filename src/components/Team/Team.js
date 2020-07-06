import React from "react";
import Table from "react-bootstrap/Table";

const Team = ({ teamA, teamB }) => {
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Team A</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teamA.map((player, index) =>
                            <tr key={index}>
                                <td>{player.playername}</td>
                            </tr>
                        )}
                </tbody>
                <thead>
                    <tr>
                        <th>Team B</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        teamB.map((player, index) =>
                            <tr key={index}>
                                <td>{player.playername}</td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </>
    )
}

export default Team; 