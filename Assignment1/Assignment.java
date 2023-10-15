import java.util.*;

public class MyClass {
    public static void main(String[] args) {
        // Task 1: Shuffle an array
        int[] numbers = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = new ArrayList<>();
        for (int num : numbers) {
            list.add(num);
        }
        Collections.shuffle(list);
        System.out.println("Shuffled array: " + list);

        // Task 2: Convert Roman numeral to integer
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = scanner.nextLine();
        int decimal = convertRomanToDecimal(romanNumeral);
        System.out.println("Decimal equivalent: " + decimal);

        // Task 3: Check if input is a pangram

        boolean isPangram = isPangram(romanNumeral);
        System.out.println("Is pangram: " + isPangram);
    }

    public static int convertRomanToDecimal(String romanNumeral) {
        int decimal = 0;
        int prevValue = 0;
        for (int i = romanNumeral.length() - 1; i >= 0; i--) {
            char romanChar = romanNumeral.charAt(i);
            int value = getRomanValue(romanChar);

            if (value < prevValue) {
                decimal -= value;
            } else {
                decimal += value;
            }
            prevValue = value;
        }
        return decimal;
    }

    public static int getRomanValue(char romanChar) {
        switch (romanChar) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }

    public static boolean isPangram(String sentence) {
        sentence = sentence.toLowerCase();
        boolean[] alphabetFound = new boolean[26];

        for (char c : sentence.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a';
                alphabetFound[index] = true;
            }
        }

        for (boolean found : alphabetFound) {
            if (!found) {
                return false;
            }
        }
        return true;
    }
}