using System;
using System.Diagnostics;

class Program
{
    static void Main(string[] args)
    {
        string processName = "node"; // Change this to the name of your Node.js process

        if (IsNodeProcessRunning(processName))
        {
            Console.WriteLine($"Node.js process ({processName}) is running.");
        }
        else
        {
            Console.WriteLine($"Node.js process ({processName}) is not running.");
        }
    }

    static bool IsNodeProcessRunning(string processName)
    {
        Process[] processes = Process.GetProcessesByName(processName);

        return processes.Length > 0;
    }
}
