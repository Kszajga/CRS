using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Angular2Application2.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CarMake",
                columns: table => new
                {
                    CarMakeID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CarMakeName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarMake", x => x.CarMakeID);
                });

            migrationBuilder.CreateTable(
                name: "CarModel",
                columns: table => new
                {
                    CarModelID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CarModelName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarModel", x => x.CarModelID);
                });

            migrationBuilder.CreateTable(
                name: "Customer",
                columns: table => new
                {
                    CustomerID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Birthday = table.Column<DateTime>(nullable: false),
                    Birthplace = table.Column<string>(nullable: true),
                    Deleted = table.Column<bool>(nullable: false),
                    FirstName = table.Column<string>(nullable: false),
                    IDNumber = table.Column<string>(nullable: true),
                    LastModified = table.Column<DateTime>(nullable: false),
                    LastName = table.Column<string>(nullable: true),
                    NameOfMother = table.Column<string>(nullable: true),
                    RegisterDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customer", x => x.CustomerID);
                });

            migrationBuilder.CreateTable(
                name: "FuelType",
                columns: table => new
                {
                    FuelTypeID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FuelTypeName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FuelType", x => x.FuelTypeID);
                });

            migrationBuilder.CreateTable(
                name: "ServiceIncidenceName",
                columns: table => new
                {
                    ServiceIncidenceNameID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    IncidenceName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceIncidenceName", x => x.ServiceIncidenceNameID);
                });

            migrationBuilder.CreateTable(
                name: "Car",
                columns: table => new
                {
                    CarID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CarMakeID = table.Column<int>(nullable: false),
                    CarMakeID1 = table.Column<int>(nullable: true),
                    CarModelID = table.Column<int>(nullable: false),
                    CarModelID1 = table.Column<int>(nullable: true),
                    Color = table.Column<string>(nullable: true),
                    CustomerID = table.Column<int>(nullable: false),
                    EngineNumber = table.Column<string>(nullable: true),
                    FuelTypeID = table.Column<int>(nullable: false),
                    FuelTypeID1 = table.Column<int>(nullable: true),
                    VIN = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Car", x => x.CarID);
                    table.ForeignKey(
                        name: "FK_Car_CarMake_CarMakeID",
                        column: x => x.CarMakeID,
                        principalTable: "CarMake",
                        principalColumn: "CarMakeID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Car_CarMake_CarMakeID1",
                        column: x => x.CarMakeID1,
                        principalTable: "CarMake",
                        principalColumn: "CarMakeID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Car_CarModel_CarModelID",
                        column: x => x.CarModelID,
                        principalTable: "CarModel",
                        principalColumn: "CarModelID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Car_CarModel_CarModelID1",
                        column: x => x.CarModelID1,
                        principalTable: "CarModel",
                        principalColumn: "CarModelID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Car_Customer_CustomerID",
                        column: x => x.CustomerID,
                        principalTable: "Customer",
                        principalColumn: "CustomerID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Car_FuelType_FuelTypeID",
                        column: x => x.FuelTypeID,
                        principalTable: "FuelType",
                        principalColumn: "FuelTypeID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Car_FuelType_FuelTypeID1",
                        column: x => x.FuelTypeID1,
                        principalTable: "FuelType",
                        principalColumn: "FuelTypeID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ServiceIncidence",
                columns: table => new
                {
                    ServiceIncidenceID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CarID = table.Column<int>(nullable: false),
                    RepairDate = table.Column<DateTime>(nullable: false),
                    ServiceIncidenceNameID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceIncidence", x => x.ServiceIncidenceID);
                    table.ForeignKey(
                        name: "FK_ServiceIncidence_Car_CarID",
                        column: x => x.CarID,
                        principalTable: "Car",
                        principalColumn: "CarID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ServiceIncidence_ServiceIncidenceName_ServiceIncidenceNameID",
                        column: x => x.ServiceIncidenceNameID,
                        principalTable: "ServiceIncidenceName",
                        principalColumn: "ServiceIncidenceNameID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Car_CarMakeID",
                table: "Car",
                column: "CarMakeID");

            migrationBuilder.CreateIndex(
                name: "IX_Car_CarMakeID1",
                table: "Car",
                column: "CarMakeID1");

            migrationBuilder.CreateIndex(
                name: "IX_Car_CarModelID",
                table: "Car",
                column: "CarModelID");

            migrationBuilder.CreateIndex(
                name: "IX_Car_CarModelID1",
                table: "Car",
                column: "CarModelID1");

            migrationBuilder.CreateIndex(
                name: "IX_Car_CustomerID",
                table: "Car",
                column: "CustomerID");

            migrationBuilder.CreateIndex(
                name: "IX_Car_FuelTypeID",
                table: "Car",
                column: "FuelTypeID");

            migrationBuilder.CreateIndex(
                name: "IX_Car_FuelTypeID1",
                table: "Car",
                column: "FuelTypeID1");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceIncidence_CarID",
                table: "ServiceIncidence",
                column: "CarID");

            migrationBuilder.CreateIndex(
                name: "IX_ServiceIncidence_ServiceIncidenceNameID",
                table: "ServiceIncidence",
                column: "ServiceIncidenceNameID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ServiceIncidence");

            migrationBuilder.DropTable(
                name: "Car");

            migrationBuilder.DropTable(
                name: "ServiceIncidenceName");

            migrationBuilder.DropTable(
                name: "CarMake");

            migrationBuilder.DropTable(
                name: "CarModel");

            migrationBuilder.DropTable(
                name: "Customer");

            migrationBuilder.DropTable(
                name: "FuelType");
        }
    }
}
