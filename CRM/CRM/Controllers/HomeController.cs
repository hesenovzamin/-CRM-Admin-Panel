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
            object Admin = Session["Admin"];
            ViewModel model = new ViewModel();
            int ActiveAdmins = 0;       
            foreach (var item in model.Admins)
            {
                if (item.Online==true)
                {

                }
            }
            ViewBag.ActiveAdmin = ActiveAdmins;
            model.Admins = db.Admins.ToList();
            return View(model);
        }
    }
}