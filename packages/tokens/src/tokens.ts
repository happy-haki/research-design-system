import type { DtcgGroup } from "./types";

export const lightTokens: DtcgGroup = {
  color: {
    background: {
      $value: "oklch(0.98 0.01 255)",
      $type: "color"
    },
    foreground: {
      $value: "oklch(0.2 0.03 255)",
      $type: "color"
    },
    primary: {
      $value: "oklch(0.62 0.2 263)",
      $type: "color"
    },
    primaryForeground: {
      $value: "oklch(0.98 0.01 255)",
      $type: "color"
    },
    muted: {
      $value: "oklch(0.93 0.02 255)",
      $type: "color"
    },
    mutedForeground: {
      $value: "oklch(0.44 0.03 255)",
      $type: "color"
    },
    border: {
      $value: "oklch(0.89 0.02 255)",
      $type: "color"
    },
    card: {
      $value: "oklch(1 0 0)",
      $type: "color"
    }
  },
  radius: {
    sm: {
      $value: "0.5rem",
      $type: "dimension"
    },
    md: {
      $value: "0.75rem",
      $type: "dimension"
    },
    lg: {
      $value: "1rem",
      $type: "dimension"
    }
  },
  space: {
    xs: {
      $value: "0.25rem",
      $type: "dimension"
    },
    sm: {
      $value: "0.5rem",
      $type: "dimension"
    },
    md: {
      $value: "0.75rem",
      $type: "dimension"
    },
    lg: {
      $value: "1rem",
      $type: "dimension"
    },
    xl: {
      $value: "1.5rem",
      $type: "dimension"
    }
  }
};

export const darkTokens: DtcgGroup = {
  color: {
    background: {
      $value: "oklch(0.16 0.02 255)",
      $type: "color"
    },
    foreground: {
      $value: "oklch(0.96 0.01 255)",
      $type: "color"
    },
    primary: {
      $value: "oklch(0.71 0.18 263)",
      $type: "color"
    },
    primaryForeground: {
      $value: "oklch(0.14 0.01 255)",
      $type: "color"
    },
    muted: {
      $value: "oklch(0.27 0.02 255)",
      $type: "color"
    },
    mutedForeground: {
      $value: "oklch(0.79 0.02 255)",
      $type: "color"
    },
    border: {
      $value: "oklch(0.33 0.02 255)",
      $type: "color"
    },
    card: {
      $value: "oklch(0.2 0.02 255)",
      $type: "color"
    }
  },
  radius: {
    sm: {
      $value: "0.5rem",
      $type: "dimension"
    },
    md: {
      $value: "0.75rem",
      $type: "dimension"
    },
    lg: {
      $value: "1rem",
      $type: "dimension"
    }
  },
  space: {
    xs: {
      $value: "0.25rem",
      $type: "dimension"
    },
    sm: {
      $value: "0.5rem",
      $type: "dimension"
    },
    md: {
      $value: "0.75rem",
      $type: "dimension"
    },
    lg: {
      $value: "1rem",
      $type: "dimension"
    },
    xl: {
      $value: "1.5rem",
      $type: "dimension"
    }
  }
};

export const tokens = lightTokens;
