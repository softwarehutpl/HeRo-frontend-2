import React from "react";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import StickyHeadTable from "../common/components/table/StickyHeadTable";
import { CustomDiv } from "./CandidatesStyles";
import CandidatesTableHeader from "./headerCandidates/HeaderCandidates";
import {useTables } from "../contexts/CandidatesTablesContext"

function Candidates() {
  const whichTable = useTables().value;
  return (
    <CustomDiv>
      <CheckboxFilters />
        <div>
         <CandidatesTableHeader title="Candidates"/>
            {whichTable === 0 ? <StickyHeadTable /> : <div style={{ fontSize: "200px" }}>Kaban</div>}
        </div>
    </CustomDiv>
  );
}

export default Candidates;
