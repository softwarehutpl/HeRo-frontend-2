import React from "react";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
// import StickyHeadTable from "../common/components/table/StickyHeadTable";
import { CustomDiv, CheckboxDiv } from "./CandidatesStyles";
import CandidatesTableHeader from "./headerCandidates/HeaderCandidates";
import { useTables } from "../contexts/CandidatesTablesContext";
import { CustomKanbanDiv} from "../common/components/kanban/KanbanTableStyles"
import KanbanTable from "../common/components/kanban/KanbanTable";
import CustomTable from "../common/components/table/CustomTable";

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


  // Organize the constants values in simiar way:

  // Convert plain dictionaries into enums 
  /*
  export enum EProjectColumnLabel {
    Name = "Name",
    Creator = "Creator",
    From = "From",
    To = "To",
    Resume = "Resume",
    Hired = "Hired",
    actions = "actions",
  };
  type ProjectColumnLabelType = keyof typeof EProjectColumnLabel; // if you need type

  const example = EProjectColumnLabel.Name;
  const onlyValues = Object.values(EProjectColumnLabel); //if you need array of values or keys
*/
  return (
    <CustomDiv>
      <CheckboxDiv>
        <CheckboxFilters header="Status" filtersList={statusesList} />
        <CheckboxFilters header="Stage" filtersList={stageList} />
      </CheckboxDiv>
      <div style={{ width: "100%" }}>
        {/* Avoid inline styling. The accepted case is when styling inline in order to hack 3rd party elements */}
        <CandidatesTableHeader title="Candidates" />
        {whichTable === 0 ? (
          <CustomTable />
        ) : (
          <CustomKanbanDiv ><KanbanTable/></CustomKanbanDiv>
        )}
      </div>
    </CustomDiv>
  );
}

export default Candidates;
