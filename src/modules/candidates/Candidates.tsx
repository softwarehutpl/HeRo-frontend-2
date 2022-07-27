import React, { useEffect, useState } from "react";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import { CustomDiv, CheckboxDiv } from "./CandidatesStyles";
import CandidatesTableHeader from "./headerCandidates/HeaderCandidates";
import { useTables } from "../contexts/CandidatesTablesContext";
import { CustomKanbanDiv } from "../common/components/kanban/KanbanTableStyles";
import KanbanTable from "../common/components/kanban/KanbanTable";
import CandidatesService from "../common/Api/Candidates.service";
import { CustomTable } from "./table/CustomTable";
import { useParams, useSearchParams } from "react-router-dom";

interface Candidates {
  id: number;
  name: string;
  source: string;
  recruitmentName: string;
  status: string[];
  stage: string[];
  techId: number;
  techEmail: string;
  recruiterId: number;
  recruiterEmail: string;
}

function Candidates() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || undefined;
  const status = searchParams.get("status") || undefined;
  console.log(id, status);

  interface CandidateGetListDto {
    paging: {
      pageSize: number;
      pageNumber: number;
    };
    stage?: string[];
    status?: string[];
    recruitmentId?: number;
  }
  const [candidateInfoForListDTOs, setcandidateInfoForListDTOs] = useState<
    Candidates[]
  >([]);
  const whichTable = useTables().value;

  const candidateData = async (projectId?: string, status?: string) => {
    const postData: CandidateGetListDto = {
      paging: {
        pageSize: 104,
        pageNumber: 1,
      },
    };

    //....
    if (projectId) {
      postData.recruitmentId = parseInt(projectId);
    }
    if (status) {
      postData.status = [status];
    }
    const responseData = await CandidatesService.candidateHttpPost(
      "GetList",
      postData
    );
    setcandidateInfoForListDTOs(responseData.data.candidateInfoForListDTOs);
  };

  useEffect(() => {
    candidateData(id, status);
  }, [id, status]);

  console.log(candidateInfoForListDTOs);

  const statusesList = ["New", "In processing", "Dropped out", "Hired"];
  const stageList = [
    "Evaluation",
    "Interview",
    "Phone interview",
    "Tech interview",
    "Offer",
  ];
  const [isChecked, setIsChecked] = useState<boolean>(true);

  return (
    <>
      {candidateInfoForListDTOs && (
        <CustomDiv>
          <CheckboxDiv>
            <CheckboxFilters
              header="Status"
              filtersList={statusesList}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
            <CheckboxFilters
              header="Stage"
              filtersList={stageList}
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          </CheckboxDiv>
          <div style={{ width: "100%" }}>
            <CandidatesTableHeader title="Candidates" />
            {whichTable === 0 ? (
              <CustomTable candidateList={candidateInfoForListDTOs} />
            ) : (
              <CustomKanbanDiv>
                <KanbanTable />
              </CustomKanbanDiv>
            )}
          </div>
        </CustomDiv>
      )}
    </>
  );
}

export default Candidates;
