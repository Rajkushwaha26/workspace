// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Cors;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using dotnetapp.Models;

// namespace dotnetapp.Controllers
// {
//     [ApiController]
//     [Route("api/[controller]")]
//     public class AdminController : ControllerBase
//     {
//         private readonly ApplicationDbContext _context;

//         public AdminController(ApplicationDbContext context)
//         {
//             _context = context;
//         }

//         [HttpGet]
//         [Route("GetPlayers")]
//         public IActionResult GetPlayers(){
//             var plist = _context.Players.ToList();
//             return Ok(plist);
//         }

//         [HttpGet]
//         [Route("GetTeams")]
//         public IActionResult GetTeams(){
//             var tlist = _context.Teams.ToList();
//             return Ok(tlist);
//         }

//         [HttpPost]
//         [Route("PostPalyers")]
//         public IActionResult PostPlayers(Player player){
//             _context.Players.Add(player);
//             _context.SaveChanges();
//             return Ok();
//         }

//         [Route("PutPlayer/{id}")]
//         [HttpPut]
//         public IActionResult PutPlayer(int id, Player player){
//             var pl = _context.Players.Find(id);
//             if(pl!=null){
//                 pl.Age=player.Age;
//                 pl.Name=player.Name;
//                 pl.TeamId=player.TeamId;
//                 pl.Category=player.Category;
//                 pl.BiddingPrice=player.BiddingPrice;
//                 _context.Update(pl);
//                 _context.SaveChanges();
//                 return Ok();
//             }else{
//                 return NotFound();

//             }
            
//         }

//         [HttpDelete]
//         [Route("DeletePlayer/{id}")]
//         public IActionResult DeletePlayer(int id){
//             var pl = _context.Players.Find(id);
//             if(pl!=null){
//                 _context.Players.Remove(pl);
//                 _context.SaveChanges();
//                 return Ok();
//             }else{
//                 return NotFound();
//             }
            
//         }

        
//     }
// }

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using System.ComponentModel.DataAnnotations;
 
namespace dotnetapp.Controllers
{
 
   
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
 
        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }
 
        [HttpGet]
        [Route("GetPlayer")]
        public IActionResult GetPlayers()
        {
            var playerList = _context.Players.ToList();
            return Ok(playerList);
        }
 
        [HttpGet]
        [Route("GetPlayer/{id}")]
        public IActionResult GetPlayers(int id)
        {
            var playerList= _context.Players.FirstOrDefault(a=>a.Id==id);
            if(playerList!=null)
            {
                return Ok(playerList);
            }
            else{
                return NotFound();
            }
        }
        [HttpPost]
        [Route("PostPlayers")]
        public IActionResult PostPlayers(Player player)
        {
           
            _context.Players.Add(player);
            _context.SaveChanges();
            return Ok();
        }
 
        [HttpPut]            
        [Route("PutPlayer")]
        public IActionResult PutPlayer(int id,Player player)
        {
            var playerList=_context.Players.Find(id);
            if(playerList!=null)
            {
                playerList.Age=player.Age;
                playerList.Name=player.Name;
                playerList.TeamId=player.TeamId;
                playerList.Category=player.Category;
                playerList.BiddingPrice=player.BiddingPrice;
                _context.Update(playerList);
                _context.SaveChanges();
                return Ok();
            }
            else  
                return NotFound();            
 
         }
 
        [HttpDelete]
        [Route("DeletePlayer")]
        public IActionResult DeletePlayer(int id)
        {
            var playerList=_context.Players.Find(id);
            if(playerList!=null)
            {
                _context.Players.Remove(playerList);
                _context.SaveChanges();
                return Ok();
            }
            else
                return NotFound();
        }
 
 
 
        [HttpGet]
        [Route("GetTeams")]
        public IActionResult GetTeams()
        {
            var teamList = _context.Teams.ToList();
            return Ok(teamList);
        }
        [HttpPost]
        [Route("PostTeams")]
        public IActionResult PostTeams(Team team)
        {
            _context.Teams.Add(team);
            _context.SaveChanges();
            return Ok();
        }
       
        [HttpPut]            
        [Route("PutTeam")]
        public IActionResult PutTeam(int id,Team team)
        {
            var teamList=_context.Teams.Find(id);
            if(teamList!=null)
            {
                teamList.TeamName=team.TeamName;
                _context.Update(teamList);
                _context.SaveChanges();
                return Ok();
            }
            else  
                return NotFound();  
 
            // db.Update(teamList         // db.SaveChanges();            
 
         }
 
        [HttpDelete]
        [Route("DeleteTeam")]
        public IActionResult DeleteTeam(int id)
        {
            var teamList=_context.Teams.Find(id);
            if(teamList!=null)
            {
                _context.Teams.Remove(teamList);
                _context.SaveChanges();
                return Ok();
            }
            else
                return NotFound();
        }
 
       
    }
}