import React from "react";
import { Appbar } from "react-native-paper";

const ScreenHeader = ({title, navigation}) => {
  // FIXME: correct conditional showing of back action button instead of disabled feature.

  return (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={title}/>
    </Appbar.Header>
  );
};

export default ScreenHeader;