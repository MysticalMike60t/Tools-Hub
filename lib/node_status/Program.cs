using System;
using System.Diagnostics;
using System.Threading;

class Program
{
    static void Main(string[] args)
    {
        // Specify the name of the Node.js process you want to check for
        string processName = "node"; // Change this to the name of your Node.js process

        int totalProgressSteps = 10; // The total number of progress steps

        Console.Write("Searching for Node.js processes: [");

        for (int step = 0; step <= totalProgressSteps; step++)
        {
            // Calculate the percentage completed
            int percentage = (step * 100) / totalProgressSteps;

            // Update the progress bar
            Console.CursorLeft = 34; // Position the cursor after the "[" character
            Console.Write("".PadRight(19, ' ')); // Clear the progress bar
            Console.CursorLeft = 34; // Position the cursor after the "["
            Console.Write("".PadRight((step * 19) / totalProgressSteps, '\u2588')); // Fill the progress bar with block characters
            Console.CursorLeft = 53; // Position the cursor after the "]"
            Console.Write($"] {percentage}%");
            Console.SetCursorPosition(53, Console.CursorTop); // Move cursor to the start of the next line

            // Simulate a delay or work (replace this with your actual task)
            if (step < totalProgressSteps)
            {
                SimulateWork();
            }
        }

        Console.WriteLine(); // Move to the next line after completing the progress bar

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

        Console.WriteLine("Press any key to exit...");
        Console.ReadKey();
    }

    static void SimulateWork()
    {
        // Simulate some work by sleeping for a short time
        Thread.Sleep(0);
    }
}
