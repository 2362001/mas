import React, { ReactElement } from "react";

interface IHeaderLeft {}

class HeaderLeft extends React.Component<IHeaderLeft> {
  constructor(props: IHeaderLeft) {
    super(props);
  }

  render() {
    return <div className="h-14 flex justify-around  text-center items-center leading-10">
        <div className="w-12 h-12 rounded-3xl bg-yellow-600 text-white">MAS</div>
        <div>ICon</div>
      </div>;
  }
}

export default HeaderLeft;
