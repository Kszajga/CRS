using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2Application2.Data
{
    public class CRSContext :DbContext
    {
        public CRSContext(DbContextOptions options) : base(options)
        {

        }
        
        public DbSet<User> User { get; set; }
        public DbSet<Customer> Customer { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            var personTableModel = modelBuilder.Entity<User>();
            personTableModel.HasKey(p => p.UserID);
            personTableModel.Property(p => p.UserID).UseSqlServerIdentityColumn();
            personTableModel.Property(p => p.Name).IsRequired().HasMaxLength(30);

            base.OnModelCreating(modelBuilder);
            var customerTableModel = modelBuilder.Entity<Customer>();
            customerTableModel.HasKey(p => p.CustomerID);
            customerTableModel.Property(p => p.CustomerID).UseSqlServerIdentityColumn();
            customerTableModel.Property(p => p.FirstName).IsRequired();
        }
    }
}
