import React, { Component } from 'react';
import { View, ViewPropTypes, Text, StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { Cell } from './cell';
import { sum } from '../utils';


interface ColProps {
  style: StyleProp<ViewStyle>,
  width: number,
  textStyle: StyleProp<TextStyle>,
  data: string,
}

export function Col(props: ColProps) {

  const { data, style, width, heightArr, flex, textStyle, ...rest } = props;

  if (data) {
    return <View style={[width ? { width: width } : { flex: 1 }, flex && { flex: flex }, style]}>
      {data.map((item: string, i: string | number | undefined) => {
        const height = heightArr && heightArr[i];
        return <Cell key={i} data={item} width={width} height={height} textStyle={textStyle} {...rest} />;
      })}
    </View>
  } else {
    return null
  }

}

export class Cols extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    textStyle: Text.propTypes.style
  };

  render() {
    const { data, style, widthArr, heightArr, flexArr, textStyle, ...props } = this.props;
    let width = widthArr ? sum(widthArr) : 0;

    return data ? (
      <View style={[styles.cols, width && { width }]}>
        {data.map((item, i) => {
          const flex = flexArr && flexArr[i];
          const wth = widthArr && widthArr[i];
          return (
            <Col
              key={i}
              data={item}
              width={wth}
              heightArr={heightArr}
              flex={flex}
              style={style}
              textStyle={textStyle}
              {...props}
            />
          );
        })}
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  cols: { flexDirection: 'row' }
});
