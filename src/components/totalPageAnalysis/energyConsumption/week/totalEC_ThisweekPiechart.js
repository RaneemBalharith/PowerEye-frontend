import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

export default function TotalEC_ThisweekPiechart() {
  const [chartData, setChartData] = useState([]);
  const [chartColors, setChartColors] = useState([]);

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {
    //API CAll
    // const fetchChartData = async () => {
    // try {
    // const response = await fetch('API_ENDPOINT'); // Replace 'API_ENDPOINT' with your actual API endpoint
    // const data = await response.json();

    //       // Extract the names from the data for the legend
    //       const names = data.map(item => item.name);

    //       // Generate colors array based on the number of data items
    //       const colors = generateChartColors(data.length);

    //       // Update the chartData and chartColors state
    //       setChartData(data);
    //       setChartColors(colors);
    //     } catch (error) {
    //       console.error('Error fetching chart data:', error);
    //     }
    //   };
    // Simulated API response
    const response = [
      {
        name: 'Appliance 1',
        population: 21500000
      },
      {
        name: 'Toronto',
        population: 2800000
      },
      {
        name: 'New York',
        population: 8538000
      },
      {
        name: 'Moscow',
        population: 11920000
      },
      {
        name: 'New York',
        population: 8538000
      },
      {
        name: 'Moscow',
        population: 11920000
      }
    ];

    // Generate colors array based on the number of data items
    const colors = generateChartColors(response.length);

    // Update the chartData with colors
    const updatedChartData = response.map((item, index) => ({
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

  return (
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
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
      hasLegend={true}
      legendData={chartData.map(item => ({
        name: item.name,
        color: item.color,
      }))}
      legendStyle={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    />
  );
}