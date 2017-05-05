using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CRS.Migrations
{
    public partial class autobovitve : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "LastModified",
                table: "Customer",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldNullable: true,
                oldDefaultValueSql: "GetUtcDate()");

            migrationBuilder.AddColumn<DateTime>(
                name: "FirstRegistrationDate",
                table: "Car",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ProductionDate",
                table: "Car",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstRegistrationDate",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "ProductionDate",
                table: "Car");

            migrationBuilder.AlterColumn<DateTime>(
                name: "LastModified",
                table: "Customer",
                nullable: true,
                defaultValueSql: "GetUtcDate()",
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
