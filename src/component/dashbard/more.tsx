import * as React from "react";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { rowstablemoreEdit } from "../../columns/columnList";
import Dialogss from "./dialogs";

function More({ idx }: any) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <span
        onClick={(event: React.MouseEvent<HTMLElement>) =>
          setAnchorElNav(event.currentTarget)
        }
      >
        <MoreVertIcon color="primary" />
      </span>
      <Menu
        style={{ padding: 0, margin: 0, width: 200, height: 250 }}
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseMenu}
      >
        {rowstablemoreEdit.map((page) => (
          <div
            style={{
              width: 150,
              height: 40,
              textAlign: "center",
              borderTop: "1px solid grey",
              color: "#00000",
              fontSize: 18,
              marginTop: -9,
              padding: 10,
              marginBottom: 0,
              cursor: "pointer",
            }}
            key={page.key}
            onClick={() => {
              handleCloseMenu();
            }}
          >
            <p
              onClick={() => {
                setOpen(true);
              }}
            >
              {page.name}
            </p>
            <Dialogss
              editData={idx}
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </div>
        ))}
        <div
          style={{
            width: 150,
            height: 40,
            textAlign: "center",
            borderTop: "1px solid grey",
            color: "#00000",
            fontSize: 18,
            padding: 10,
            cursor: "pointer",
          }}
        >
          Delete
        </div>
      </Menu>
    </div>
  );
}
export default More;
