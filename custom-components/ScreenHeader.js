import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";

const ScreenHeader = ({title, returnPage}) => {

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  // FIXME: correct conditional showing of back action button instead of disabled feature.

  return (
    <Appbar.Header>
      {
        returnPage ?
        <Appbar.BackAction onPress={_goBack} />
        : <Appbar.BackAction onPress={_goBack} disabled />
      }
        <Appbar.Content title={title}/>
    </Appbar.Header>
  );
};

export default ScreenHeader;