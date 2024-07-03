import RoundTable from "../../components/seat-search/round-table";

export default function SeatsPage() {
  return (
    <svg
      width="100vw"
      height="100vh"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
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
