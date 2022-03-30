import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {
        color: {
            backgrounds: {
                main: string;
                toggle: string;
                screen: string;
            };
            keys: {
                delResetKeyBackground: string;
                delResetKeyShadow: string;

                equalKeyBackground: string;
                equalKeyShadow: string;

                normalKeyBackground: string;
                normalKeyShadow: string;
            };
            text: {
                headerColor: string,
                primaryColor: string;
                resultColor: string;
                terciaryColor:string;
                equalColor: string;
            };
        }; 
    }
}