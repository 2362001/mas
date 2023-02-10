import React, { ReactElement } from "react";

interface IAlertList {}

class AlertList extends React.Component<IAlertList> {
  constructor(props: IAlertList) {
    super(props);
  }

  render() {
    return <div>AlertList</div>;
  }
}

export default AlertList;
