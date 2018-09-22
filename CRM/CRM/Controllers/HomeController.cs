using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CRM.Models;

namespace CRM.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        CRM_SYSTEMEntities db = new CRM_SYSTEMEntities();
        public ActionResult Index()
        {
            
            return View();
        }
    }
}