import { ReactNode } from "react";
import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  Menu,
  Chip,
  styled,
  TextField,
} from "@mui/material";

interface ListProps {
  children: ReactNode;
}

interface SectionProps {
  title?: string;
  children: ReactNode;
  calloutColor?: "amber" | "gray" | "blue";
  isCallout?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  isCallout = false,
  calloutColor = "gray",
}) => {
  let sectionClasses = "space-y-4 mb-8";
  let titleClasses = "text-2xl mb-6";

  if (isCallout) {
    const colorClasses =
      calloutColor === "amber"
        ? "bg-amber-50 border-amber-400"
        : calloutColor === "blue" // ⬅️ NEW: Check for "blue"
          ? "bg-blue-50 border-blue-400" // ⬅️ NEW: Blue classes
          : "bg-gray-50 border-gray-400"; // Default for "gray" and any other value

    sectionClasses = `${colorClasses} border-l-4 p-4 rounded-r my-8`;
    titleClasses = "text-xl mb-4";
  }

  return (
    <section className={sectionClasses}>
      {title && <h2 className={titleClasses}>{title}</h2>}
      {!isCallout ? <div className="space-y-4 ">{children}</div> : children}
    </section>
  );
};

export const List: React.FC<ListProps> = ({ children }) => (
  <ul className="list-disc ml-8 space-y-2">{children}</ul>
);

const defaultFontFamily = "var(--font-geist-sans)";
const defaultBorderRadius = "2rem";

export const StyledChip = styled(Chip)({
  fontFamily: defaultFontFamily,
  textTransform: "none",
});

export const StyledButton = styled(Button)(
  ({ variant }: { variant?: "text" | "contained" | "outlined" }) => ({
    borderRadius: defaultBorderRadius,
    fontFamily: defaultFontFamily,
    textTransform: "none",
    ...(variant === "contained" && {
      backgroundColor: "#1a1a1a",
      color: "#ededed",
      "&:hover": {
        backgroundColor: "#333333",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
      },
      "&:active": {
        backgroundColor: "#1a1a1a",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
      },
      "&:disabled": {
        backgroundColor: "#e0e0e0",
        color: "#9e9e9e",
        border: "none",
        boxShadow: "none",
      },
    }),

    ...(variant === "outlined" && {
      border: "1px solid #d4d4d4",
      color: "#424242",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "#f8f8f8",
        borderColor: "#b8b8b8",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.08)",
      },
      "&:active": {
        backgroundColor: "#f0f0f0",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
      },
      "&:disabled": {
        border: "1px solid #f0f0f0",
        color: "#bdbdbd",
        boxShadow: "none",
      },
    }),
  }),
);

export const StyledAvatar = styled(Avatar)({});

export const StyledFormControl = styled(FormControl)({
  "& .MuiOutlinedInput-root": {
    borderRadius: defaultBorderRadius,
    // backgroundColor: "#f3f6fc",
    // "& .MuiOutlinedInput-notchedOutline": {
    //   border: "none",
    // },
    // "&:hover .MuiOutlinedInput-notchedOutline": {
    //   border: "none",
    // },
    // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   border: "none",
    // },
    // "& .MuiIconButton-root": {
    //   color: "inherit",
    // },
  },
  // "& .MuiFilledInput-root": {
  //   borderTopLeftRadius: defaultBorderRadiusSmall,
  //   borderTopRightRadius: defaultBorderRadiusSmall,
  // },
});

export const StyledIconButton = styled(IconButton)({});

export const StyledMenu = styled(Menu)({
  "& .MuiPaper-root": {
    border: "0.125px solid #e0e0e0",
    borderOpacity: "0.1",
    borderRadius: "1rem",
    boxShadow: "0px 2px 2px rgba(0.05, 0.05, 0.05, 0.05)",
    fontFamily: defaultFontFamily,
    zIndex: 1000,
    fontSize: "inherit",
    fontWeight: "inherit",
    backgroundColor: "#fff",
  },
});

export const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: defaultBorderRadius,
    // backgroundColor: "#f3f6fc",
    // "& .MuiOutlinedInput-notchedOutline": {
    //   border: "none",
    // },
    // "&:hover .MuiOutlinedInput-notchedOutline": {
    //   border: "none",
    // },
    // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   border: "none",
    // },
    // "& .MuiIconButton-root": {
    //   color: "inherit",
    // },
  },
  // "& .MuiFilledInput-root": {
  //   borderTopLeftRadius: defaultBorderRadiusSmall,
  //   borderTopRightRadius: defaultBorderRadiusSmall,
  // },
});
