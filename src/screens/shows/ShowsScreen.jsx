import { useSelector, useDispatch } from "react-redux";
import {
  ErrorMessage,
  FreeTrial,
  ShowsBanner,
  ShowsList,
  ShowsSlider,
  Spinner,
} from "../../components";
import { useEffect } from "react";
import { fetchAllShows } from "../../redux/slices/showsSlice";
import {
  selectAllShows,
  selectSortedHighRatedShows,
  selectSortedNewShows,
} from "../../redux/selectors/showsSelectors";
import { scrollToTop } from "../../utilities/scrollToTop";
import { HIGH_RATED_SHOWS, NEW_SHOWS } from "../../constant/showsConstants";

const ShowsScreen = () => {
  const isLoading = useSelector((state) => state.shows.isLoading.fetchAllShows);
  const isError = useSelector((state) => state.shows.isError.fetchAllShows);
  const error = useSelector((state) => state.shows.error);
  const dispatch = useDispatch();
  const allShowsData = useSelector(selectAllShows);
  console.log(allShowsData)


  useEffect(() => {
    dispatch(fetchAllShows());
  }, [dispatch]);

  useEffect(()=>{
    scrollToTop()
  },[])



  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="pg-shows">
      {
        allShowsData?.length>0 && <ShowsList showsData={allShowsData} showsTitle = {"All Shows"} />
      }
    </div>
  );
};

export default ShowsScreen;
