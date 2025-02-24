# :star: Clean Code
Clean code in JS follows principles that make the code readable, maintainable, and scalable.


## :speech_balloon: Comments & Statements :page_with_curl:
- handle errors (use `try...catch`)
- descripe magic numbers (use constant)
- handle deep nesting (use recursive function)
- minimize API calls (cache frequently used data)
- make code formatted well & avoid typos (use extensions to help)
- avoid code repetation & large size/line-length (DRY & use JS Features)
- avoid large functions (separate features & use objects for parameters list)
- code must speak about itself (stop writing too many comments and use white space strategically)
- make a secured & free of errors/bugs production version
  - validate user inputs
  - remove `console.log()`
  - debugging & unit-testing
  - install development third parties as devDependencies
  - secure sensitive data (use `.env` files for API keys, database user's password, ...)


## :package: Variables
- avoid one-letter variable identifier (except `i`/`j` for counter/indecies)
- use meaningful names, consistent verbs & concise identifiers
- make boolean vairables be read well in `if` (use `is`/`has` as a pre)
- naming conventions:
  - `PascalCase` for classes
  - `camelCase` for variable, objects, functions, ...
  - `SNAKE_UPPER_CASE` for identifing fixed/constant values (called also `SCREAMING_SNAKE_CASE`)


## :link: Helpful Links
- [JSM Video](https://youtu.be/RMN_bkZ1KM0?si=VgzOLSuk2d8rgW9A)
- [The Modern JavaScript Tutorial: Code Quality](https://javascript.info/code-quality)