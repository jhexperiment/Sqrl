// @flow
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Table } from 'semantic-ui-react';

class WalletPanelFormRamStats extends Component<Props> {
  render() {
    const {
      EOSbalance,
      ramUsage,
      ramQuota,
      t
    } = this.props;

    return (
      <Table size="small" celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={8}>
              {t('ram_stats_title_one')}
            </Table.Cell>
            <Table.Cell width={8}>
              {`${EOSbalance} TLOS`}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={8}>
              {t('ram_stats_title_two')}
            </Table.Cell>
            <Table.Cell width={8}>
              {`${ramQuota - ramUsage} B`}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={8}>
              {t('ram_stats_title_three')}
            </Table.Cell>
            <Table.Cell width={8}>
              {`${ramUsage} B`}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell width={8}>
              {t('ram_stats_title_four')}
            </Table.Cell>
            <Table.Cell width={8}>
              {`${ramQuota} B`}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default translate('ram')(WalletPanelFormRamStats);
