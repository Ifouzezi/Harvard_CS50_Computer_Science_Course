#include <stdio.h>

int main(void) {
    const int MAX = 100;
    int x, y;

    printf("Enter the first number: ");
    scanf("%d", &x); // Read the first number

    printf("Enter the second number: ");
    scanf("%d", &y); // Read the second number

    // Check if inputs are within the maximum allowed value
    if (x > MAX || y > MAX) {
        printf("Please enter numbers less than or equal to %d.\n", MAX);
        return 1; // Exit the program if numbers are out of range
    }

    // Compare the numbers and print the appropriate message
    if (x > y) {
        printf("The first number is greater than the second number.\n");
    } else if (x < y) {
        printf("The first number is less than the second number.\n");
    } else {
        printf("The first number is equal to the second number.\n");
    }

    return 0;
}
