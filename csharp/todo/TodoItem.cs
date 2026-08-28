using System;

namespace TodoApp
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool IsDone { get; set; }
        public DateTime CreatedAt { get; set; }

        public TodoItem(int id, string title)
        {
            Id = id;
            Title = title ?? string.Empty;
            IsDone = false;
            CreatedAt = DateTime.UtcNow;
        }

        public override string ToString()
        {
            return $"[{Id}] {(IsDone ? "x" : " ")} {Title} (Created: {CreatedAt:u})";
        }
    }
}
