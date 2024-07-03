export default function RoundTableSeat({
  seatNumber,
  isActive = false,
  cx,
  cy,
  r,
}) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        className={`RoundTable_Seat ${isActive ? "active" : ""}`}
      >
        <animate
          attributeName="stroke-dashoffset"
          attributeType="CSS"
          from="0"
          to="-1000"
          begin="0s"
          dur="30s"
          repeatDur="indefinite"
        />
      </circle>
      <text
        x={cx}
        y={cy}
        transform="translate(0 0) rotate(0)"
        className={`RoundTable_Seat_Text ${isActive ? "active" : ""}`}
      >
        {seatNumber}
      </text>
    </g>
  );
}
