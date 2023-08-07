import Button from "@mui/material/Button";

import { CustomButtonProps } from "interfaces/common";

const DeleteButton = ({
  type,
  title,
  backgroundColor,
  color,
  fullWidth,
  icon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <Button
      type={type === "submit" ? "submit" : "button"}
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: "6px 12px", 
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 100, 
        backgroundColor,
        color,
        fontSize: 14, 
        fontWeight: 600,
        gap: "8px", 
        textTransform: "capitalize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor,
        },
        borderColor: "red", 
      }}
      startIcon={icon} 
      onClick={handleClick} 
    >
      {title}
    </Button>
  );
};

export default DeleteButton;
