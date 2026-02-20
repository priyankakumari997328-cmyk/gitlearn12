import { useState } from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import ProfileForm from "./profile/ProfileForm";
import Security from "./security/Security";
import Notifications from "./notification/Notification";
import HelpSupport from "./help/Helpsupport";
import Welcome from "./overview/Welcome";
import Nav from "./navbar/Nav";

const Dasboard = () => {
  const [active, setActive] = useState(1);

  return (
    <Box sx={{ backgroundColor: "#0f2a44", minHeight: "auto" }}>
      <Sidebar setActive={setActive} />
      <Nav/>

      {active === 1 && <Welcome showDiv={setActive} />}
      {active === 2 && <ProfileForm showDiv={setActive} />}
      {active === 3 && <Security />}
      {active === 4 && <Notifications />}
      {active === 5 && <HelpSupport />}
    </Box>
  );
};

export default Dasboard;