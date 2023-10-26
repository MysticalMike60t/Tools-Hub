using System;
using System.Diagnostics;
using System.Threading;

class Program
{
    static void Main(string[] args)
    {
        // Specify the name of the Node.js process you want to check for
        string processName = "node"; // Change this to the name of your Node.js process

        // Set the initial console color
        ConsoleColor originalColor = Console.ForegroundColor;

        Console.WriteLine("Searching for Node.js processes");

        // Simulate a loading bar while searching for processes
        for (int i = 0; i < 10; i++)
        {
            Thread.Sleep(100); // Sleep for a short time to simulate progress
            Console.CursorLeft = 0; // Move to the beginning of the line
            Console.ForegroundColor = ConsoleColor.Green; // Change text color to green
            Console.Write("█"); // Colored loading bar character
            Console.ForegroundColor = originalColor; // Restore the original text color
        }

        // Move to the next line after the loading bar
        Console.WriteLine();

        // Get an array of all processes with the specified name
        Process[] processes = Process.GetProcessesByName(processName);

        if (processes.Length > 0)
        {
            // Display a message indicating the number of Node.js processes found
            Console.WriteLine($"\nFound {processes.Length} Node.js process(es) with the name '{processName}':");

            // Display details for each running Node.js process
            for (int i = 0; i < processes.Length; i++)
            {
                Console.WriteLine($"Process {i + 1} - ID: {processes[i].Id}, Start Time: {processes[i].StartTime}");
            }
        }
        else
        {
            // Display a message indicating that no Node.js processes were found
            Console.WriteLine($"\nNo Node.js processes with the name '{processName}' are currently running.");
        }
    }
}
