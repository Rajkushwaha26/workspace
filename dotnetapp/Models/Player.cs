
using System.ComponentModel.DataAnnotations;
using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;
namespace dotnetapp.Models
{
    public class Player{

        [Key]
        public int Id { get; set; }

        [Required]
        public string? Name { get; set; }

        public int Age {get;set;}
        public string? Category { get; set; }

        [Range(0,double.MaxValue)]
        public decimal BiddingPrice { get; set; }

      

    }
}

