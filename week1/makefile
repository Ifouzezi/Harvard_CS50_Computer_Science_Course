# Makefile for compiling main.c

# Compiler
CC = gcc

# Compiler flags
CFLAGS = -Wall -g

# Output executable name
TARGET = main

# Default rule
all: $(TARGET)

# Rule to compile the target executable
$(TARGET): main.o
	$(CC) $(CFLAGS) -o $(TARGET) main.o

# Rule to compile the object file
main.o: main.c
	$(CC) $(CFLAGS) -c main.c

# Clean rule to remove compiled files
clean:
	rm -f $(TARGET) *.o
