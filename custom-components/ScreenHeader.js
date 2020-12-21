import React from "react";
import { Appbar } from "react-native-paper";

const ScreenHeader = ({title}) => {
  // FIXME: correct conditional showing of back action button instead of disabled feature.

  return (
    <Appbar.Header>
        <Appbar.Content title={title}/>
    </Appbar.Header>
  );
};

export default ScreenHeader;