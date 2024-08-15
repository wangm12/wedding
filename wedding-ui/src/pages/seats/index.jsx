import RoundTable from "../../components/seat-search/round-table";
import { seatsAssignments } from "../../../public/assets/constants/seats-assignments";
import { TableParser } from "../../utils/seats/table-parser";

export default function SeatsPage() {
  const tablesMap = TableParser(seatsAssignments);
  
  return (
    <svg
      width="100%"
      height="100vh"
      viewBox="0 0 800 600"
      // preserveAspectRatio="xMidYMid meet"
    >
      <RoundTable
        tableNumber={1}
        seatsQuantity={10}
        mainTableRadius={50}
        seatRadius={20}
        isMainTableActive={true}
        activeSeats={[1, 2, 3]}
      />
    </svg>
  );
}
