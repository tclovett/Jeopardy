# This section of the Three Mile Island nuclear power facility melted down in 1979.

## Design Goals

1. Conditional Rendering
  - The List and ListEntry components need to be used in one of two ways in order to render correctly
2. Children nesting their own parent
  - The List and ListEntry components need to nest one another in order to render correctly
3. A component depth of 4 or more
  - App --> List --> ListEntry --> List --> ListEntry
4. External API query
  - They must use http://jservice.io to retrieve categories and clues
5. Chained asynchrous calls
  - We can enforce, via testing, that they use a sequential series of calls to the API to ensure that they understand each step in the async chain and get a little callback practice
6. Lifecycle methods
  - CompononentDidMount should be used in App to query the quiz API