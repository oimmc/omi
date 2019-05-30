webpackJsonp([43],{81:function(n,r){n.exports="## Typography \r\n\r\nMaterial Design\u2019s text sizes and styles were developed to balance content density and reading comfort under typical usage conditions.\r\n\r\nMDC Typography is a foundational module that applies these styles to MDC Web components. The typographic styles in this module are derived from thirteen styles:\r\n\r\n* Headline 1\r\n* Headline 2\r\n* Headline 3\r\n* Headline 4\r\n* Headline 5\r\n* Headline 6\r\n* Subtitle 1\r\n* Subtitle 2\r\n* Body 1\r\n* Body 2\r\n* Caption\r\n* Button\r\n* Overline\r\n\r\n## Usage\r\n\r\n```js\r\nimport * as css from '@omim/core/typography'\r\n\r\nconsole.log(css)\r\n```\r\n\r\nOutput:\r\n\r\n```css\r\n.mdc-typography {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased; \r\n}\r\n\r\n.mdc-typography--headline1 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 6rem;\r\n  line-height: 6rem;\r\n  font-weight: 300;\r\n  letter-spacing: -0.01562em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline2 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 3.75rem;\r\n  line-height: 3.75rem;\r\n  font-weight: 300;\r\n  letter-spacing: -0.00833em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline3 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 3rem;\r\n  line-height: 3.125rem;\r\n  font-weight: 400;\r\n  letter-spacing: normal;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline4 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 2.125rem;\r\n  line-height: 2.5rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.00735em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline5 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 1.5rem;\r\n  line-height: 2rem;\r\n  font-weight: 400;\r\n  letter-spacing: normal;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--headline6 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 1.25rem;\r\n  line-height: 2rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.0125em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--subtitle1 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 1rem;\r\n  line-height: 1.75rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.00937em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--subtitle2 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.875rem;\r\n  line-height: 1.375rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.00714em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--body1 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 1rem;\r\n  line-height: 1.5rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.03125em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--body2 {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.875rem;\r\n  line-height: 1.25rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.01786em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--caption {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.75rem;\r\n  line-height: 1.25rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0.03333em;\r\n  text-decoration: inherit;\r\n  text-transform: inherit; \r\n}\r\n\r\n.mdc-typography--button {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.875rem;\r\n  line-height: 2.25rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.08929em;\r\n  text-decoration: none;\r\n  text-transform: uppercase; \r\n}\r\n\r\n.mdc-typography--overline {\r\n  font-family: Roboto, sans-serif;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-font-smoothing: antialiased;\r\n  font-size: 0.75rem;\r\n  line-height: 2rem;\r\n  font-weight: 500;\r\n  letter-spacing: 0.16667em;\r\n  text-decoration: none;\r\n  text-transform: uppercase; \r\n}\r\n```"}});
//# sourceMappingURL=43.f4277089.chunk.js.map