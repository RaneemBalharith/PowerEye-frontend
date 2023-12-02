import React, { useEffect,useContext, useState } from 'react';
import { Dimensions,View ,StyleSheet} from 'react-native';
import { PieChart } from 'react-native-chart-kit';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Barchart =({ data,type })=> {

  const [chartData, setChartData] = useState([]);
  const [chartColors, setChartColors] = useState([]);



  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {


    // Generate colors array based on the number of data data
    const colors = generateChartColors(data.appliancesEnergy?.length);

    // Update the chartData with colors
    const updatedChartData = data.appliancesEnergy?.map((item, index) => ({
      ...item,
      color: colors[index],
    }));

    // Update the chartData and chartColors state
    setChartData(updatedChartData);
    setChartColors(colors);
  };

  const generateChartColors = numColors => {
    // Define your color palette here
    const colorPalette = ['#1F3334', '#00707C', '#45A8AE', '#A3D7DD', '#9EB8B5', '#424953', '#8D9BA4', '#EF9814', '#D3B977', '#F0D387'];

  
    // Generate an array of colors based on the color palette
    return Array.from({ length: numColors }, (_, index) => colorPalette[index % colorPalette.length]);
  };

  let prefix = () =>{
if(type == 'cost'){
  return 'Sr'
}
if(type == 'energy'){
  return 'Kwh'
}
if(type == 'co2'){
  return 'co2'
}
  }
  let pre = prefix()

  return (
   <View style={styles.container}>
<PieChart
      data={chartData}
      width={Dimensions.get('window').width - 16}
      height={220}
      chartConfig={{
        backgroundColor: '#1cc910',
        backgroundGradientFrom: '#eff3ff',
        backgroundGradientTo: '#efefef',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForLabels: {
          fill: 'white',
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
        },
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
      accessor="energy"
      backgroundColor="transparent"
      paddingLeft="15"
      hasLegend={true}
      legendData={chartData.map(item => ({
        name : item.name,
        color: item.color,
      }))}
      legendStyle={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    />
 
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});



