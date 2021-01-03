import React from "react";
import { Appbar } from "react-native-paper";

// screen header component for home screens
const ScreenHeader = ({title}) => {
  // FIXME: correct conditional showing of back action button instead of disabled feature.

  return (
    <Appbar.Header>
        <Appbar.Content title={title}/>
    </Appbar.Header>
  );
};

export default ScreenHeader;