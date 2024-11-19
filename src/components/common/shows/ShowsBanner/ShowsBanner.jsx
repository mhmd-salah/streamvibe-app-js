import {Container, HeadingTitle} from "../../../../styles/global/default"
import { ShowsBannerWrapper } from "./ShowsBanner.styles"
import PropTypes from "prop-types"

const ShowsBanner = ({showsData}) => {
  return (
    <ShowsBannerWrapper className="top-spacing-fix">
      <Container>
        <div className="banner-img flex justify-center items-end">
          <div className="banner-content text-center">
            <HeadingTitle className="banner-title"></HeadingTitle>
          </div>
        </div>
      </Container>
    </ShowsBannerWrapper>
  )
}

export default ShowsBanner

ShowsBanner.propTypes = {
  showsData:PropTypes.object.isRequired
}