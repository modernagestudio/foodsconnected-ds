export declare const stitchesThemeMap: {
    width: string;
    height: string;
    spaceX: string;
    spaceY: string;
    gap: "space";
    gridGap: "space";
    columnGap: "space";
    gridColumnGap: "space";
    rowGap: "space";
    gridRowGap: "space";
    inset: "space";
    insetBlock: "space";
    insetBlockEnd: "space";
    insetBlockStart: "space";
    insetInline: "space";
    insetInlineEnd: "space";
    insetInlineStart: "space";
    margin: "space";
    marginTop: "space";
    marginRight: "space";
    marginBottom: "space";
    marginLeft: "space";
    marginBlock: "space";
    marginBlockEnd: "space";
    marginBlockStart: "space";
    marginInline: "space";
    marginInlineEnd: "space";
    marginInlineStart: "space";
    padding: "space";
    paddingTop: "space";
    paddingRight: "space";
    paddingBottom: "space";
    paddingLeft: "space";
    paddingBlock: "space";
    paddingBlockEnd: "space";
    paddingBlockStart: "space";
    paddingInline: "space";
    paddingInlineEnd: "space";
    paddingInlineStart: "space";
    scrollMargin: "space";
    scrollMarginTop: "space";
    scrollMarginRight: "space";
    scrollMarginBottom: "space";
    scrollMarginLeft: "space";
    scrollMarginBlock: "space";
    scrollMarginBlockEnd: "space";
    scrollMarginBlockStart: "space";
    scrollMarginInline: "space";
    scrollMarginInlineEnd: "space";
    scrollMarginInlineStart: "space";
    scrollPadding: "space";
    scrollPaddingTop: "space";
    scrollPaddingRight: "space";
    scrollPaddingBottom: "space";
    scrollPaddingLeft: "space";
    scrollPaddingBlock: "space";
    scrollPaddingBlockEnd: "space";
    scrollPaddingBlockStart: "space";
    scrollPaddingInline: "space";
    scrollPaddingInlineEnd: "space";
    scrollPaddingInlineStart: "space";
    top: "space";
    right: "space";
    bottom: "space";
    left: "space";
    fontSize: "fontSizes";
    background: "colors";
    backgroundColor: "colors";
    backgroundImage: "colors";
    borderImage: "colors";
    border: "colors";
    borderBlock: "colors";
    borderBlockEnd: "colors";
    borderBlockStart: "colors";
    borderBottom: "colors";
    borderBottomColor: "colors";
    borderColor: "colors";
    borderInline: "colors";
    borderInlineEnd: "colors";
    borderInlineStart: "colors";
    borderLeft: "colors";
    borderLeftColor: "colors";
    borderRight: "colors";
    borderRightColor: "colors";
    borderTop: "colors";
    borderTopColor: "colors";
    caretColor: "colors";
    color: "colors";
    columnRuleColor: "colors";
    outline: "colors";
    outlineColor: "colors";
    fill: "colors";
    stroke: "colors";
    textDecorationColor: "colors";
    fontFamily: "fonts";
    fontWeight: "fontWeights";
    lineHeight: "lineHeights";
    letterSpacing: "letterSpacings";
    blockSize: "sizes";
    minBlockSize: "sizes";
    maxBlockSize: "sizes";
    inlineSize: "sizes";
    minInlineSize: "sizes";
    maxInlineSize: "sizes";
    minWidth: "sizes";
    maxWidth: "sizes";
    minHeight: "sizes";
    maxHeight: "sizes";
    flexBasis: "sizes";
    gridTemplateColumns: "sizes";
    gridTemplateRows: "sizes";
    borderWidth: "borderWidths";
    borderTopWidth: "borderWidths";
    borderLeftWidth: "borderWidths";
    borderRightWidth: "borderWidths";
    borderBottomWidth: "borderWidths";
    borderStyle: "borderStyles";
    borderTopStyle: "borderStyles";
    borderLeftStyle: "borderStyles";
    borderRightStyle: "borderStyles";
    borderBottomStyle: "borderStyles";
    borderRadius: "radii";
    borderTopLeftRadius: "radii";
    borderTopRightRadius: "radii";
    borderBottomRightRadius: "radii";
    borderBottomLeftRadius: "radii";
    boxShadow: "shadows";
    textShadow: "shadows";
    transition: "transitions";
    zIndex: "zIndices";
};
declare type TypeStyles = "hero" | "headline" | "title1" | "title2" | "title3" | "heading" | "subhead" | "body" | "footnote" | "caption" | "micro";
export declare const stitchesUtils: {
    mx: (value: string | number) => {
        marginLeft: string | number;
        marginRight: string | number;
    };
    my: (value: string | number) => {
        marginTop: string | number;
        marginBottom: string | number;
    };
    px: (value: string | number) => {
        paddingLeft: string | number;
        paddingRight: string | number;
    };
    py: (value: string | number) => {
        paddingTop: string | number;
        paddingBottom: string | number;
    };
    size: (value: string | number) => {
        width: string | number;
        height: string | number;
    };
    spaceY: (value: string | number) => {
        "& > :not([hidden]) ~ :not([hidden])": {
            marginTop: string | number;
        };
    };
    spaceX: (value: string | number) => {
        "& > :not([hidden]) ~ :not([hidden])": {
            marginLeft: string | number;
        };
    };
    typeStyle: (styleName: TypeStyles) => {
        fontSize: string;
        fontWeight: string;
        fontFamily: string;
        lineHeight: string;
        letterSpacing: string;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
        letterSpacing: string;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        letterSpacing: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
    } | {
        fontSize: string;
        fontFamily: string;
        fontWeight?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    } | {
        fontSize?: undefined;
        fontWeight?: undefined;
        fontFamily?: undefined;
        lineHeight?: undefined;
        letterSpacing?: undefined;
    };
};
export declare const stitchesTheme: {
    fonts: {
        display: string;
        text: string;
    };
    fontWeights: {
        standard: number;
        heavy: number;
    };
    letterSpacings: {
        tightest: string;
        tighter: string;
        tight: string;
        normal: number;
        wide: string;
        wider: string;
        widest: string;
    };
    radii: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    fontSizes: {
        "-3": string;
        "-2": string;
        "-1": string;
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
    };
    space: {
        "5xs": string;
        "4xs": string;
        "3xs": string;
        "2xs": string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
        "5xs-4xs": string;
        "4xs-3xs": string;
        "3xs-2xs": string;
        "2xs-xs": string;
        "xs-s": string;
        "s-m": string;
        "m-l": string;
        "l-xl": string;
        "xl-2xl": string;
        "2xl-3xl": string;
        "3xl-4xl": string;
        "4xl-5xl": string;
        "5xl-6xl": string;
        "05": string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    sizes: {
        micro: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        max: string;
    };
    shadows: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    colors: {
        neutral100: string;
        neutral200: string;
        neutral300: string;
        neutral400: string;
        neutral500: string;
        neutral600: string;
        neutral700: string;
        neutral800: string;
        neutral900: string;
        midnight100: string;
        midnight300: string;
        midnight500: string;
        midnight700: string;
        midnight900: string;
        accentOrangeDark: string;
        accentPink: string;
        accentPurple: string;
        accentNavy: string;
        accentRoyal: string;
        accentCyan: string;
        accentLime: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        teal5: string;
        teal6: string;
        teal7: string;
        teal8: string;
        teal9: string;
        teal10: string;
        teal11: string;
        teal12: string;
        sky1: string;
        sky2: string;
        sky3: string;
        sky4: string;
        sky5: string;
        sky6: string;
        sky7: string;
        sky8: string;
        sky9: string;
        sky10: string;
        sky11: string;
        sky12: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        indigo1: string;
        indigo2: string;
        indigo3: string;
        indigo4: string;
        indigo5: string;
        indigo6: string;
        indigo7: string;
        indigo8: string;
        indigo9: string;
        indigo10: string;
        indigo11: string;
        indigo12: string;
        plum1: string;
        plum2: string;
        plum3: string;
        plum4: string;
        plum5: string;
        plum6: string;
        plum7: string;
        plum8: string;
        plum9: string;
        plum10: string;
        plum11: string;
        plum12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        amber1: string;
        amber2: string;
        amber3: string;
        amber4: string;
        amber5: string;
        amber6: string;
        amber7: string;
        amber8: string;
        amber9: string;
        amber10: string;
        amber11: string;
        amber12: string;
        accentAmber: string;
        accentOrange: string;
        accentRed: string;
        accentPlum: string;
        accentBlue: string;
        accentSky: string;
        accentTeal: string;
        accentGreen: string;
        slateA1: string;
        slateA2: string;
        slateA3: string;
        slateA4: string;
        slateA5: string;
        slateA6: string;
        slateA7: string;
        slateA8: string;
        slateA9: string;
        slateA10: string;
        slateA11: string;
        slateA12: string;
        slate1: string;
        slate2: string;
        slate3: string;
        slate4: string;
        slate5: string;
        slate6: string;
        slate7: string;
        slate8: string;
        slate9: string;
        slate10: string;
        slate11: string;
        slate12: string;
        primaryBrand: string;
        primaryMidnight: string;
        white: string;
        black: string;
    };
    lineHeights: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
    };
};
export declare const stitchesMedia: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xs1: string;
    xs2: string;
    xs3: string;
    sm1: string;
    sm2: string;
    sm3: string;
    md1: string;
    md2: string;
    md3: string;
    lg1: string;
    lg2: string;
    lg3: string;
    xl1: string;
    xl2: string;
    xl3: string;
};
export declare const stitchesDarkColors: {
    colors: {
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        teal5: string;
        teal6: string;
        teal7: string;
        teal8: string;
        teal9: string;
        teal10: string;
        teal11: string;
        teal12: string;
        sky1: string;
        sky2: string;
        sky3: string;
        sky4: string;
        sky5: string;
        sky6: string;
        sky7: string;
        sky8: string;
        sky9: string;
        sky10: string;
        sky11: string;
        sky12: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        indigo1: string;
        indigo2: string;
        indigo3: string;
        indigo4: string;
        indigo5: string;
        indigo6: string;
        indigo7: string;
        indigo8: string;
        indigo9: string;
        indigo10: string;
        indigo11: string;
        indigo12: string;
        plum1: string;
        plum2: string;
        plum3: string;
        plum4: string;
        plum5: string;
        plum6: string;
        plum7: string;
        plum8: string;
        plum9: string;
        plum10: string;
        plum11: string;
        plum12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        amber1: string;
        amber2: string;
        amber3: string;
        amber4: string;
        amber5: string;
        amber6: string;
        amber7: string;
        amber8: string;
        amber9: string;
        amber10: string;
        amber11: string;
        amber12: string;
        slateA1: string;
        slateA2: string;
        slateA3: string;
        slateA4: string;
        slateA5: string;
        slateA6: string;
        slateA7: string;
        slateA8: string;
        slateA9: string;
        slateA10: string;
        slateA11: string;
        slateA12: string;
        slate1: string;
        slate2: string;
        slate3: string;
        slate4: string;
        slate5: string;
        slate6: string;
        slate7: string;
        slate8: string;
        slate9: string;
        slate10: string;
        slate11: string;
        slate12: string;
        white: string;
        black: string;
    };
};
export {};
