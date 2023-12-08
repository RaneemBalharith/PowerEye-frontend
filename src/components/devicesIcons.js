import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
export const Icon = ({ id, color, IconStyle,size }) => {
  switch (id) {
    case 1:
      return (
        <FontAwesome
          style={IconStyle}
          name="snowflake-o"
          size={size}
          color={color}
        />
      );
    case 2:
      return (
        <FontAwesome
          style={IconStyle}
          name="lightbulb-o"
          size={size}
          color={color}
        />
      );
    case 3:
      return (
        <MaterialIcons
          style={IconStyle}
          name="microwave"
          size={size}
          color={color}
        />
      );
    case 4:
      return (
        <MaterialCommunityIcons
          style={IconStyle}
          name="coffee-maker-outline"
          size={size}
          color={color}
        />
      );
    case 5:
      return (
        <MaterialCommunityIcons
          style={IconStyle}
          name="blender-outline"
          size={size}
          color={color}
        />
      );
    case 6:
      return (
        <MaterialCommunityIcons
          style={IconStyle}
          name="microphone-settings"
          size={size}
          color={color}
        />
      );
    case 7:
      return (
        <MaterialCommunityIcons
          style={IconStyle}
          name="hair-dryer-outline"
          size={size}
          color={color}
        />
      );
    case 8:
      return (
        <Ionicons
          style={IconStyle}
          name="camera-outline"
          size={size}
          color={color}
        />
      );
    case 9:
      return (
        <MaterialCommunityIcons
          style={IconStyle}
          name="washing-machine"
          size={size}
          color={color}
        />
      );
    case 10:
      return (
        <MaterialCommunityIcons
          style={IconStyle}
          name="iron-outline"
          size={size}
          color={color}
        />
      );
    case 11:
      return (
        <MaterialCommunityIcons
          style={IconStyle}
          name="vacuum-outline"
          size={size}
          color={color}
        />
      );
    case 12:
      return (
        <MaterialCommunityIcons
          style={IconStyle}
          name="air-filter"
          size={size}
          color={color}
        />
      );
    case 13:
      return (
        <Ionicons
          style={IconStyle}
          name="md-game-controller-outline"
          size={size}
          color={color}
        />
      );
    case 14:
      return (
        <MaterialCommunityIcons
          style={IconStyle}
          name="monitor-screenshot"
          size={size}
          color={color}
        />
      );
    case 15:
      return <Entypo style={IconStyle} name="sound" size={size} color={color} />;
    case 16:
      return (
        <Feather style={IconStyle} name="printer" size={size} color={color} />
      );
    case 17:
      return (
        <FontAwesome5
          style={IconStyle}
          name="charging-station"
          size={size}
          color={color}
        />
      );
    case 18:
      return (
        <FontAwesome5
          style={IconStyle}
          name="satellite-dish"
          size={size}
          color={color}
        />
      );
    case 19:
      return (
        <MaterialIcons
          style={IconStyle}
          name="fitness-center"
          size={size}
          color={color}
        />
      );
  }
};
