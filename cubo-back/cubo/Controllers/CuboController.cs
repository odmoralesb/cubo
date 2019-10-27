using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using cubo.Modelo;
using System.Web;

namespace cubo.Controllers
{
    [EnableCors("AllowAllHeaders")]
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


        [HttpPost]
        [Route("update")]
        public ActionResult update([FromBody] Payload payload)
        {

            Cubo cubo = new Cubo();

            cubo.registro = payload.registro;

            cubo.update(payload.x, payload.y, payload.y, payload.W);

            return Ok(cubo.registro);

        }



        [HttpPost]
        [Route("query")]
        public ActionResult query([FromBody] Payload payload)
        {

            int sumatoria = 0;

            Coordenada c1 = new Coordenada
            {
                x = payload.x1,
                y = payload.y1,
                z = payload.z1
            };


            Coordenada c2 = new Coordenada
            {
                x = payload.x2,
                y = payload.y2,
                z = payload.z2
            };


            Cubo cubo = new Cubo(payload.registro);


            sumatoria = cubo.query(c1, c2);


            object respuesta = new
            {
                sumatoria = sumatoria,
                mensaje = cubo.registro.mensaje
            };           


            return Ok(respuesta);

        }








    }
}