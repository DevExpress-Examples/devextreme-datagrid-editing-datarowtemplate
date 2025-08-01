# ASP.NET Core DevExtreme Example

## Installation

Download the example and use Visual Studio 2022 (or later) or Visual Studio Code to open the project. This project targets .NET 8.0. 

## Client-side resources and bundling

This project uses [NPM](https://www.npmjs.com/) and [Gulp.js](https://gulpjs.com/) to install client-side libraries. The project restores NPM packages before the first build. Then, Gulp bundles required scripts and CSS files into the resulting package during the first and every next build.

The project includes:
- DevExtreme 24.2.3
- DevExtreme.AspNet.Core 24.2.*
- DevExtreme.AspNet.Data 5.*
- jQuery 3.7.1
- Bootstrap 5.3.3 

The resulted bundles will be located in the `wwwroot` folder:
* `css/vendor.css` - a file with all CSS styles.
* `css/icons` and `css/fonts` - folders that contain fonts and icons for DevExtreme themes.
* `js/vendor.js` - a file that contains all scripts.

The default bundle includes jQuery, Bootstrap, and DevExtreme.

## Code

Take a look at the following files of this example to see the required code:

**Controllers:**
- `Controllers/HomeController.cs` - Main controller with Index action
- `Controllers/SampleDataController.cs` - API controller for sample data

**Models:**
- `Models/SampleData.cs` - Sample data model
- `Models/SampleOrder.cs` - Sample order model

**Views:**
- `Views/Home/Index.cshtml` - Main page with DevExtreme components
- `Views/Shared/_Layout.cshtml` - Layout template
- `Views/_ViewImports.cshtml` - Global imports
- `Views/_ViewStart.cshtml` - View start configuration

**Configuration:**
- `Program.cs` - Application entry point
- `Startup.cs` - Service configuration
- `gulpfile.js` - Build automation
- `package.json` - NPM dependencies
- `ASP.NET Core.csproj` - Project file

## Development server

Use the Visual Studio `Run (F5)` command or `dotnet run` command to run the project. The application will be available at `https://localhost:5001` (HTTPS) or `http://localhost:5000` (HTTP).

## Further help

You can learn more about the ASP.NET Core components' syntax in our documentation: [Concepts](https://docs.devexpress.com/AspNetCore/400574/devextreme-based-controls/concepts/razor-syntax)
The client-side API is based on jQuery [jQuery documentation](https://api.jquery.com/) and described in the following topics: 
* [Get and Set Properties](https://js.devexpress.com/jQuery/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_and_Set_Properties)
* [Call Methods](https://js.devexpress.com/jQuery/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Call_Methods)
* [Get a UI Component Instance](https://js.devexpress.com/jQuery/Documentation/Guide/jQuery_Components/Component_Configuration_Syntax/#Get_a_UI_Component_Instance)

To get more help on DevExtreme submit an issue in the [Support Center](https://supportcenter.devexpress.com/ticket/create)


