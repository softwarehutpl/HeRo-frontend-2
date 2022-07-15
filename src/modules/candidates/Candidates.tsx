import React from "react";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import StickyHeadTable from "../common/components/table/StickyHeadTable";
import { CustomDiv, CheckboxDiv } from "./CandidatesStyles";
import CandidatesTableHeader from "./headerCandidates/HeaderCandidates";
import { useTables } from "../contexts/CandidatesTablesContext";
import { Link } from "react-router-dom";

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

  // const Candidate = () => {
  //   const candidateId = ["1", "2", "3"]
  //   return (
  //     <CustomDiv>
  //       <CheckboxDiv>
  //         <CheckboxFilters header="Status" filtersList={statusesList} />
  //         <CheckboxFilters header="Stage" filtersList={stageList} />
  //       </CheckboxDiv>
  //       <div style={{ width: "100%" }}>
  //         <CandidatesTableHeader title="Candidates" />
  //         {whichTable === 0 ? (
  //           candidateId.map(id => {
  //             return (
  //               <Link to={`/candidates/${id}`}>
  //               </Link>
  //             )
  //             <StickyHeadTable />
  //           })
  //         ) : (
  //           <div style={{ fontSize: "200px" }}>Kaban</div>
  //         )}
  //       </div>
  //     </CustomDiv>
  //   )
  // }

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
