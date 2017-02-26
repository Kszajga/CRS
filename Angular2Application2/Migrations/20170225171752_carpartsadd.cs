using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Angular2Application2.Migrations
{
    public partial class carpartsadd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CarPart",
                columns: table => new
                {
                    CarPartID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CarPartName = table.Column<string>(nullable: true),
                    Price = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarPart", x => x.CarPartID);
                });

            migrationBuilder.CreateTable(
                name: "ServiceIncidenceCarPart",
                columns: table => new
                {
                    CarPartID = table.Column<int>(nullable: false),
                    ServiceIncidenceID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceIncidenceCarPart", x => new { x.CarPartID, x.ServiceIncidenceID });
                    table.ForeignKey(
                        name: "FK_ServiceIncidenceCarPart_CarPart_CarPartID",
                        column: x => x.CarPartID,
                        principalTable: "CarPart",
                        principalColumn: "CarPartID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceIncidenceCarPart_ServiceIncidence_ServiceIncidenceID",
                        column: x => x.ServiceIncidenceID,
                        principalTable: "ServiceIncidence",
                        principalColumn: "ServiceIncidenceID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ServiceIncidenceCarPart_ServiceIncidenceID",
                table: "ServiceIncidenceCarPart",
                column: "ServiceIncidenceID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceIncidenceCarPart");

            migrationBuilder.DropTable(
                name: "CarPart");
        }
    }
}
