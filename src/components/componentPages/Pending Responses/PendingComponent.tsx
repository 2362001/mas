import React, { ReactElement } from "react";

interface IPendingCom {}

class PendingCom extends React.Component<IPendingCom> {
  constructor(props: IPendingCom) {
    super(props);
  }

  render() {
    return <div className="">
        <div className="img"></div>
    </div>;
  }
}

export default PendingCom;
