# Aloud 🔊

## Description

Aloud is a simple tool to read aloud text. You can type or paste text into the text area, and click the "Speak" button to have it read aloud using your browser's text-to-speech capabilities.

## Installation

No installation is necessary for this project. To run it locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/isaaceliape/aloud.git
    cd aloud
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd aloud
    ```

## Running the project

1.  **Start the server:**

    You can start the server using `npm start` if you have Node.js and npm installed, or directly with `node server.js`.

    ```bash
    npm start
    ```

    or

    ```bash
    node server.js
    ```

2.  **Open in your browser:**

    Once the server is running, open your web browser and go to [http://localhost:8000](http://localhost:8000).

3.  **Start using Aloud:**

    - You will see a text area where you can type or paste the text you want to be read aloud.
    - Click the "Speak" button to have the text read aloud.

## Usage

You can directly input text into the text area on the webpage and click "Speak".

Additionally, you can pass text to be read aloud as a query parameter in the URL. For example, to have "Hello world" read aloud, you can open the following URL in your browser:

http://localhost:8000/?q=Hello%20world

This will automatically populate the text area with "Hello world" and start reading it aloud after a short delay.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

## Author

Isaac Eliape

## Bugs

If you encounter any bugs or issues, please report them on the [GitHub Issues page](https://github.com/isaaceliape/aloud/issues).

## Homepage

[https://github.com/isaaceliape/aloud#readme](https://github.com/isaaceliape/aloud#readme)
