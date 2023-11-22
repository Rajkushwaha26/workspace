using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    

    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Register")]
        public IActionResult Register(int p){
            return Ok();
        }
         public IActionResult Register(){
            return Ok();
        }

        public IActionResult Register(){
            if(ModelState.IsValid){
                return RedirectToAction("Login","User");
            }
            return Ok(User);
        }

        public IActionResult Login(){
            if(ModelState.IsValid){
                return RedirectToAction("Index","Home");
            }
            return Ok(User);
        }

        
    }
}