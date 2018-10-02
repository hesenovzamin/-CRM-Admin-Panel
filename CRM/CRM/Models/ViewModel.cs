using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CRM.Models;

namespace CRM.Models
{
    public class ViewModel
    {
        public List<Admin> Admins { get; set; } = new List<Admin>();
        public List<Balans> Balans { get; set; } = new List<Balans>();
        public List<Bonservices> Bonservices { get; set; } = new List<Bonservices>();
        public List<C_Transaction> C_TransactionS { get; set; } = new List<C_Transaction>();
        public List<Customer> Customers { get; set; } = new List<Customer>();
        public List<Contacts> Contacts { get; set; } = new List<Contacts>();
        public List<Customer_to_Serviceds> Customer_to_Serviceds { get; set; } = new List<Customer_to_Serviceds>();
        public List<Discount> Discount { get; set; } = new List<Discount>();
        public List<Jobpost> Jobpost { get; set; } = new List<Jobpost>();
        public List<JobsApplication> JobsApplication { get; set; } = new List<JobsApplication>();
        public List<Mesagge> Mesagge { get; set; } = new List<Mesagge>();
        public List<Orders> Order { get; set; } = new List<Orders>();
        public List<Product> Products { get; set; } = new List<Product>();
        public List<ProductCategory> ProductCategorys { get; set; } = new List<ProductCategory>();
        public List<Stoct> Stoct { get; set; } = new List<Stoct>();
        public List<Worker> Worker { get; set; } = new List<Worker>();
    }
}