import React from "react";
import Table from 'react-bootstrap/Table'


const PlayerList = ({ playerlist }) => {
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{
                    playerlist.map((player, index) =>
                        <tr key={index}>
                            <td>{player}</td>
                        </tr>
                    )}
                </tbody>
            </Table>

        </>
    )
}

export default PlayerList; 