using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Angular2Application2.Migrations
{
    public partial class initLaptop : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Car_CarMake_CarMakeID1",
                table: "Car");

            migrationBuilder.DropIndex(
                name: "IX_Car_CarMakeID1",
                table: "Car");

            migrationBuilder.DropColumn(
                name: "CarMakeID1",
                table: "Car");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CarMakeID1",
                table: "Car",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Car_CarMakeID1",
                table: "Car",
                column: "CarMakeID1");

            migrationBuilder.AddForeignKey(
                name: "FK_Car_CarMake_CarMakeID1",
                table: "Car",
                column: "CarMakeID1",
                principalTable: "CarMake",
                principalColumn: "CarMakeID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
