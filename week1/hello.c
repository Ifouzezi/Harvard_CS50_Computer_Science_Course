#include <stdio.h>

int main() {
    char name[50];

    // Ask the user for their name
    printf("Please enter your name: ");
    scanf("%49s", name); // Reads a string until the first whitespace

    // Print a personalized greeting
    printf("Bless you, %s!\n", name);

    return 0;
}
