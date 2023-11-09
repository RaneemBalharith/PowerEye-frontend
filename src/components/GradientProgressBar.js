import React from 'react';
import { View } from 'react-native';
import Svg, { LinearGradient, Stop, Rect, Defs, ClipPath, Rect as ClipRect } from 'react-native-svg';

const GradientProgressBar = ({ progress, width, height,borderRadius }) => {
  const gradientId = 'gradient';

  const gradientColors = [
    { offset: '20%', color: '#00707C' },
    { offset: '100%', color: 'orange' },
  ];

  return (
    <View style={{ width, height, backgroundColor:'rgba(0,0,0,0.2)',borderRadius:borderRadius }}>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientColors.map((color, index) => (
              <Stop
                key={index}
                offset={color.offset}
                stopColor={color.color}
              />
            ))}
          </LinearGradient>
        </Defs>
        <ClipPath id="clip">
          <ClipRect width={`${progress}%`} height="100%" rx={borderRadius} ry={borderRadius} />
        </ClipPath>
        <Rect width={`${progress}%`} height="100%" fill={`url(#${gradientId})`} clipPath="url(#clip)" rx={borderRadius} ry={borderRadius} />
      </Svg>
    </View>
  );
};

export default GradientProgressBar;
