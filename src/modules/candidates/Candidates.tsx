import React from "react";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import StickyHeadTable from "../common/components/table/StickyHeadTable";
import { CustomDiv } from "./CandidatesStyles";




function Candidates() {
  return (
    <CustomDiv>
      <CheckboxFilters />
      <StickyHeadTable />
    </CustomDiv>
  );
}

export default Candidates;
