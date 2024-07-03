import { BoxProps as MuiBoxProps, Box as MuiBox, } from "@mui/material";

interface MediaPlaceholderProps extends Pick<MuiBoxProps, "component"> {
  src: string;
  alt: string;
}

const MediaPlaceholder = ({ src }: MediaPlaceholderProps) => {
  return (
    <MuiBox
      component="img"
      src={src}
      sx={{
        borderRadius: '8px',
      }}
    />
  )
}

export default MediaPlaceholder;