import { useSelector } from "react-redux";
import { useState } from "react";
import { IBtnRefState, IModalState } from "../../../interface/modal";
import { IProjectCollection } from "../../../interface/kanbanBoard";
import { Link } from "react-router-dom";
import { cls } from "../../../libs/utils";
import { hoverModalHandle } from "../../../libs/hoverModalHandle";
import ProjectCollectionBtns from "../../../components/btns/ProjectCollectionBtns";
import CreatePCModal from "../../../components/modal/project-collection/CreatePCModal";
import DeletePCModal from "../../../components/modal/project-collection/DeletePCModal";
import EditPCModal from "../../../components/modal/project-collection/EditPCModal";

function ProjectCollection() {
  const projectCollection = useSelector(
    ({ projectCollectionSlice }: { projectCollectionSlice: IProjectCollection }) => {
      return projectCollectionSlice.projectCollection;
    }
  );
  const modalState = useSelector(
    ({ modalStateSlice }: { modalStateSlice: IModalState }) => {
      return modalStateSlice.modalState;
    }
  );
  const [modalBtnRef, setModalBtnRef] = useState<IBtnRefState>({
    editProjectsBtnRef: null,
    deleteProjectsBtnRef: null,
  });

  const formatParticipants = (participants: string[]) => {
    if (participants.length <= 2) {
      return participants.join(", ");
    } else {
      const displayedParticipants = participants.slice(0, 2).join(", ");
      const remainingCount = participants.length;
      return `${displayedParticipants} ... 총 ${remainingCount}명`;
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(
    Array(projectCollection.length).fill(false)
  );

  return (
    <>
      <div className="w-full p-8 pt-16 ">
        <ul className="grid grid-cols-3 gap-4">
          {projectCollection.map((item, index) => (
            <li
              key={item.id}
              className="relative block p-2 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <div className="flex flex-col gap-4 ">
                <div className="z-20 flex items-center justify-between p-1 transition duration-100 ease-in-out rounded-md hover:bg-gray-300 ">
                  <span className="flex w-full truncate">
                    <Link
                      to={`${item.id}`}
                      className="flex-1 pl-1 text-2xl font-bold tracking-tight text-gray-900 truncate"
                    >
                      {item.title}
                    </Link>
                  </span>
                  <ProjectCollectionBtns setModalBtnRef={setModalBtnRef} />
                </div>
                <span className="flex-1 p-2 font-normal text-gray-700 truncate">
                  {item.description}
                </span>
                <div className="grid items-center justify-between w-full grid-cols-2 p-2 truncate">
                  <div
                    onMouseEnter={() =>
                      hoverModalHandle(isModalOpen, setIsModalOpen, index, true)
                    }
                    onMouseLeave={() =>
                      hoverModalHandle(
                        isModalOpen,
                        setIsModalOpen,
                        index,
                        false
                      )
                    }
                  >
                    {formatParticipants(item.participants)}
                  </div>

                  <span className="text-sm text-right whitespace-no-wrap">
                    <span className="text-gray-400 ">Update</span>{" "}
                    {item.updateAt}
                  </span>
                </div>
                <div className="absolute z-50 left-2 top-[160px]">
                  <div
                    className={cls(
                      "text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow",
                      isModalOpen[index] ? "" : "hidden"
                    )}
                    id="user-dropdown"
                  >
                    <div className="px-4 py-3">
                      <span className="block max-w-sm text-sm text-gray-900 break-words whitespace-pre-wrap">
                        {item.participants
                          .map((member, index) =>
                            item.participants.length === index + 1
                              ? member
                              : member + ", "
                          )
                          .join("")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CreatePCModal modalState={modalState} />
      <EditPCModal modalState={modalState} modalBtnRef={modalBtnRef} />
      <DeletePCModal modalState={modalState} modalBtnRef={modalBtnRef} />
    </>
  );
}

export default ProjectCollection;
