using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{

    

    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult GetPlayers(){
            return Ok();
        }

        public IActionResult GetTeams(){
            return Ok();
        }

        public IActionResult PutPlayer(int id){
            return Ok();
        }

        public IActionResult DeletePalyer(){
            return Ok();
        }

        
    }
}