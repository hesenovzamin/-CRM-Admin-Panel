﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CRM.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CRMEntities : DbContext
    {
        public CRMEntities()
            : base("name=CRMEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<C_Transaction> C_Transaction { get; set; }
        public virtual DbSet<Admin> Admin { get; set; }
        public virtual DbSet<Balans> Balans { get; set; }
        public virtual DbSet<Bonservices> Bonservices { get; set; }
        public virtual DbSet<Contacts> Contacts { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Customer_to_Serviceds> Customer_to_Serviceds { get; set; }
        public virtual DbSet<Discount> Discount { get; set; }
        public virtual DbSet<Jobpost> Jobpost { get; set; }
        public virtual DbSet<JobsApplication> JobsApplication { get; set; }
        public virtual DbSet<Mesagge> Mesagge { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductCategory> ProductCategory { get; set; }
        public virtual DbSet<Stoct> Stoct { get; set; }
        public virtual DbSet<Worker> Worker { get; set; }
    }
}
