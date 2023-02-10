import React, { ReactElement } from "react";
import SeeAll from "../../common/seeAll";
import PendingCom from "./PendingComponent";

interface IPending {}

class Pending extends React.Component<IPending> {
  constructor(props: IPending) {
    super(props);
  }

  render() {
    return (
      <div className="h-full flex flex-col  text-center items-center leading-10 bg-slate-100  ">
        <div className="flex text-center items-center leading-10 justify-between w-full px-5 pt-2">
          <div className="text-lg font-medium">Pending Response</div>
          <div>
            <SeeAll />
          </div>
        </div>
        <div>
          <PendingCom/>
        </div>
      </div>
    );
  }
}

export default Pending;
