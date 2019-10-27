using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cubo.Modelo
{

    public class Registro
    {
        public int N;

        public List<Item> items = new List<Item>();

        public string mensaje;


    }

    public class Payload
    {
        public int x, y, z, W;

        public int x1, y1, z1;

        public int x2, y2, z2;

        public Registro registro;
    }


    public class Item
    {
        public int x, y, z, W;
    }


    public class Coordenada
    {
        public int x, y, z;
    }



    public class Cubo
    {

        public Cubo(Registro registro = null)
        {
            if (registro != null)
            {
                foreach (Item item in registro.items)
                {
                    valores[item.x, item.y, item.z] = item.W;
                }
            }

        }


        public int[,,] valores = new int[100, 100, 100];

        public Registro registro = new Registro();

        public void update(int x, int y, int z, int W)
        {
            int index;

            Item item = new Item
            {
                x = x,
                y = y,
                z = z,
                W = W
            };

            index = registro.items.FindIndex(it => it.x == x && it.y == y && it.z == z);

            if (index >= 0)
            {
                registro.items[index] = item;
                registro.mensaje = "Actualizando registro existente";
            }
            else
            {
                registro.items.Add(item);
                registro.mensaje = "Agregando nuevo registro";
            }



        }


        public int query(Coordenada c1, Coordenada c2)
        {
            int total = 0;

            for (int i = c1.x; i <= c2.x; i++)
            {
                for (int j = c1.y; j <= c2.y; j++)
                {
                    for (int k = c1.z; k <= c2.z; k++)
                    {
                        total += valores[i, j, k];
                    }
                }
            }

            registro.mensaje = "Consulta realizada con exito";

            return total;

        }


    }






    }
