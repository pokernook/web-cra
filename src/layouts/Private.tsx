/** @jsxImportSource theme-ui */
import { Grid } from "@theme-ui/components";
import { FC } from "react";

import { SideNav } from "../components/SideNav";
import { TopNav } from "../components/TopNav";

// TODO: Fix weird gap at the bottom of the screen on Safari
export const PrivateLayout: FC = ({ children }) => (
  <Grid
    columns={["auto"]}
    gap="0px"
    sx={{ minHeight: "100vh", width: "100vw", gridTemplateRows: "50px auto" }}
  >
    <TopNav />
    <Grid columns={["280px 1fr"]} gap="0px">
      <SideNav />
      <main
        sx={{
          display: "inherit",
          minHeight: "inherit",
          minWidth: 320,
          width: "100%",
        }}
      >
        {children}
      </main>
    </Grid>
  </Grid>
);
