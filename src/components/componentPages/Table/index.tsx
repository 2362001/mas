import React, { ReactElement } from "react";

interface ITable {}

class Table extends React.Component<ITable> {
  constructor(props: ITable) {
    super(props);
  }

  render() {
    return <div className="h-14 flex justify-between text-center items-center leading-10 ">
        <div className="italic font-medium">COSMIC</div>
        <div>ICON</div>
    </div>;
  }
}

export default Table;
