using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    //[ApiController]
    //[Route("api/[controller]")]
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

        [HttpGet]
        [Route("GetTeams")]
        public IActionResult GetTeams(){
            var tlist = _context.Teams.ToList();
            return Ok(tlist);
        }

        [HttpPost]
        [Route("PostPalyers")]
        public IActionResult PostPlayers(Player player){
            _context.Players.Add(player);
            _context.SaveChanges();
            return Ok();
        }

        [Route("PutPlayer/{id}")]
        [HttpPut]
        public IActionResult PutPlayer(int id, Player player){
            var pl = _context.Players.Find(id);
            if(pl!=null){
                pl.Age=player.Age;
                pl.Name=player.Name;
                pl.TeamId=player.TeamId;
                pl.Category=player.Category;
                pl.BiddingPrice=player.BiddingPrice;
                _context.Update(pl);
                _context.SaveChanges();
                return Ok();
            }else{
                return NotFound();

            }
            
        }

        [HttpDelete]
        [Route("DeletePlayer/{id}")]
        public IActionResult DeletePlayer(int id){
            var pl = _context.Players.Find(id);
            if(pl!=null){
                _context.Players.Remove(pl);
                _context.SaveChanges();
                return Ok();
            }else{
                return NotFound();
            }
            
        }

        
    }
}