# @codewell/target-value

## Installation

```
npm install @codewell/target-value
```

## Basic Usage

```JavaScript
import targetValue from '@codewell/target-value';

const eventHandler = (inputValue) => {
  // Do something with the input value
  // from the input element
}

const sayHello = (inputValue, hello, there) => {
  console.log(hello, there, inputValue)
}

const SomeComponent = () => (
  <>
    <input onChange={targetValue(eventHandler)} />
    <input onChange={targetValue(sayHello, "hello", "there")} />
  </>
);
```
