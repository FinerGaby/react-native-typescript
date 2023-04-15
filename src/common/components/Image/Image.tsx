import React from 'react';
import {
  Image as RImage,
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';

export interface ImageProps {
  imageStyles?: StyleProp<ImageStyle>;
  url: ImageSourcePropType;
}

export const Image = ({imageStyles, url}: ImageProps) => {
  return <RImage testID='image' style={imageStyles} source={url} resizeMode='cover'/>;
};
