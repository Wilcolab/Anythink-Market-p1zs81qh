# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to be lightweight and serves as a starting point for building more complex applications.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── Dockerfile            # Docker configuration file
├── package.json          # NPM configuration file
├── yarn.lock             # Dependency lock file
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use:
```
yarn start
```

The server will listen on `http://localhost:8001`.

### Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.