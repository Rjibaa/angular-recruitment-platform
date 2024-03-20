# Angular Recruitment Platform

This repository contains the code for an Angular application designed for managing a recruitment platform. It includes components and directives for creating CV previews, simulating rainbow writing, managing recruitment alerts using ngx-toaster, and fetching data from a provided API.

## Components

### CardPreviewComponent

- Allows users to preview a business card.
- Contains inputs for entering card data.
- Dynamically updates the card view as data is entered.

### CVListComponent

- Displays a list of CVs with details hidden until clicked.
- Utilizes Angular directives for improved display.

### HeaderComponent

- Provides navigation links for the application.

## Pipes

### DefaultImagePipe

- Returns the name of a default image stored in the assets folder if the provided value is empty or contains only spaces.

## Services

### RecruitmentService

- Handles recruitment functionalities.
- Integrates ngx-toaster library for displaying recruitment alerts.

### ApiService

- Fetches data from the provided API endpoint.
- Displays fake CVs and error toast messages in case of API retrieval errors.

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Rjibaa/angular-recruitment-platform.git
   ```
2. Install dependencies:
   ```bash
   $ cd angular-recruitment-platform
   $ npm install
   ``` 
3. Start the Angular development server:
   ```bash
   $ ng serve
   ```
5. Access the application at http://localhost:4200 in your web browser.
   
## Usage

- Navigate through the application using the provided links in the header.
- Input data in the appropriate fields to preview business cards and CVs.
- Explore different functionalities such as rainbow writing and recruitment alerts.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Thanks to Angular for providing a powerful framework for building web applications.
- Special thanks to all contributors who helped in the development of this project.
