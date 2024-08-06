# DHIS2 Dashboard with Datastore and Organisation Units

This project is a React application that provides a dashboard for managing data related to organisation units in DHIS2. It includes various components such as an organisation unit tree, data elements associated with selected organisation units, and a datastore lookup management system.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Home](#home)
  - [OrgUnitTree](#orgunittree)
  - [AsideDataElements](#asidedataelements)
  - [DataTariff](#datatariff)
  - [CustomModal](#custommodal)
  - [ItemsLookUpTable](#itemslookuptable)
  - [LookUp](#lookup)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone [[https://github.com/yourusername/dhis2-dashboard](https://github.com/Derrick-Nuby/dhis2-organisation-manager-dashboard)](https://github.com/Derrick-Nuby/dhis2-organisation-manager-dashboard).git
    cd web
    ```

2. Install dependencies:

    ```bash
    yarn install
    ```

3. Start the development server:

    ```bash
    yarn start
    ```
4. Build a deployable version:

    ```bash
    yarn build
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the navigation links to access different sections of the dashboard.
3. Select organisation units to view associated dataSets and manage datastore lookups.

## Components

### Home

The Home component displays navigation links to different sections of the application.

### OrgUnitTree
The OrgUnitTree component displays a tree of organisation units and allows selection.

### AsideDataElements
The AsideDataElements component displays data Sets associated with the selected organisation unit.

### DataTariff
The DataTariff component integrates the organisation unit tree and displays data elements for the selected organisation unit.

### CustomModal
The CustomModal component is a reusable modal dialog.

### ItemsLookUpTable
The ItemsLookUpTable component displays and manages datastore lookup items.

### LookUp
The LookUp component integrates the ItemsLookUpTable component with a modal for adding new lookup items.

## Technologies Used
- React
- TypeScript
- Tailwind CSS
- DHIS2 UI Library
- dhis2 app runtime
- react router dom
- cli-app-scripts (for app initiatlization)

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the BSD-3-Clause License. See the LICENSE file for details.
