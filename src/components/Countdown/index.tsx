import moment from "moment";
import DisplayTimer from "../DisplayTimer"
import { useCountdown } from "../../hooks/useCountdown";

function Countdown({ targetDate }: any) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <div>Concluído</div>
    )
  } else {
    return (
      <div className='flex items-center'>
        <DisplayTimer value={hours} />
        <span>:</span>
        <DisplayTimer value={minutes} />
        <span>:</span>
        <DisplayTimer value={seconds} />
      </div>
    )
  }
}

export default Countdown