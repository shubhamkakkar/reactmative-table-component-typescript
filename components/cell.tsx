import React from 'react';
import { StyleSheet, Text, View, ViewStyle, StyleProp, TextStyle } from 'react-native';

type TBorderStyle = {
    borderWidth: number | 1,
    borderColor: string | "#000"
}

interface CellProps {
    style: StyleProp<ViewStyle>,
    textStyle: StyleProp<TextStyle>,
    borderStyle: TBorderStyle,
    data: string,
    width: number,
    height: number,
    flex: string
};

export function Cell(props: CellProps) {
    const { data, width, height, flex, style, textStyle, borderStyle, ...rest } = props;
    const textDom = React.isValidElement(data) ? (
        data
    ) : (
            <Text style={[textStyle, styles.text]} {...rest}>
                {data}
            </Text>
        );
    const { borderWidth: borderRightWidth, borderColor } = borderStyle;


    return (
        <View
            style={[
                {
                    borderTopWidth: borderRightWidth,
                    borderRightWidth,
                    borderColor
                },
                styles.cell,
                width && { width },
                height && { height },
                flex && { flex },
                !width && !flex && !height && !style && { flex: 1 },
                style
            ]}
        >
            {textDom}
        </View>
    );

}


const styles = StyleSheet.create({
    cell: { justifyContent: 'center' },
    text: { backgroundColor: 'transparent' }
});
