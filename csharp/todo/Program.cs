using System;
using TodoApp;

namespace TodoApp
{
    class Program
    {
        static void PrintHelp()
        {
            Console.WriteLine("Todo CLI - commands:");
            Console.WriteLine("  list               - show all todo items");
            Console.WriteLine("  add <title>        - add a new todo");
            Console.WriteLine("  done <id>          - mark item as done");
            Console.WriteLine("  update <id> <title>- update title");
            Console.WriteLine("  delete <id>        - delete item");
            Console.WriteLine("  help               - show this help");
        }

        static void Main(string[] args)
        {
            var repo = new TodoRepository();

            if (args.Length == 0)
            {
                PrintHelp();
                return;
            }

            var cmd = args[0].ToLowerInvariant();

            try
            {
                switch (cmd)
                {
                    case "list":
                        foreach (var item in repo.GetAll())
                            Console.WriteLine(item);
                        break;
                    case "add":
                        if (args.Length < 2)
                        {
                            Console.WriteLine("Usage: add <title>");
                            return;
                        }
                        var title = string.Join(' ', args, 1, args.Length - 1);
                        var created = repo.Create(title);
                        Console.WriteLine("Created: " + created);
                        break;
                    case "done":
                        if (args.Length < 2 || !int.TryParse(args[1], out var doneId))
                        {
                            Console.WriteLine("Usage: done <id>");
                            return;
                        }
                        var okDone = repo.Update(doneId, null, true);
                        Console.WriteLine(okDone ? "Marked done" : "Item not found");
                        break;
                    case "update":
                        if (args.Length < 3 || !int.TryParse(args[1], out var updId))
                        {
                            Console.WriteLine("Usage: update <id> <title>");
                            return;
                        }
                        var newTitle = string.Join(' ', args, 2, args.Length - 2);
                        var okUpd = repo.Update(updId, newTitle);
                        Console.WriteLine(okUpd ? "Updated" : "Item not found");
                        break;
                    case "delete":
                        if (args.Length < 2 || !int.TryParse(args[1], out var delId))
                        {
                            Console.WriteLine("Usage: delete <id>");
                            return;
                        }
                        var okDel = repo.Delete(delId);
                        Console.WriteLine(okDel ? "Deleted" : "Item not found");
                        break;
                    case "help":
                        PrintHelp();
                        break;
                    default:
                        Console.WriteLine("Unknown command. Use 'help' to see commands.");
                        break;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error: " + ex.Message);
            }
        }
    }
}
