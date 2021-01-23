/** @jsxImportSource theme-ui */
import { FC } from "react";

export const Helm: FC = ({ children }) => (
  <div sx={{ display: "flex", flexWrap: "wrap" }}>
    <aside
      sx={{
        bg: "muted",
        borderRadius: 0,
        borderRight: "solid",
        borderRightColor: "border",
        borderRightWidth: 1,
        flexGrow: 1,
        flexBasis: "sidebar",
        minHeight: "100vh",
      }}
    ></aside>
    <main sx={{ flexGrow: 99999, flexBasis: 0, minWidth: 320 }}>
      {children}
    </main>
  </div>
);
