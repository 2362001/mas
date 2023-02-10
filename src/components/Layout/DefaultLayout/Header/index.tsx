import React, { ReactElement } from "react";

interface IHeader {
}

class Header extends React.Component<IHeader> {
  constructor(props: IHeader) {
    super(props);
  }

  render() {
    return (
      <div className="h-14 flex justify-between text-center items-center leading-10 ">
        <div className="italic font-medium">COSMIC</div>
        <div className="flex">
          <div className="p-5"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></div>
          <div className="p-5"><i className="fa-solid fa-bell"></i></div>
          <div className="p-5"><i className="fa-solid fa-circle-question"></i></div>
          <div className="p-5"><i className="fa-solid fa-person"></i></div>
        </div>
      </div>
    );
  }
}

export default Header;
