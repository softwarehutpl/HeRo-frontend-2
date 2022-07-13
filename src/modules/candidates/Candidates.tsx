import React from "react";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import StickyHeadTable from "../common/components/table/StickyHeadTable";
import TableHeader from "../common/components/tableHeader/TableHeader";
import { CustomDiv } from "./CandidatesStyles";
import CandidatesTableHeader from "./headerCandidates/HeaderCandidates";







function Candidates() {
  return (
    <CustomDiv>
      <CheckboxFilters />
      <div>
      <CandidatesTableHeader title="Candidates" routeOne="/candidates" routeTwo="/projects"/>
      <StickyHeadTable />
      </div>
    </CustomDiv>
  );
}

export default Candidates;
