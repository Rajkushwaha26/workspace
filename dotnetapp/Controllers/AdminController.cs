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

        [HttpGet]
        [Route("GetPlayers")]
        public IActionResult GetPlayers(){
            var plist = _context.Players.ToList();
            return Ok(plist);
        }

        [HttpPost]
        [Route("PostPalyers")]
        public IActionResult PostPlayers(Player player){
            _context.Players.Add(player);
            _context.SaveChanges();
            return Ok();
        }

        [Route("PutPlayer")]
        [HttpPut]
        public IActionResult PutPlayer(int id, Player player){
            var pl = _context.Players.Find(id);
            if(pl!=null){
                pl.Age=player.Age;
                pl.Name=player.Name;
                plock.T
            }
            return Ok();
        }

        public IActionResult DeletePlayer(int id){
            return Ok();
        }

        
    }
}