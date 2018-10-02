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
        CRMEntities db = new CRMEntities();
        public ActionResult Index()
        {
            object Admin = Session["Admin"];
            ViewModel model = new ViewModel();
            model.Admins = db.Admin.ToList();
            model.Customers = db.Customer.ToList();
            model.Balans = db.Balans.ToList();
            model.Customer_to_Serviceds = db.Customer_to_Serviceds.ToList();
            int ActiveAdmins = 0;
            int ActiveClient = 0;
            int TotalExpenses = 0;
            int RunningProject = 0;
            foreach (var item in model.Admins)
            {
                if (item.Online==true)
                {
                    ActiveAdmins++;
                }
            }
            foreach (var item in model.Customers)
            {
                if (item.Online == true)
                {
                    ActiveClient++;
                }
            }
            foreach (var item in model.Balans)
            {
                TotalExpenses += item.Price;    
            }
            foreach (var item in model.Customer_to_Serviceds)
            {
                if (item.EndDate > DateTime.Now)
                {
                    RunningProject++;
                }
            }
            ViewBag.ActiveAdmin = ActiveAdmins;
            ViewBag.ActiveClient = ActiveClient;
            ViewBag.TotalExpenses = TotalExpenses;
            ViewBag.RunningProject = RunningProject;

            return View(model);
        }
    }
}