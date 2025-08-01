using System;
using System.Collections;
using System.Linq;
using System.Text.Json;
using ASP.NET_Core.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;

namespace ASP_NET_Core.Controllers
{

    [Route("api/[controller]")]
    public class EmployeesDataController : Controller
    {
        [HttpGet]
        public object Get(DataSourceLoadOptions loadOptions)
        {
            return DataSourceLoader.Load(EmployeesData.Employees, loadOptions);
        }

        [HttpPost]
        public IActionResult Post(string values)
        {
            var newItem = new Employee();
            PopulateModel(newItem, JsonSerializer.Deserialize<IDictionary>(values));
            EmployeesData.Employees.Add(newItem);
            return Ok();
        }

        [HttpPut]
        public IActionResult Put(int key, string values)
        {
            var employee = EmployeesData.Employees.FirstOrDefault(e => e.ID == key);
            PopulateModel(employee, JsonSerializer.Deserialize<IDictionary>(values));
            return Ok();
        }

        [HttpDelete]
        public void Delete(int key)
        {
            var employee = EmployeesData.Employees.FirstOrDefault(e => e.ID == key);
            EmployeesData.Employees.Remove(employee);
        }

        void PopulateModel(Employee employee, IDictionary values)
        {
            if (values.Contains("ID"))
                employee.ID = Convert.ToInt32(values["ID"]);

            if (values.Contains("FirstName"))
                employee.FirstName = Convert.ToString(values["FirstName"]);

            if (values.Contains("LastName"))
                employee.LastName = Convert.ToString(values["LastName"]);

            if (values.Contains("Prefix"))
                employee.Prefix = Convert.ToString(values["Prefix"]);

            if (values.Contains("Position"))
                employee.Position = Convert.ToString(values["Position"]);

            if (values.Contains("Picture"))
                employee.Picture = Convert.ToString(values["Picture"]);

            if (values.Contains("BirthDate"))
                employee.BirthDate = Convert.ToDateTime(Convert.ToString(values["BirthDate"]));

            if (values.Contains("HireDate"))
                employee.HireDate = Convert.ToDateTime(Convert.ToString(values["HireDate"]));

            if (values.Contains("Notes"))
                employee.Notes = Convert.ToString(values["Notes"]);

            if (values.Contains("Address"))
                employee.Address = Convert.ToString(values["Address"]);
        }
    }
}
