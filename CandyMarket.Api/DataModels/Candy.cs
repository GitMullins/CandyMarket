using System;

namespace CandyMarket.Api.DataModels
{
    public class Candy
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Flavor { get; set; }
        public bool isExpired { get; set; }
    }
}
