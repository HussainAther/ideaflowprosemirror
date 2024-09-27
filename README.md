# IdeaFlow Prosemirror Autocomplete

## Project Overview
This project is a full-stack implementation of an autocomplete feature using Draft.js for a rich text editor. The editor is configured to handle autocompletion for mentions (`@`), hashtags (`#`), and relations (`<>`). The goal is to create a seamless, bug-free user experience with multiple concurrent autocompletion processes.

## Project Structure

### Root Directory:
- **Project Configuration:**
  - `.gitignore`, `package.json`, `webpack.config.js`, `yarn.lock` - Configuration and dependency management files.
  - `README.md`, `LICENSE.md`, `CHANGELOG.md` - Documentation and licensing information.
  - `.git` - Contains the Git repository data and history.

### Source Directory (`src`):
- **`index.js`**: Main entry point for the application, setting up the core functionality and components.
- **`utils.js`**: Contains utility functions to support the main logic, such as handling regex matches, autocomplete suggestions, and editor state manipulation.
- **`__tests__`**: Unit tests for the core functionality in `index.js` and `utils.js`.

### Example Directory (`example`):
- **`App.js`**: Demonstrates how to use the `Autocomplete` component within a Draft.js editor.
- **`autocompletes`**:
  - `hashtag.js` and `mention.js` - Configuration files defining autocomplete behavior for hashtags and mentions.
  - `hashtag.css` and `mention.css` - CSS styles for the autocomplete dropdowns and entries.
- **`public`**: Contains HTML (`index.html`) and assets (`favicon.ico`, `manifest.json`) required for the example application.

## Setup and Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the Project Directory and Install Dependencies:**
   ```bash
   cd ideaflowprosemirror
   yarn install
   ```
3. **Navigate to the Example Directory and Install Dependencies:**
   ```bash
   cd example
   yarn install
   ```
4. **Run the Example Application:**
   ```bash
   yarn start
   ```

## Usage

- The main functionality is demonstrated in the `example` directory.
- Open `example/src/App.js` to see how the `Autocomplete` component is integrated with the Draft.js editor.
- The example app showcases the autocomplete features for hashtags (`#`) and mentions (`@`).

## Autocomplete Configuration

- **Mentions (`@`)**: Handled by `mention.js` in the `autocompletes` directory.
- **Hashtags (`#`)**: Handled by `hashtag.js` in the `autocompletes` directory.
- **Styles**: Configurable in `mention.css` and `hashtag.css` files for custom styling of the autocomplete dropdown and entries.

## Testing

- Unit tests are available in the `src/__tests__` directory.
- To run tests, use the following command:
  ```bash
  yarn test
  ```

## Deployment

1. **Build the Project:**
   ```bash
   yarn build
   ```
2. **Deploy the `build` Directory** to your preferred hosting platform (e.g., Netlify, Vercel, or any static site hosting service).

## License

This project is licensed under the terms of the MIT license. See the `LICENSE.md` file for more details.

## Contact

For any queries or issues, please contact the project maintainers or open an issue in the GitHub repository.

## Notes

- Ensure all external libraries and code sources are properly cited.
- The autocomplete functionality is designed to be seamless and user-friendly, focusing on handling multiple concurrent autocomplete processes without bugs.


