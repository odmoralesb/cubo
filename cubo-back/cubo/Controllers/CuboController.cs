using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cubo.Controllers
{
    [Produces("application/json")]
    [Route("api")]
    public class CuboController : Controller
    {


        [HttpGet]
        [Route("start")]
        public string start()
        {
            return "INICIANDO";
        }



    }
}