 Okra-Icons
====

This package provides the Okra-icons packaged as a set of [React](https://facebook.github.io/react/) components.

## Installation

Install the package in your project directory with:

```sh
// with npm
npm install okra-icons

// with yarn
yarn add okra-icons
```

These components uses React to render the SVG path for each icon, and so a have a peer-dependency on the release of React.

## Component Usage

You can use path imports to avoid pulling in unused modules. For instance, use:

```jsx
    // 🚀 Fast
    import AccountIcon from 'okra-icons/svg/AccountIcon';
    import TeamIcon from 'okra-icons/svg/TeamIcon';
```

instead of top level imports:

```jsx
    import { AccountIcon } from 'okra-icons/svg';
```

```jsx
    <AccountIcon
        style = {}
        fill = "red"
        width = "25.222" 
        height = "23.013" 
        className = "" 
        viewBox = "0 0 25.222 23.013"
    />
```

## Documentation

- [The documentation](https://docs.okra.ng/)
- [The icons search]