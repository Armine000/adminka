import { Badge, IconButton } from "@mui/material";

import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DirectionSnackbar from "./DirectionSnackbar";
const Header = ({pagesname}:any) =>{
    return(
        <div
        style={{
          display: "flex",
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          backgroundColor: "#3085C3",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: 700,
            alignItems: "center",
          }}
        >
   <DirectionSnackbar/>
          <div
            style={{
              color: "#fff",
              fontFamily: "sans-serif",
              fontSize: 25,
            }}
          >
          {pagesname}
          
          </div>
        </div>

        <div>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon style={{ color: "#fff" }} />
            </Badge>
            
          </IconButton>
        </div>
      </div>
    )
}

export default Header;