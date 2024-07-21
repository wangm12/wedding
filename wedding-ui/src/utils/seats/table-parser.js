export const TableParser = (seatsAssignments) => {
    const tablesMap = {};
    seatsAssignments.forEach((seatAssignment) => {
        const { tableNumber, seatsNumber, partySeatsNumber } = seatAssignment;
        if (!tablesMap[tableNumber]) {
            tablesMap[tableNumber] = {
                tableNumber: tableNumber,
                seats: [],
            };
        }
        tablesMap[tableNumber].seats.push(seatAssignment);
    });
    // get the seats quantity for each table
    Object.keys(tablesMap).forEach((tableNumber) => {
        tablesMap[tableNumber].seatsQuantity = tablesMap[tableNumber].seats.reduce(
            (acc, seat) => acc + seat.partySeatsNumber.length,
            0
        );
    });
    // sort the tables by table number
    return Object.values(tablesMap).sort((a, b) => a.tableNumber - b.tableNumber);
}