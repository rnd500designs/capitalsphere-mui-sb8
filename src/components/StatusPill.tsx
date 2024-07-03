import { ChipProps, Chip as MuiChip } from "@mui/material";

type Status = "pending" | "approved" | "declined" | "new";

interface StatusPillProps extends Pick<ChipProps, "className"> {
  status: Status;
}

const StatusPill = ({ status, ...rest }: StatusPillProps) => {

  return (
    <MuiChip
      label={status}
      variant="filled"
      className={`status-pill status-${status}`}
      {...rest}
    />
  )
}

export default StatusPill;