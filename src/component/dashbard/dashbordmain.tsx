import { columns } from "../../columns/columnList";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import More from "./more";
const StyledTableCell = styled(TableCell)({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
});
const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#E0E0E0",
  },
});

function DashbordMain({ data }: any) {
  return (
    <div>
      <div style={{ marginTop: 30 }}>
        <TableContainer>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableBody>
              <StyledTableRow>
                {columns.map((el: any) => {
                  return (
                    <StyledTableCell key={el.key}>
                      {el.name} <UnfoldMoreIcon fontSize="small" />
                    </StyledTableCell>
                  );
                })}
                <StyledTableCell>
                  <CalendarViewWeekIcon color="primary" />
                </StyledTableCell>
              </StyledTableRow>
              {data.map((row: any, idx: number) => {
                return (
                  <StyledTableRow key={row.key}>
                    <StyledTableCell> {row.id}</StyledTableCell>
                    <StyledTableCell>{row.person}</StyledTableCell>
                    <StyledTableCell>{row.personArm}</StyledTableCell>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.nameArm}</StyledTableCell>
                    <StyledTableCell>{row.phone}</StyledTableCell>
                    <StyledTableCell>{row.address}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    <StyledTableCell>{row.vocter}</StyledTableCell>
                    <StyledTableCell>{row.role}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                    <StyledTableCell>{row.balance}</StyledTableCell>
                    <StyledTableCell> {row.data}</StyledTableCell>
                    <StyledTableCell>
                      <More idx={idx} />{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default DashbordMain;
