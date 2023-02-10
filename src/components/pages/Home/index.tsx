import React, { ReactElement } from "react";
import Chart from "../../componentPages/Chart";
import Pending from "../../componentPages/Pending Responses";
import Table from "../../componentPages/Table";

interface IHome {}

class Home extends React.Component<IHome> {
  constructor(props: IHome) {
    super(props);
  }

  render() {
    return (
      <div className=" flex w-full justify-between">
        <div className="w-9/12 mr-8 mt-5 pt-3">
          <Chart />
          <Table />
        </div>
        <div className="w-1/4">
          <Pending/>
        </div>
      </div>
    );
  }
}

export default Home;
