import RoundTableSeat from "./round-table-seat";
import "./style.css";

function MainTable({ tableNumber, r }) {
  return (
    <g>
      <circle
        filter=""
        cx="0"
        cy="0"
        r={r}
        className="RoundTable_MainTable active"
      />
      <text
        x="0"
        y="0"
        transform="translate(0 0) rotate(0)"
        className="RoundTable_MainTable_Text active"
      >
        {tableNumber}
      </text>
    </g>
  );
}

function _generateSeats(seatsQuantity, seatRadius, activeSeats = []) {
  const seats = [];
  const angle = (2 * Math.PI) / seatsQuantity;
  for (let i = 0; i < seatsQuantity; i++) {
    const x = (50 + 2 * seatRadius) * Math.cos(angle * i);
    const y = (50 + 2 * seatRadius) * Math.sin(angle * i);
    const isActive = activeSeats.includes(i + 1);
    seats.push(
      <RoundTableSeat
        key={i}
        seatNumber={i + 1}
        isActive={isActive}
        cx={x}
        cy={y}
        r={seatRadius}
      />
    );
  }
  return seats;
}

export default function RoundTable({
  tableNumber,
  seatsQuantity,
  mainTableRadius,
  seatRadius,
  isMainTableActive,
  activeSeats,
}) {
  return (
    <g transform="translate(300 300)">
      <MainTable tableNumber={tableNumber} r={mainTableRadius} />
      {_generateSeats(seatsQuantity, seatRadius, activeSeats)}
    </g>
  );
}
