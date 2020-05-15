import React from "react"
import { View } from "react-native"
import { withStyles } from "react-native-ui-kitten"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  render = () => (
    <View
      styles={{
        overflow: "visible",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <Button
        title="Button"
        color="#2196F3"
        styles={{ overflow: "visible", borderStyle: "solid" }}
      />
      <Text styles={{ overflow: "visible", borderStyle: "solid" }}>Text</Text>
      <CbInput
        placeholder="Text input placeholder"
        readonly={false}
        maxLength=""
        value=""
        styles={{ overflow: "visible", borderStyle: "solid" }}
      />
      <CbInputNumber
        placeholder="Text input placeholder"
        readonly={false}
        maxLength=""
        value=""
        styles={{ overflow: "visible", borderStyle: "solid" }}
      />
      <CbInputDate
        placeholder="Text input placeholder"
        readonly={false}
        maxLength=""
        value=""
        styles={{ overflow: "visible", borderStyle: "solid" }}
      />
      <Slider
        value="50"
        minimalValue="0"
        maximumValue="100"
        step="1"
        disabled={false}
        styles={{ overflow: "visible", borderStyle: "solid" }}
      />
      <CheckBox
        label="Checkbox"
        value={true}
        disabled={false}
        styles={{ overflow: "visible", borderStyle: "solid" }}
      />
      <Radio
        label="Radio button"
        value={true}
        disabled={false}
        styles={{ overflow: "visible", borderStyle: "solid" }}
      />
      <Icon
        iconFont="Eva Design Icons"
        icon="github"
        styles={{ overflow: "visible", borderStyle: "solid" }}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
