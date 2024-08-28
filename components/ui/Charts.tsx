import { Dimensions, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

const Charts = () => {
  console.log(WIDTH);

  const barData = [
    {
      value: 50,

      label: "Maths",
      frontColor:'#FC819E',

      topLabelComponent: (value:any) => (
        <Text style={{ color: "black", fontSize: 18, marginBottom: 6 }}>
          {value}
        </Text>
      ),
    },
    { value: 88, label: "Geography", frontColor: "#E9FF97" },
    { value: 65, label: "Chemistry", frontColor: "#A0DEFF" },
    { value: 75, label: "English", frontColor: "#F6F193" },
    { value: 20, label: "Computer", frontColor: "lightgreen" },
  ];

//   const ShowPercentage = (label:any, value:any) => {
//     console.log(label, value);

//     return (
//       <View>
//         {/* <Text style={{fontSize: 12, color: 'white'}}>{label}</Text> */}

//         {/* {alert(`${label} has ${value}`)} */}
//       </View>
//     );
//   };

  const padding = 16;
  const spacing = 8;
  const barWidth =
    (WIDTH -4 * padding - spacing * (barData.length - 1)) / barData.length;

  return (
    <View style={{ padding }}>
      <BarChart
        barWidth={barWidth}
        noOfSections={3}
        barBorderBottomLeftRadius={0}
        barBorderBottomRightRadius={0}
        barBorderTopLeftRadius={8}
        barBorderTopRightRadius={8}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={-18}
        hideYAxisText={true}
        xAxisThickness={2}
        xAxisColor={"rgb(245,245,245)"}
        spacing={spacing}
        rulesColor={"transparent"}
        maxValue={100}
        stepHeight={85}
        backgroundColor={"transparent"}
        // onPress={(item)=> ShowPercentage(item.label , item.value)}
        // xAxisLabelTextStyle={{color: 'gray', textAlign: 'center', fontSize:12,}}

        // onPress={(item:any) => ShowPercentage(item.label, item.value)}
        xAxisLabelTextStyle={{
          color: "gray",
          textAlign: "center",
          fontSize: 12,
        }}
      />
    </View>
  );
};

export default Charts;
