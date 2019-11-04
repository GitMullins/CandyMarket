﻿using System;
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
            throw new NotImplementedException();
        }

        public bool EatCandy(int candyIdToDelete)
        {
            throw new NotImplementedException();
        }
    }
}