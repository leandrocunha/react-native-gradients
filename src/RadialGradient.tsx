import React from 'react';
import Svg, {
  Defs,
  RadialGradient as SVGRadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import { Color } from './types';

export const RadialGradient = ({ colorList, x, y, rx, ry, customId }: { colorList: Color[]; x: string; y: string; rx: string; ry: string, customId?: string }) => {
  const uniqueId = customId || React.useMemo(() => `grad-${Math.random().toString(32)}`, [])

  return (
    <Svg height="100%" width="100%">
      <Defs>
        <SVGRadialGradient
          id={uniqueId}
          cx={x}
          cy={y}
          rx={rx}
          ry={ry}
          gradientUnits="userSpaceOnUse"
        >
          {colorList.map((value, index) => (
            <Stop
              key={`RadialGradientItem_${index}`}
              offset={value.offset}
              stopColor={value.color}
              stopOpacity={value.opacity}
            />
          ))}
        </SVGRadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill={`url(#${uniqueId})`} />
    </Svg>
  );
};
