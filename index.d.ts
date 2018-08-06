/**
 * typescript definition
 * @author wallel
 */

declare module 'react-native-root-toast' {
    import * as React from 'react';
    import { StyleProp, TextStyle, ViewStyle } from 'react-native';
    export interface ToastOptions {
        containerStyle?: StyleProp<ViewStyle>;
        duration?: number;
        visible?: boolean;
        position?: number;
        animation?: boolean;
        shadow?: boolean;
        backgroundColor?: string;
        opacity?: number;
        shadowColor?: string;
        textColor?: string;
        textStyle?: StyleProp<TextStyle>;
        delay?: number;
        hideOnPress?: boolean;
        onHide?: Function;
        onHidden?: Function;
        onShow?: Function;
        onShown?: Function;
    }

    export interface ToastProps extends ToastOptions {}

    export interface Durations {
        LONG: number;
        SHORT: number;
    }
    export interface Positions {
        TOP: number;
        BOTTOM: number;
        CENTER: number;
    }
    export default class Toast extends React.Component<ToastProps> {
        static show: (message: string, options: ToastOptions) => any;
        static hide: (toast: any) => void;
        static durations: Durations;
        static positions: Positions;
    }
}
