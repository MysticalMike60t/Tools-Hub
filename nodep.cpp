#include <iostream>
#include <filesystem>

int main(int argc, char *argv[]) {
    if (argc != 2) {
        std::cerr << "Usage: " << argv[0] << " <directory_path>" << std::endl;
        return 1;
    }

    std::string directoryPath = argv[1];

    std::cout << "Node packages installed in " << directoryPath << ":" << std::endl;

    std::filesystem::path nodeModulesPath = directoryPath + "/node_modules";

    if (std::filesystem::exists(nodeModulesPath) && std::filesystem::is_directory(nodeModulesPath)) {
        for (const auto& entry : std::filesystem::directory_iterator(nodeModulesPath)) {
            std::cout << entry.path().filename() << std::endl;
        }
    } else {
        std::cerr << "Error: The 'node_modules' directory does not exist in the specified directory." << std::endl;
        return 1;
    }

    // Wait for user input before exiting
    std::cout << "Press Enter to exit...";
    std::cin.get();  // This line waits for user input

    return 0;
}
