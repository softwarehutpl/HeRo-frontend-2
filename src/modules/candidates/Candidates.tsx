import React from 'react';
import CheckboxFilters from '../common/components/checkboxFilters/CheckboxFilters';
import { CustomDiv, CheckboxDiv } from './CandidatesStyles';
import CandidatesTableHeader from './headerCandidates/HeaderCandidates';
import { useTables } from '../contexts/CandidatesTablesContext';
import { CustomKanbanDiv } from '../common/components/kanban/KanbanTableStyles';
import KanbanTable from '../common/components/kanban/KanbanTable';
import CustomTable from '../common/components/table/CustomTable';

function Candidates() {
  const whichTable = useTables().value;

  const statusesList = ['New', 'In processing', 'Dropped out', 'Hired'];
  const stageList = ['Evaluation', 'Interview', 'Phone interview', 'Tech interview', 'Offer'];

  return (
    <CustomDiv>
      <CheckboxDiv>
        <CheckboxFilters header="Status" filtersList={statusesList} />
        <CheckboxFilters header="Stage" filtersList={stageList} />
      </CheckboxDiv>
      <div style={{ width: '100%' }}>
        <CandidatesTableHeader title="Candidates" />
        {whichTable === 0 ? (
          <CustomTable />
        ) : (
          <CustomKanbanDiv>
            <KanbanTable />
          </CustomKanbanDiv>
        )}
      </div>
    </CustomDiv>
  );
}

export default Candidates;
