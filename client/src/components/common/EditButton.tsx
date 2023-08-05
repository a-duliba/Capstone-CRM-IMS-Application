import Button from "@mui/material/Button";

import { CustomButtonProps } from "interfaces/customers";

const EditButton = ({
  type,
  title,
  backgroundColor,
  color,
  fullWidth,
  icon,
  handleClick,
  data,
}: CustomButtonProps) => {
  return (
    <Button
      type={type === "submit" ? "submit" : "button"}
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: "6px 12px", // Smaller padding
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 100, // Smaller minWidth
        backgroundColor,
        color,
        fontSize: 14, // Smaller fontSize
        fontWeight: 600,
        gap: "8px", // Smaller gap
        textTransform: "capitalize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor,
        },
        borderColor: "blue", // Add this to set the border color
      }}
      startIcon={icon} // Use the icon prop directly as the startIcon
      onClick={() => { if (handleClick) handleClick(data); }}
    >
      {title}
    </Button>
  );
};

export default EditButton;
