import React, { useEffect, useReducer, useState } from "react";
import CheckboxFilters from "../common/components/checkboxFilters/CheckboxFilters";
import { CustomDiv, CheckboxDiv } from "./CandidatesStyles";
import CandidatesTableHeader from "./headerCandidates/HeaderCandidates";
import { useTables } from "../contexts/CandidatesTablesContext";
import { CustomKanbanDiv } from "../common/components/kanban/KanbanTableStyles";
import KanbanTable from "../common/components/kanban/KanbanTable";
import CandidatesService from "../common/Api/Candidates.service";
import { CustomTable } from "./table/CustomTable";
import { useSearchParams } from "react-router-dom";

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

  console.log(searchParams);

  interface CandidateGetListDto {
    paging: {
      pageSize: number;
      pageNumber: number;
    };
    stage?: string[];
    status?: string[];
    recruitmentId?: number;
  }

  interface CheckboxList {
    id: number;
    title: string;
    isChecked: boolean;
  }

  type Action = {
    id: number;
    type: "IsChecked";
  };

  const initialCheckboxStatus: CheckboxList[] = [
    {
      id: 1,
      title: "New",
      isChecked: true,
    },
    {
      id: 2,
      title: "In Processing",
      isChecked: true,
    },
    {
      id: 3,
      title: "Dropped out",
      isChecked: true,
    },
    {
      id: 4,
      title: "Hired",
      isChecked: true,
    },
  ];
  const initialCheckboxStage: CheckboxList[] = [
    {
      id: 1,
      title: "Evaluation",
      isChecked: true,
    },
    {
      id: 2,
      title: "Interview",
      isChecked: true,
    },
    {
      id: 3,
      title: "Phone interview",
      isChecked: true,
    },
    {
      id: 4,
      title: "Tech  interview",
      isChecked: true,
    },
    {
      id: 5,
      title: "Offer",
      isChecked: true,
    },
  ];

  const reducer = (state: CheckboxList[], action: Action) => {
    switch (action.type) {
      case "IsChecked":
        return state.map((checked: CheckboxList) => {
          if (checked.id == action.id) {
            return { ...checked, isChecked: !checked.isChecked };
          } else {
            return checked;
          }
        });
      default:
        return state;
    }
  };

  const handleComplete = (checkbox: any) => {
    dispatch({ type: "IsChecked", id: checkbox });
  };
  const handleCompleteStage = (checkbox: any) => {
    dispatchStage({ type: "IsChecked", id: checkbox });
  };

  const [checkboxStatus, dispatch] = useReducer(reducer, initialCheckboxStatus);
  const [checkboxStage, dispatchStage] = useReducer(
    reducer,
    initialCheckboxStage
  );

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

  // if (checkboxStatus[0].isChecked) {
  //   const urlParams = searchParams.append("status", "New");
  //   console.log(urlParams);
  // }

  useEffect(() => {
    candidateData(id, status);
  }, [id, status]);

  // if (checkboxStatus[0].isChecked) {
  //   const urlParams = useParams();
  //   console.log(urlParams);
  // }

  // const newAskData = {
  //   status: [checkboxStatus[3].title],
  //   paging: {
  //     pageSize: 104,
  //     pageNumber: 1,
  //   },
  // };

  // const testNew = async () => {
  //   const updateData = await CandidatesService.candidateHttpPost(
  //     "GetList",
  //     newAskData
  //   );
  //   console.log(updateData);
  // };

  // useEffect(() => {
  //   // console.log(`zmiana checkboxa new ${checkboxStatus[0]}`);
  //   testNew();
  // }, [checkboxStatus[0]]);

  return (
    <>
      {candidateInfoForListDTOs && (
        <CustomDiv>
          {whichTable === 0 ? (
            <>
              <CheckboxDiv>
                <CheckboxFilters
                  header="Status"
                  checkbox={checkboxStatus}
                  dispatch={handleComplete}
                />
                <CheckboxFilters
                  header="Stage"
                  checkbox={checkboxStage}
                  dispatch={handleCompleteStage}
                />
              </CheckboxDiv>
              <div style={{ width: "100%" }}>
                <CandidatesTableHeader title="Candidates" />
                <CustomTable candidateList={candidateInfoForListDTOs} />
              </div>
            </>
          ) : (
            <div style={{ width: "100%" }}>
              <CandidatesTableHeader title="Candidates" />
              <CustomKanbanDiv>
                <KanbanTable />
              </CustomKanbanDiv>
            </div>
          )}
        </CustomDiv>
      )}
    </>
  );
}

export default Candidates;
