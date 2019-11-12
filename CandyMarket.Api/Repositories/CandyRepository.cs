using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : Candy, ICandyRepository
    {
        string _connectionString = "Server=localhost;Database=CandyMarket;Trusted_Connection=True;";

        public IEnumerable<Candy> GetAllCandy()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var candies = db.Query<Candy>("Select * From CandyMarket");

                return candies.ToList();
            }
        }

        public bool AddCandy(AddCandyDto newCandy)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"
                            Insert into CandyMarket
                               ([Name],Type,Flavor,isExpired)
                               output inserted.*
                               values (@name,@type,@flavor,@isExpired)";

                return db.Execute(sql, newCandy) == 1;
            }
        }

        public bool EatCandy(int candyIdToDelete)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from CandyMarket
                            where [id] = @candyIdToDelete";

                return db.Execute(sql, new { candyIdToDelete }) >= 1;
            }
        }

        public Candy UpdateCandy(Candy updatedCandy, int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"update CandyMarket
                            set [Name] = @Name,
                            	[type] = @type,
                            	flavor = @flavor,
                            	isExpired = @isExpired
                            output inserted.*
                            where [id] = @id";

                updatedCandy.Id = id;

                var candy = db.QueryFirst<Candy>(sql,updatedCandy);
                return candy;
            }
        }

    }
}