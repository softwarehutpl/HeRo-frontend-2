import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CustomAvatar from '../avatars/CustomAvatar';

interface Column {
  id: 'avatar' | 'name' | 'source' | 'project' | 'position' | 'status' | 'stage' | 'assignee' | 'profile';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'avatar', label: '', minWidth: 40 },
  { id: 'name', label: 'Name', minWidth: 80 },
  { id: 'source', label: 'Source', minWidth: 80 },
  { id: 'project', label: 'Project', minWidth: 80, },
  { id: 'position', label: 'Position', minWidth: 80, },
  { id: 'status', label: 'Status', minWidth: 80, },
  { id: 'stage', label: 'Stage', minWidth: 80, },
  { id: 'assignee', label: 'Assignee', minWidth: 80, },
  { id: 'profile', label: 'Profile', minWidth: 80, }
];

interface Data {
  avatar: React.ReactElement;
  name: string;
  source: string;
  project: string;
  position: string;
  status: string;
  stage: string;
  assignee: string;
  profile: string;
}

function createData(
  avatar: React.ReactElement,
  name: string,
  source: string,
  project: string,
  position: string,
  status: string,
  stage: string,
  assignee: string,
  profile: string
): Data {
  return { avatar, name, source, project, position, status, stage, assignee, profile };
}

const rows = [
  createData( <CustomAvatar/>, 'John Doe', 'Internal', 'React Developer', 'React Developer', 'Qualified', 'Interview', 'Peter Ditter', 'See Profile'),
  createData( <CustomAvatar/>, 'John Doe', 'Internal', 'React Developer', 'React Developer', 'Qualified', 'Interview', 'Peter Ditter', 'See Profile'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{ maxHeight: 500, minWidth: '100%'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
