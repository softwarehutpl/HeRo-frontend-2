import React from "react";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import StickyHeadTable from "../common/components/table/StickyHeadTable";
import { CustomDiv, CheckboxDiv } from "./CandidatesStyles";
import CandidatesTableHeader from "./headerCandidates/HeaderCandidates";
import { useTables } from "../contexts/CandidatesTablesContext";

function Candidates() {
  const whichTable = useTables().value;

  const statusesList = ["New", "In processing", "Dropped out", "Hired"];
  const stageList = [
    "Evaluation",
    "Interview",
    "Phone interview",
    "Tech interview",
    "Offer",
  ];
  return (
    <CustomDiv>
      <CheckboxDiv>
        <CheckboxFilters header="Status" filtersList={statusesList} />
        <CheckboxFilters header="Stage" filtersList={stageList} />
      </CheckboxDiv>
      <div style={{ width: "100%" }}>
        <CandidatesTableHeader title="Candidates" />
        {whichTable === 0 ? (
          <StickyHeadTable />
        ) : (
          <div style={{ fontSize: "200px" }}>Kaban</div>
        )}
      </div>
    </CustomDiv>
  );
}

export default Candidates;
