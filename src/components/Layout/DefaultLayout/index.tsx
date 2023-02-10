import React, { ReactElement } from "react";
import Header from "./Header";
import HeaderLeft from "./HeaderLeft";
import Sidebar from "./Sidebar";
import "./index.css";

interface IDefaultLayout {
  children?: ReactElement;
}

class DefaultLayout extends React.Component<IDefaultLayout> {
  constructor(props: IDefaultLayout) {
    super(props);
  }

  render() {
    return (
      <div className=" flex ">
        <div className="text-white bg-blue-500">
          <HeaderLeft />
          <div className="text-white">
            <Sidebar />
          </div>
        </div>
        <div className="w-full">
          <div className="px-6">
            <Header />
          </div>
          <hr />
          <div className="px-8">
            <div className="">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
