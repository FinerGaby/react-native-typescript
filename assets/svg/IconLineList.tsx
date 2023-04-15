import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const IconLineList = (props: SvgProps) => (
  <Svg fill="none" {...props} width={10} height={10} >
    <Path
      fill="#070707"
      fillRule="evenodd"
      d="M0 7.474V10l10-5L0 0v2.526L4.947 5 0 7.474Z"
      clipRule="evenodd"
    />
  </Svg>
);
