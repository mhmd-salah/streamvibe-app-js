import React from "react";
import { ShowsItemWrapper } from "./ShowsItem.styles";
import routeConstants from "../../../../constant/routeConstants";

function ShowsItem({ itemData }) {
  return (
    <ShowsItemWrapper to={routeConstants.SHOWS + `/${itemData.id}`}>
      <div className="item-content bg-black10">
        <div className="item-img">
          <img src={itemData?.image?.medium} alt="" />
        </div>
        <div className="item-body">
          <div className="flex items-center justify-between flex-wrap item-info">
            <div className="item-title font-semibold">
              {itemData?.name.length > 16
                ? itemData?.name?.substring(0, 16) + "..."
                : itemData?.name}
            </div>
          </div>
        </div>
      </div>
    </ShowsItemWrapper>
  );
}

export default ShowsItem;

ShowsItem.prototype = {
  itemData: ProtoTypes.object.isRequired,
};
