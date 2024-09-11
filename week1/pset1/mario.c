#include <stdio.h>

// Define the size of the square
const int n = 5;

int main(void)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}