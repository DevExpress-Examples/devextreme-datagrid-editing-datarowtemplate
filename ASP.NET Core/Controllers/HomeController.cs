using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP_NET_Core.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewModel viewModel = new ViewModel
            {
                Editors = new List<string>{ "Prefix", "FirstName", "LastName", "Position", "BirthDate", "HireDate" },
                Employees = EmployeesData.Employees
            };
            return View(viewModel);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View();
        }
    }
}
