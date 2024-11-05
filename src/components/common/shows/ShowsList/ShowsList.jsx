import { useState } from "react";
import { PaginationWrapper, ShowsListWrapper } from "./ShowsList.styles";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Container } from "../../../../styles/global/default";
import ShowsItem from "../ShowsItem/ShowsItem";

function ShowsList({ showsData, showsTitle }) {
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 40;
  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = showsData.slice(indexOfFirstShow, indexOfLastShow);
  const totalPages = Math.ceil(showsData.length / showsPerPage)

  return (
    <ShowsListWrapper>
      <SectionTitle title={showsTitle} />
      <Container>
        <div className="shows-list grid">
          {
            currentShows?.map((show)=>{
              <ShowsItem key={show.id} itemData={show} />
            })
          }
        </div>
        <PaginationWrapper className="flex items-center justify-center"></PaginationWrapper>
      </Container>
    </ShowsListWrapper>
  );
}

export default ShowsList;

