import React from "react";
import { FAB, Portal, Provider } from "react-native-paper";
import { Linking, StyleSheet } from "react-native";

const MoreDetailsEventFAB = ({ link, email }) => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({open});

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          style={styles.FAB}
          open={open}
          icon={open ? "calendar-today" : "menu"}
          actions={[
            {
              icon: "link",
              label: "More Details",
              onPress: () => Linking.openURL(link),
            },
            {
              icon: "email",
              label: "Event Contact",
              onPress: () => Linking.openURL(`mailto:${email}`),
            },
          ]}
          onStateChange={onStateChange}
        />
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  FAB: {
    position: "absolute",
    padding: 20,
    right: 0,
    bottom: 0,
  },
});

export default MoreDetailsEventFAB;
