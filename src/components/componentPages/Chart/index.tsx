import React, { ReactElement } from "react";

interface IChart {}

class Chart extends React.Component<IChart> {
  constructor(props: IChart) {
    super(props);
  }

  render() {
    return <div className="h-64 rounded-3xl  w-full bg-blue-600 flex justify-between text-center items-center leading-10 ">
        <div className="italic font-medium"></div>
    </div>;
  }
}

export default Chart;
