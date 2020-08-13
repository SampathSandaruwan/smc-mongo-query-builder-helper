declare class SMCQueryBuilderHelper {
    valueMatcher(filter: any, key: string, value: any): any;
    objectIdMatcher(filter: any, key: string, value: string): any;
    patternMatcher(filter: any, key: string, value: any): any;
    patternUnMatcher(filter: any, key: string, value: any): any;
    orOperator(filter: any, valuesArray: any[]): any;
    andOperator(filter: any, valuesArray: any[]): any;
    arrayElementMatcher(filter: any, key: string, valuesArray: any[]): any;
    numberPatternMatcher(filter: any, key: string, value: number | string): any;
}
declare const _default: SMCQueryBuilderHelper;
export default _default;
