import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class NodeModulesToCSV {
    public static void main(String[] args) {
        String rootDirectory = "/path/to/your/root/directory"; // Change this to your root directory
        String csvFilePath = "node_modules.csv";

        List<String> modulesList = new ArrayList<>();
        findNodeModules(new File(rootDirectory), modulesList);

        writeCSVFile(csvFilePath, modulesList);
    }

    private static void findNodeModules(File directory, List<String> modulesList) {
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory() && file.getName().equals("node_modules")) {
                    modulesList.add(file.getAbsolutePath());
                } else if (file.isDirectory()) {
                    findNodeModules(file, modulesList);
                }
            }
        }
    }

    private static void writeCSVFile(String csvFilePath, List<String> modulesList) {
        try (FileWriter writer = new FileWriter(csvFilePath)) {
            for (String modulePath : modulesList) {
                writer.write(modulePath);
                writer.write(System.lineSeparator()); // Add a new line
            }
            System.out.println("CSV file '" + csvFilePath + "' has been created.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
