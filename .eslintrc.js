module.exports = {
  env: {
    'es6': true,
    'node': true
  },
  // parserOptions: {
  //   ecmaVersion: '6',
  //   ecmaFeatures: {
  //     experimentalObjectRestSpread: true
  //   }
  // },
  rules: {
    // POSSIBLE-ERRORS
    // "for-direction": 1, //  - enforce “for” loop update clause moving the counter in the right direction.
    // "getter-return": 1, //  - enforce return statements in getters
    // "no-await-in-loop": 1, //  - disallow await inside of loops
    // "no-compare-neg-zero": 1, // recommended - disallow comparing against -0
    'no-cond-assign': 0, // recommended - disallow assignment operators in conditional expressions
    // "no-console": 1, // recommended - disallow the use of console
    // "no-constant-condition": 1, // recommended - disallow constant expressions in conditions
    // "no-control-regex": 1, // recommended - disallow control characters in regular expressions
    // "no-debugger": 1, // recommended:fixable - disallow the use of debugger
    // "no-dupe-args": 1, // recommended - disallow duplicate arguments in function definitions
    // "no-dupe-keys": 1, // recommended - disallow duplicate keys in object literals
    // "no-duplicate-case": 1, // recommended - disallow duplicate case labels
    // "no-empty": 1, // recommended - disallow empty block statements
    // "no-empty-character-class": 1, // recommended - disallow empty character classes in regular expressions
    // "no-ex-assign": 1, // recommended - disallow reassigning exceptions in catch clauses
    // "no-extra-boolean-cast": 1, // recommended:fixable - disallow unnecessary boolean casts
    // "no-extra-parens": 1, // fixable - disallow unnecessary parentheses
    // "no-extra-semi": 1, // recommended:fixable - disallow unnecessary semicolons
    // "no-func-assign": 1, // recommended - disallow reassigning function declarations
    // "no-inner-declarations": 1, // recommended - disallow variable or function declarations in nested blocks
    // "no-invalid-regexp": 1, // recommended - disallow invalid regular expression strings in RegExp constructors
    'no-irregular-whitespace': 1, // recommended - disallow irregular whitespace outside of strings and comments
    // "no-obj-calls": 1, // recommended - disallow calling global object properties as functions
    // "no-prototype-builtins": 1, //  - disallow calling some Object.prototype methods directly on objects
    // "no-regex-spaces": 1, // recommended:fixable - disallow multiple spaces in regular expressions
    // "no-sparse-arrays": 1, // recommended - disallow sparse arrays
    // "no-template-curly-in-string": 1, //  - disallow template literal placeholder syntax in regular strings
    'no-unexpected-multiline': 1, // recommended - disallow confusing multiline expressions
    // "no-unreachable": 1, // recommended - disallow unreachable code after return, throw, continue, and break statements
    // "no-unsafe-finally": 1, // recommended - disallow control flow statements in finally blocks
    // "no-unsafe-negation": 1, // recommended:fixable - disallow negating the left operand of relational operators
    // "use-isnan": 1, // recommended - require calls to isNaN() when checking for NaN
    // "valid-jsdoc": 1, //  - enforce valid JSDoc comments
    // "valid-typeof": 1, // recommended - enforce comparing typeof expressions against valid strings

    // BEST-PRACTICES
    // "accessor-pairs": 1, //  - enforce getter and setter pairs in objects
    // "array-callback-return": 1, //  - enforce return statements in callbacks of array methods
    // "block-scoped-var": 1, //  - enforce the use of variables within the scope they are defined
    // "class-methods-use-this": 1, //  - enforce that class methods utilize this
    // "complexity": 1, //  - enforce a maximum cyclomatic complexity allowed in a program
    // "consistent-return": 1, //  - require return statements to either always or never specify values
    'curly': [1, 'multi-line'], // fixable - enforce consistent brace style for all control statements
    // "default-case": 1, //  - require default cases in switch statements
    // "dot-location": 1, // fixable - enforce consistent newlines before and after dots
    // "dot-notation": 1, // fixable - enforce dot notation whenever possible
    // "eqeqeq": 1, // fixable - require the use of === and !==
    'guard-for-in': 1, //  - require for-in loops to include an if statement
    // "no-alert": 1, //  - disallow the use of alert, confirm, and prompt
    'no-caller': 1, //  - disallow the use of arguments.caller or arguments.callee
    // "no-case-declarations": 1, // recommended - disallow lexical declarations in case clauses
    // "no-div-regex": 1, //  - disallow division operators explicitly at the beginning of regular expressions
    // "no-else-return": 1, // fixable - disallow else blocks after return statements in if statements
    // "no-empty-function": 1, //  - disallow empty functions
    // "no-empty-pattern": 1, // recommended - disallow empty destructuring patterns
    // "no-eq-1": 1, //  - disallow 1 comparisons without type-checking operators
    // "no-eval": 1, //  - disallow the use of eval()
    'no-extend-native': 1, //  - disallow extending native types
    'no-extra-bind': 1, // fixable - disallow unnecessary calls to .bind()
    // "no-extra-label": 1, // fixable - disallow unnecessary labels
    // "no-fallthrough": 1, // recommended - disallow fallthrough of case statements
    // "no-floating-decimal": 1, // fixable - disallow leading or trailing decimal points in numeric literals
    // "no-global-assign": 1, // recommended - disallow assignments to native objects or read-only global variables
    // "no-implicit-coercion": 1, // fixable - disallow shorthand type conversions
    // "no-implicit-globals": 1, //  - disallow variable and function declarations in the global scope
    // "no-implied-eval": 1, //  - disallow the use of eval()-like methods
    // 'no-invalid-this': 1, //  - disallow this keywords outside of classes or class-like objects
    // "no-iterator": 1, //  - disallow the use of the __iterator__ property
    // "no-labels": 1, //  - disallow labeled statements
    // "no-lone-blocks": 1, //  - disallow unnecessary nested blocks
    // "no-loop-func": 1, //  - disallow function declarations and expressions inside loop statements
    // "no-magic-numbers": 1, //  - disallow magic numbers
    'no-multi-spaces': 1, // fixable - disallow multiple spaces
    'no-multi-str': 1, //  - disallow multiline strings
    // "no-new": 1, //  - disallow new operators outside of assignments or comparisons
    // "no-new-func": 1, //  - disallow new operators with the Function object
    'no-new-wrappers': 1, //  - disallow new operators with the String, Number, and Boolean objects
    // "no-octal": 1, // recommended - disallow octal literals
    // "no-octal-escape": 1, //  - disallow octal escape sequences in string literals
    // "no-param-reassign": 1, //  - disallow reassigning function parameters
    // "no-proto": 1, //  - disallow the use of the __proto__ property
    // "no-redeclare": 1, // recommended - disallow variable redeclaration
    // "no-restricted-properties": 1, //  - disallow certain properties on certain objects
    // "no-return-assign": 1, //  - disallow assignment operators in return statements
    // "no-return-await": 1, //  - disallow unnecessary return await
    // "no-script-url": 1, //  - disallow javascript: urls
    // "no-self-assign": 1, // recommended - disallow assignments where both sides are exactly the same
    // "no-self-compare": 1, //  - disallow comparisons where both sides are exactly the same
    // "no-sequences": 1, //  - disallow comma operators
    'no-throw-literal': 1, //  - disallow throwing literals as exceptions
    // "no-unmodified-loop-condition": 1, //  - disallow unmodified loop conditions
    // "no-unused-expressions": 1, //  - disallow unused expressions
    // "no-unused-labels": 1, // recommended:fixable - disallow unused labels
    // "no-useless-call": 1, //  - disallow unnecessary calls to .call() and .apply()
    // "no-useless-concat": 1, //  - disallow unnecessary concatenation of literals or template literals
    // "no-useless-escape": 1, // recommended - disallow unnecessary escape characters
    // "no-useless-return": 1, // fixable - disallow redundant return statements
    // "no-void": 1, //  - disallow void operators
    // "no-warning-comments": 1, //  - disallow specified warning terms in comments
    'no-with': 1, //  - disallow with statements
    // "prefer-promise-reject-errors": 1, //  - require using Error objects as Promise rejection reasons
    // "radix": 1, //  - enforce the consistent use of the radix argument when using parseInt()
    // "require-await": 1, //  - disallow async functions which have no await expression
    // "vars-on-top": 1, //  - require var declarations be placed at the top of their containing scope
    // "wrap-iife": 1, // fixable - require parentheses around immediate function invocations
    // "yoda": 1, // fixable - require or disallow “Yoda” conditions

    // STRICT-MODE
    // "strict": 1, // fixable - require or disallow strict mode directives

    // VARIABLES
    // "init-declarations": 1, //  - require or disallow initialization in variable declarations
    // "no-catch-shadow": 1, //  - disallow catch clause parameters from shadowing variables in the outer scope
    // "no-delete-var": 1, // recommended - disallow deleting variables
    // "no-label-var": 1, //  - disallow labels that share a name with a variable
    // "no-restricted-globals": 1, //  - disallow specified global variables
    // "no-shadow": 1, //  - disallow variable declarations from shadowing variables declared in the outer scope
    // "no-shadow-restricted-names": 1, //  - disallow identifiers from shadowing restricted names
    // "no-undef": 1, // recommended - disallow the use of undeclared variables unless mentioned in /*global */ comments
    // "no-undef-init": 1, // fixable - disallow initializing variables to undefined
    // "no-undefined": 1, //  - disallow the use of undefined as an identifier
    'no-unused-vars': [1, {args: 'none'}], // recommended - disallow unused variables
    // "no-use-before-define": 1, //  - disallow the use of variables before they are defined

    // NODEJS-AND-COMMONJS
    // "callback-return": 1, //  - require return statements after callbacks
    // "global-require": 1, //  - require require() calls to be placed at top-level module scope
    // "handle-callback-err": 1, //  - require error handling in callbacks
    // "no-buffer-constructor": 1, //  - disallow use of the Buffer() constructor
    // "no-mixed-requires": 1, //  - disallow require calls to be mixed with regular variable declarations
    // "no-new-require": 1, //  - disallow new operators with calls to require
    // "no-path-concat": 1, //  - disallow string concatenation with __dirname and __filename
    // "no-process-env": 1, //  - disallow the use of process.env
    // "no-process-exit": 1, //  - disallow the use of process.exit()
    // "no-restricted-modules": 1, //  - disallow specified modules when loaded by require
    // "no-sync": 1, //  - disallow synchronous methods

    // STYLISTIC-ISSUES
    'array-bracket-newline': 0, // fixable - enforce linebreaks after opening and before closing array brackets
    'array-bracket-spacing': [1, 'never'], // fixable - enforce consistent spacing inside array brackets
    'array-element-newline': 0, // fixable - enforce line breaks after each array element
    'block-spacing': [1, 'never'], // fixable - enforce consistent spacing inside single-line blocks
    'brace-style': 1, // fixable - enforce consistent brace style for blocks
    'camelcase': [1, {properties: 'never'}], //  - enforce camelcase naming convention
    // "capitalized-comments": 1, // fixable - enforce or disallow capitalization of the first letter of a comment
    'comma-dangle': 0, // fixable - require or disallow trailing commas
    'comma-spacing': 1, // fixable - enforce consistent spacing before and after commas
    'comma-style': 1, // fixable - enforce consistent comma style
    'computed-property-spacing': 1, // fixable - enforce consistent spacing inside computed property brackets
    // "consistent-this": 1, //  - enforce consistent naming when capturing the current execution context
    'eol-last': 1, // fixable - require or disallow newline at the end of files
    'func-call-spacing': 1, // fixable - require or disallow spacing between function identifiers and their invocations
    // "func-name-matching": 1, //  - require function names to match the name of the variable or property to which they are assigned
    // "func-names": 1, //  - require or disallow named function expressions
    // "func-style": 1, //  - enforce the consistent use of either function declarations or expressions
    // "function-paren-newline": 1, // fixable - enforce consistent line breaks inside function parentheses
    // "id-blacklist": 1, //  - disallow specified identifiers
    // "id-length": 1, //  - enforce minimum and maximum identifier lengths
    // "id-match": 1, //  - require identifiers to match a specified regular expression
    // "indent": 1, // fixable - enforce consistent indentation
    // "jsx-quotes": 1, // fixable - enforce the consistent use of either double or single quotes in JSX attributes
    'key-spacing': 1, // fixable - enforce consistent spacing between keys and values in object literal properties
    'keyword-spacing': 1, // fixable - enforce consistent spacing before and after keywords
    // "line-comment-position": 1, //  - enforce position of line comments
    'linebreak-style': 0, // fixable - enforce consistent linebreak style
    // "lines-around-comment": 1, // fixable - require empty lines around comments
    // "max-depth": 1, //  - enforce a maximum depth that blocks can be nested
    'max-len': ['warn', {code: 120, tabWidth: 2, ignoreUrls: true, ignoreComments: true}], //  - enforce a maximum line length
    // "max-lines": 1, //  - enforce a maximum number of lines per file
    // "max-nested-callbacks": 1, //  - enforce a maximum depth that callbacks can be nested
    // "max-params": 1, //  - enforce a maximum number of parameters in function definitions
    // "max-statements": 1, //  - enforce a maximum number of statements allowed in function blocks
    // "max-statements-per-line": 1, //  - enforce a maximum number of statements allowed per line
    // "multiline-ternary": 1, //  - enforce newlines between operands of ternary expressions
    'new-cap': 1, //  - require constructor names to begin with a capital letter
    // "new-parens": 1, // fixable - require parentheses when invoking a constructor with no arguments
    // "newline-per-chained-call": 1, // fixable - require a newline after each call in a method chain
    'no-array-constructor': 1, //  - disallow Array constructors
    // "no-bitwise": 1, //  - disallow bitwise operators
    // "no-continue": 1, //  - disallow continue statements
    // "no-inline-comments": 1, //  - disallow inline comments after code
    // "no-lonely-if": 1, // fixable - disallow if statements as the only statement in else blocks
    // "no-mixed-operators": 1, //  - disallow mixed binary operators
    'no-mixed-spaces-and-tabs': 1, // recommended - disallow mixed spaces and tabs for indentation
    // "no-multi-assign": 1, //  - disallow use of chained assignment expressions
    'no-multiple-empty-lines': [1, {max: 1}], // fixable - disallow multiple empty lines
    // "no-negated-condition": 1, //  - disallow negated conditions
    // "no-nested-ternary": 1, //  - disallow nested ternary expressions
    'no-new-object': 1, //  - disallow Object constructors
    // "no-plusplus": 1, //  - disallow the unary operators ++ and --
    // "no-restricted-syntax": 1, //  - disallow specified syntax
    'no-tabs': 1, //  - disallow all tabs
    // "no-ternary": 1, //  - disallow ternary operators
    'no-trailing-spaces': 1, // fixable - disallow trailing whitespace at the end of lines
    // "no-underscore-dangle": 1, //  - disallow dangling underscores in identifiers
    // "no-unneeded-ternary": 1, // fixable - disallow ternary operators when simpler alternatives exist
    // "no-whitespace-before-property": 1, // fixable - disallow whitespace before properties
    // "nonblock-statement-body-position": 1, // fixable - enforce the location of single-line statements
    // "object-curly-newline": 1, // fixable - enforce consistent line breaks inside braces
    'object-curly-spacing': 1, // fixable - enforce consistent spacing inside braces
    // "object-property-newline": 1, // fixable - enforce placing object properties on separate lines
    'one-var': [1, {var: 'never', let: 'never', const: 'never'}], //  - enforce variables to be declared either together or separately in functions
    // "one-var-declaration-per-line": 1, // fixable - require or disallow newlines around variable declarations
    // "operator-assignment": 1, // fixable - require or disallow assignment operator shorthand where possible
    // "operator-linebreak": 1, // fixable - enforce consistent linebreak style for operators
    'padded-blocks': [1, 'never'], // fixable - require or disallow padding within blocks
    // "padding-line-between-statements": 1, // fixable - require or disallow padding lines between statements
    'quote-props': [1, 'consistent'], // fixable - require quotes around object literal property names
    'quotes': [1, 'single', {allowTemplateLiterals: true}], // fixable - enforce the consistent use of either backticks, double, or single quotes
    // "require-jsdoc": 1, //  - require JSDoc comments
    'semi': 1, // fixable - require or disallow semicolons instead of ASI
    'semi-spacing': 1, // fixable - enforce consistent spacing before and after semicolons
    // "semi-style": 1, // fixable - enforce location of semicolons
    // "sort-keys": 1, //  - require object keys to be sorted
    // "sort-vars": 1, //  - require variables within the same declaration block to be sorted
    'space-before-blocks': 1, // fixable - enforce consistent spacing before blocks
    'space-before-function-paren': [ // fixable - enforce consistent spacing before function definition opening parenthesis
      1, {
        asyncArrow: 'always',
        anonymous: 'never',
        named: 'never'
      }
    ],
    // "space-in-parens": 1, // fixable - enforce consistent spacing inside parentheses
    // "space-infix-ops": 1, // fixable - require spacing around infix operators
    // "space-unary-ops": 1, // fixable - enforce consistent spacing before or after unary operators
    'spaced-comment': [1, 'always'], // fixable - enforce consistent spacing after the // or /* in a comment
    'switch-colon-spacing': 1, // fixable - enforce spacing around colons of switch statements
    // "template-tag-spacing": 1, // fixable - require or disallow spacing between template tags and their literals
    // "unicode-bom": 1, // fixable - require or disallow Unicode byte order mark (BOM)
    // "wrap-regex": 1, // fixable - require parenthesis around regex literals

    // ECMASCRIPT-6
    // "arrow-body-style": 1, // fixable - require braces around arrow function bodies
    'arrow-parens': 0, // fixable - require parentheses around arrow function arguments
    // "arrow-spacing": 1, // fixable - enforce consistent spacing before and after the arrow in arrow functions
    'constructor-super': 1, // recommended - require super() calls in constructors
    'generator-star-spacing': [1, 'after'], // fixable - enforce consistent spacing around * operators in generator functions
    // "no-class-assign": 1, // recommended - disallow reassigning class members
    // "no-confusing-arrow": 1, // fixable - disallow arrow functions where they could be confused with comparisons
    // "no-const-assign": 1, // recommended - disallow reassigning const variables
    // "no-dupe-class-members": 1, // recommended - disallow duplicate class members
    // "no-duplicate-imports": 1, //  - disallow duplicate module imports
    'no-new-symbol': 1, // recommended - disallow new operators with the Symbol object
    // "no-restricted-imports": 1, //  - disallow specified modules when loaded by import
    'no-this-before-super': 1, // recommended - disallow this/super before calling super() in constructors
    // "no-useless-computed-key": 1, // fixable - disallow unnecessary computed property keys in object literals
    // "no-useless-constructor": 1, //  - disallow unnecessary constructors
    // "no-useless-rename": 1, // fixable - disallow renaming import, export, and destructured assignments to the same name
    'no-var': 0, // fixable - require let or const instead of var
    // "object-shorthand": 1, // fixable - require or disallow method and property shorthand syntax for object literals
    // "prefer-arrow-callback": 1, // fixable - require using arrow functions for callbacks
    // "prefer-const": 1, // fixable - require const declarations for variables that are never reassigned after declared
    // "prefer-destructuring": 1, //  - require destructuring from arrays and/or objects
    // "prefer-numeric-literals": 1, // fixable - disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-rest-params': 1, //  - require rest parameters instead of arguments
    'prefer-spread': 1, // fixable - require spread operators instead of .apply()
    // "prefer-template": 1, // fixable - require template literals instead of string concatenation
    // "require-yield": 1, // recommended - require generator functions to contain yield
    'rest-spread-spacing': 1, // fixable - enforce spacing between rest and spread operators and their expressions
    // "sort-imports": 1, // fixable - enforce sorted import declarations within modules
    // "symbol-description": 1, //  - require symbol descriptions
    // "template-curly-spacing": 1, // fixable - require or disallow spacing around embedded expressions of template strings
    'yield-star-spacing': [1, 'after'], // fixable - require or disallow spacing around the * in yield* expressions
  }
};
