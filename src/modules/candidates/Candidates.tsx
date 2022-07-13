import React from "react";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import StickyHeadTable from "../common/components/table/StickyHeadTable";
import TableHeader from "../common/components/tableHeader/TableHeader";
import { CustomDiv } from "./CandidatesStyles";







function Candidates() {
  return (
    <CustomDiv>
      <CheckboxFilters />
      <div>
      <TableHeader title="Candidates" route=""/>
      <StickyHeadTable />
      
      </div>
    </CustomDiv>
  );
}

export default Candidates;
