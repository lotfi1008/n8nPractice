using System;
using System.Collections.Generic;
using System.Linq;

namespace TodoApp
{
    public class TodoRepository
    {
        private readonly List<TodoItem> items = new List<TodoItem>();
        private int nextId = 1;

        public IEnumerable<TodoItem> GetAll() => items.OrderBy(i => i.Id);

        public TodoItem GetById(int id) => items.FirstOrDefault(i => i.Id == id);

        public TodoItem Create(string title)
        {
            var item = new TodoItem(nextId++, title);
            items.Add(item);
            return item;
        }

        public bool Update(int id, string title, bool? isDone = null)
        {
            var item = GetById(id);
            if (item == null) return false;
            item.Title = title ?? item.Title;
            if (isDone.HasValue) item.IsDone = isDone.Value;
            return true;
        }

        public bool Delete(int id)
        {
            var item = GetById(id);
            if (item == null) return false;
            return items.Remove(item);
        }
    }
}
