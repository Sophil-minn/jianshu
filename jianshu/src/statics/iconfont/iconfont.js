import { createGlobalStyle } from 'styled-components';
export const GlobalIconFont = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1575611730494');
    /* IE9 */
    src: url('./iconfont.eot?t=1575611730494#iefix') format('embedded-opentype'),
      /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPMAAsAAAAAB8wAAAN9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDCIJuATYCJAMQCwoABCAFhG0HSBvgBsgeCXZMywojXbwzGcSm3vOkY09daGfqycQikJI4YeKiIUh29zzDRDat2oRMaCZIgSZGLSkKIOB/Dpc2xee3LJc5Jke9AOOtgY09QAIukBP0Ww5nXoVH12YgACZdYWSp27g1BDzSiwDIqdrNEFIKfE06ISBCSiYm8sBAKG7uLIAJ/u/Jj5IF4BhKZGDzvY4N1T/xeVk6MDgQHV0EmOPpAIjTAAooDOCBHKUGCxoGCqOY3pxXFiAQcDBWXdzzssEgZu1FINB/eQBBcUBqJDUUAJTGQQrPRZsMBJ7H8VEmLAsp4AB4IRMEQE5AALAaRJI6zuI8ru+zaUYxYrJev268ccN07Vqbq1c7M17rgJZ82PXrvYyF2kSwNbQ1c4rt2k9PZ3MT25r3iGMAFt3LRp8ng0ymQf6BldtsXYmBq8QxRwjZTPZipkGDmHH6VLQebG1m5nYPWHo6Ob7D7BR7gmnOmh3b8rTZda3whdxL6O3b1IleevvWEn4pDwPoUrrk9u2lD6fREye4aZQKWdPodHr8BJ0GVPjMGGvJ27va3t6Jg0q9S/lrX5LDg5Za1x1Vm7XhalrUqjf4P1UD+rHyxYhhLuotYFTDOomNqld82tmkn0mK+5Oc51OedPwLne/jDowp3Z5wcTVF5PDZMUkvHoza0uDOHP/21D4JiWL8luSXDUq1X/TD0S1pRJO6cU3rwAcAglfpVlrYxwfpQYrQINqO9vt1f4OPh5bn7xJR+ZsgJgC4HRneEmzBQTzaCfH+ma2ZP4rZMo832ETJp8axGaaRVzzRCxyAYYDfEwGi3R9DFNc6FSAEcTFwckgDSpAbyWMLg4GoNIQQVAOmkHrTRTE0FMkWUNAwBESkDcAJdwCoSOeQPPYeGMR7ByEiU2CMEbOgKG+V1dJksy7bJEsvSbV6PQpT6yxIbynbu7nMWpLt44yyFlDdUomixbPherJH1sYYEuhuL6nriqRoXrdUF20nu1xeyad5HbJVL5qt676KxYopZW8qavW6wdSikZnpZDYSi14kKisvD8UtrmO577cks+vGxUyryalTGsk0AWrjkhKKKt4CWU/gaZVzLdcEdGdXkk6nkCg0Xm6Sukgnc9GAl8RX3s5BZqUrKruHz6eiYriQ0lZQdH6R+wmXADBkET6KKCOjwnazx24zO1TXztUwh95CiyLWbNnqVD0AAAAA') format('woff2'),
      url('./iconfont.woff?t=1575611730494') format('woff'),
      url('./iconfont.ttf?t=1575611730494') format('truetype'),
      /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('./iconfont.svg?t=1575611730494#iconfont') format('svg');
    /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`