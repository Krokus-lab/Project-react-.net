using System.ComponentModel.DataAnnotations;

namespace reactSIDE.Dtos
{
    public class ItemCreateDto
    {

        public int ProductID { get; set; }

        public int UserID { get; set; }

        public int Quantity { get; set; }
        public int Type { get; set; }
        public string AddTime { get; set; }

    }
}