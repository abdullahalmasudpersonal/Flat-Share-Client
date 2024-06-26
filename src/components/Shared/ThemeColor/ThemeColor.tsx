import { Box, IconButton, PaletteMode } from "@mui/material";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export function ToggleColorMode({
  mode,
  toggleColorMode,
}: ToggleColorModeProps) {
  return (
    <Box sx={{ maxWidth: "32px" }}>
      <IconButton
        onClick={toggleColorMode}
        size="small"
        aria-label="button to toggle theme"
      >
        {mode === "dark" ? (
          <WbSunnyRoundedIcon fontSize="small" />
        ) : (
          <ModeNightRoundedIcon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
}
