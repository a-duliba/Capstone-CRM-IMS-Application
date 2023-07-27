import Button from "@mui/material/Button";

import { CustomButtonProps } from "interfaces/common";

const EditButton = ({
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
        padding: "10px 15px",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: "10px",
        textTransform: "capitalize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor,
        },
        borderColor: "blue", // Add this to set the border color
      }}
      startIcon={icon} // Use the icon prop directly as the startIcon
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

export default EditButton;
