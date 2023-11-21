import * as React from "react";
import Slide, { SlideProps } from "@mui/material/Slide";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Link from "@mui/material/Link";
import { SnackbarContent } from "@mui/material";
import { Snackbar } from "@mui/material";
import { pagestext } from "../../columns/columns";

type TransitionProps = Omit<SlideProps, "direction">;
function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function DirectionSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <div onClick={handleClick(TransitionLeft)}>
          <ArrowBackIosIcon />
        </div>
      </div>

      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        aria-describedby="message-id2"
      >
        <SnackbarContent
          style={{
            width: 350,
            height: 950,
            backgroundColor: "#fff",
            marginTop: -24,
            marginLeft: -24,
            display: "flex",
            flexFlow: "column",
            justifyContent: "flex-start",
          }}
          message={pagestext.map((page: any, index: any) => {
            return (
              <div key={index} style={{ display: "flex" }}>
                <Link
                  underline="none"
                  href={page.link}
                  style={{
                    color: "#000000",
                    fontSize: 16,
                    fontFamily: "sans-serif",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "flex-end" }}
                    onClick={handleClose}
                  >
                    {" "}
                    {page.closeimag}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: 200,
                      justifyContent: "space-evenly",
                      justifyItems: "center",
                    }}
                  >
                    {" "}
                    <p> {page.img}</p>
                    <h4> {page.name}</h4>
                  </div>

                  <p>{page.names}</p>
                </Link>
              </div>
            );
          })}
        />
      </Snackbar>
    </div>
  );
}

export default DirectionSnackbar;
