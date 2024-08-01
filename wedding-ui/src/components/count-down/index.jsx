import { useCountdown } from "../../hooks/useCountDown";
import "./count-down.css";

export default function CountDown({
    targetDate,
}) {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <div className="count-down__container">
            <div id="days">
                {days}
                <span className="suffix-text">日</span>
            </div>
            <div id="hours">
                {hours}
                <span className="suffix-text">时</span>
            </div>
            <div id="minutes">
                {minutes}
                <span className="suffix-text">分</span>
            </div>
            <div id="seconds">
                {seconds}
                <span className="suffix-text">秒</span>
            </div>
        </div>
    )
}