# 🌍 Cities and Provinces Explorer

## Overview

Cities and Provinces Explorer is a web application that provides an interactive interface for exploring city and provincial data through a user-friendly frontend. The application allows users to search, filter, and discover cities using various criteria.


<img width="578" alt="Screenshot 2024-12-15 at 12 25 48 PM" src="https://github.com/user-attachments/assets/173a6f02-b715-45c7-b79c-15e373b72cb0" />

## 🚀 Features

- **Multiple Filtering Options**:
  - Search cities by district
  - Search cities by province
  - Find cities by postcode
  - Keyword search across cities
  - Discover nearby cities using geolocation

- **Interactive Data Table**:
  - Sortable columns
  - Responsive design
  - Clean, intuitive interface

- **Nearby Cities Exploration**:
  - Search cities within a specified radius
  - Preset location buttons for quick exploration
  - Detailed distance information

## 📋 Prerequisites

- Modern web browser
- Backend API running on `http://localhost:3000`
- Internet connection for Bootstrap resources

## 🛠 Technologies Used

- **Frontend**:
  - HTML5
  - Bootstrap 5.3
  - Vanilla JavaScript

- **Dependencies**:
  - Bootstrap CSS
  - Bootstrap JavaScript Bundle

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cities-provinces-explorer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cities-provinces-explorer
   ```

3. Ensure your backend API is running on `http://localhost:3000`

4. Open `index.html` in your preferred web browser

## 🖥 Usage

1. Select a filter type from the dropdown
2. Enter the required filter value
3. Click "Fetch Data"
4. Optional: Click column headers to sort results

### Nearby Cities Example

1. Select "Nearby Cities"
2. Enter latitude and longitude
3. (Optional) Adjust search radius
4. Click "Fetch Data"

## 🌐 Preset Locations

The application includes preset location buttons for quick testing:
- Example Location 1
- Colombo, Sri Lanka
- Polonnaruwa, Sri Lanka

## 🔍 API Endpoints Supported

- `GET /cities`: Retrieve all cities
- `GET /cities/district/{district}`: Cities by district
- `GET /cities/province/{province}`: Cities by province
- `GET /cities/postcode/{postcode}`: City by postcode
- `GET /cities/search`: Search cities by name
- `GET /cities/nearby`: Find cities near GPS coordinates

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/cities-provinces-explorer](https://github.com/yourusername/cities-provinces-explorer)

## 🙏 Acknowledgements

- Bootstrap
- Your Backend API Team
