import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';

interface IRedux2Props {
  AddAndSubtract: any;
  MultiplicationAndDivision: any;
  AsyncReducers: any;
}

class Redux2 extends React.Component<IRedux2Props, {}> {
  constructor(props: IRedux2Props) {
    super(props);
    this.state = {};
  }

  public render() {
    const {
      AddAndSubtract,
      MultiplicationAndDivision,
      AsyncReducers,
    } = this.props;
    return (
      <div className='redux2'>
        <p>{AddAndSubtract.count_add}</p>
        <p>{MultiplicationAndDivision.count_multi}</p>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell align='right'>Symbol</TableCell>
              <TableCell align='right'>Rate</TableCell>
              <TableCell align='right'>Description</TableCell>
              <TableCell align='right'>Rate Float</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {AsyncReducers.data.map((row: any) => (
              <TableRow key={row.code}>
                <TableCell component='th' scope='row'>
                  {row.code}
                </TableCell>
                <TableCell
                  align='right'
                  dangerouslySetInnerHTML={{
                    __html: row.symbol,
                  }}
                />
                <TableCell align='right'>{row.rate}</TableCell>
                <TableCell align='right'>{row.description}</TableCell>
                <TableCell align='right'>{row.rate_float}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default connect(state => state)(Redux2);
