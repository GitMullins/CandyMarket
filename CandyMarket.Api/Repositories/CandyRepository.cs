using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : ICandyRepository
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

                //var trainer = db.QueryFirst<Candy>(sql, parameters);
                return db.Execute(sql,newCandy) == 1;
            }
        }

            public bool EatCandy(int candyIdToDelete)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from CandyMarket
                            where [name] = @name";

                return db.Execute(sql, new { name }) == 1;
            }
        }
}