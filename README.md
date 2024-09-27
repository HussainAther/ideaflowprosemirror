### Draft.js Autocomplete for Ideaflow

## Overview

This project is a custom implementation of an autocomplete component using Draft.js, designed to meet the specific needs of Ideaflow. It provides seamless integration of autocomplete functionalities for hashtags, mentions, and relations within a text editor. The component is built from scratch to ensure robustness and flexibility, avoiding known issues associated with off-the-shelf solutions.

## Features

- **Dynamic Autocomplete for Special Characters:**
  - `#` for hashtags (e.g., `#IdeaFlow`).
  - `@` for mentions (e.g., `@JohnDoe`).
  - `<>` for relations (e.g., `<relatedTopic>`).
- **Customizable Suggestions List:**
  - Displays a dynamically updating list of suggestions based on the user's input.
  - Suggestions can be navigated using arrow keys and selected with `Enter` or `Tab`.
- **Enhanced Text Entry:**
  - Allows seamless editing of text with integrated autocomplete features.
  - Autocompleted entries are styled differently and are non-editable, ensuring clarity and ease of use.

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/YourRepository/ideaflow-autocomplete.git
cd ideaflow-autocomplete
yarn install
```

## Usage

Include the autocomplete component in your project as follows:

1. **Import the Component:**
   ```javascript
   import React, { Component } from 'react';
   import { EditorState } from 'draft-js';
   import Autocomplete from 'draft-js-autocomplete';

   import hashtag from './autocompletes/hashtag';
   import mention from './autocompletes/mention';
   import relation from './autocompletes/relation';
   ```

2. **Initialize the Component:**
   ```javascript
   class App extends Component {
     constructor(props) {
       super(props);
       this.state = {
         editorState: EditorState.createEmpty()
       };
     }

     onChange = (editorState) => {
       this.setState({ editorState });
     };

     render() {
       const autocompletes = [hashtag, mention, relation];
       return (
         <Autocomplete editorState={this.state.editorState} onChange={this.onChange} autocompletes={autocompletes}>
           <Editor />
         </Autocomplete>
       );
     }
   }

   export default App;
   ```

3. **Customize Autocomplete Suggestions:**
   - Update the `hashtag`, `mention`, and `relation` files with your desired suggestions and formatting logic. These files define the behavior and presentation of the autocomplete entries.

## Development

### Build

To build the project, run:

```bash
yarn build
```

This will generate the output files in the `dist` directory.

### Test

To run the test suite:

```bash
yarn test
```

This project uses Jest and Enzyme for testing. You can add new tests in the `__tests__` directory to cover additional functionalities.

## Deployment

This project is optimized for deployment on platforms like Vercel. Ensure that the `NODE_OPTIONS=--openssl-legacy-provider` environment variable is set to avoid OpenSSL-related issues.

### Vercel Configuration

1. **Build Command:**
   ```bash
   npm run build
   ```

2. **Output Directory:**
   Set the output directory to `dist` in the Vercel project settings.

## Project Background

This project was developed to support the Ideaflow platform, a tool designed to enhance human cognition and collaboration by seamlessly integrating structured ideation processes. It draws inspiration from concepts such as the Zettelkasten method, the Semantic Web, and the Giant Global Graph, aiming to provide an interface that supports collaborative research and knowledge sharing.

## Contributing

Contributions are welcome! If you have ideas for new features or improvements, please submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.

## Contact

For more information, visit the [Ideaflow Background](https://ideaflowbackground.jacobcole.net) or [Systematic Awesome](https://systematicawesome.jacobcole.net) pages.

