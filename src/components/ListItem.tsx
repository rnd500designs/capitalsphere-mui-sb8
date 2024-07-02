import React from "react";
import {
  Avatar as MuiAvatar,
  Box as MuiBox,
  Checkbox as MuiCheckbox,
  ListItem as MuiListItem,
  ListItemAvatar as MuiListItemAvatar,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  Radio as MuiRadio,
} from '@mui/material';
import {
  ArrowRight as MuiArrowRight,
  PersonOutline as MuiPersonOutline
} from "@mui/icons-material";

interface ListItemProps {
  textPrimary: string;
  textSecondary?: string;
  avatarSrc?: string;
  avatarChildren?: React.ReactNode | string;
  withPrimaryAction: boolean;
  primaryActionType: "avatar" | "icon" | "squareImage" | "landscapeImage" | "checkbox" | "radio";
  withSecondaryAction: boolean;
  secondaryActionType: "checkbox" | "arrow";
}

const ListItem = ({
  textPrimary,
  textSecondary,
  avatarSrc,
  avatarChildren,
  withPrimaryAction,
  primaryActionType,
  withSecondaryAction,
  secondaryActionType,
}: ListItemProps) => {

  return (
    <MuiListItem
      secondaryAction={withSecondaryAction ?
        (secondaryActionType === "checkbox" ?
          <MuiCheckbox defaultChecked /> : <MuiArrowRight />
        )
        : null
      }
    >
      {withPrimaryAction && primaryActionType === "avatar" &&
        (<MuiListItemAvatar>
          <MuiAvatar
            src={avatarSrc}
          >
            {avatarChildren}
          </MuiAvatar>
        </MuiListItemAvatar>)
      }
      {withPrimaryAction && primaryActionType === "icon" &&
        (<MuiListItemIcon>
          <MuiPersonOutline />
        </MuiListItemIcon>)
      }
      {withPrimaryAction && primaryActionType === "squareImage" &&
        (<MuiListItemIcon>
          <MuiBox component="div" className="squareImg">
            <MuiBox
              component="img"
              src="assets/placeholder.png"
              alt="placeholder"
              className="squareImage"
            />
          </MuiBox>
        </MuiListItemIcon>)
      }
      {withPrimaryAction && primaryActionType === "landscapeImage" &&
        (<MuiListItemIcon>
          <MuiBox
            component="img"
            src="assets/placeholder.png"
            alt="placeholder"
          />
        </MuiListItemIcon>)
      }
      {withPrimaryAction && primaryActionType === "checkbox" && <MuiCheckbox defaultChecked />}
      {withPrimaryAction && primaryActionType === "radio" && <MuiRadio defaultChecked name="radio-buttons" />}
      <MuiListItemText
        primary={textPrimary}
        secondary={textSecondary}
      />
    </MuiListItem>

  );
}
export default ListItem;