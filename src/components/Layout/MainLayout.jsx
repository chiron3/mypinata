import { Unstable_Grid2 } from "@mui/material";
import Navbar from "../Navigation/Navbar";
export default function MainLayout({ children }) {
  return (
    <Unstable_Grid2 sx={{ padding: "2rem 4rem 0.8rem 3rem", margin: "2em" }}>
      <Navbar />
      {children}
    </Unstable_Grid2>
  );
}