#include <stdio.h>
#include <stdlib.h>

typedef unsigned char *byte_pointer;

void show_bytes(byte_pointer start, size_t len) {
    size_t i;

    for (i = 0; i < len; i++)
		printf("%p %.2x\n", start, start[i]); //Just changed it to show the pointer with %p formatting
    printf("\n");
    return;	
}

// Put your answer to Question 3 b) here as a comment

void show_bytes_2(byte_pointer start, size_t len) {
    size_t i;

    for (i = 0; i < len; i++)
		printf(" %.2x", start[i]); 	
    printf("\n");
    return;		
}

// Put your answer to Question 3 d) here

// Put your answer to Question 3 e) here

void show_int(int x) {
	printf("\nival = %d\n", x); 
    show_bytes((byte_pointer) &x, sizeof(int)); 
	show_bytes_2((byte_pointer) &x, sizeof(int)); 
	return;	
}

void show_float(float x) {
    printf("fval = %f\n", x); 	
    show_bytes((byte_pointer) &x, sizeof(float));
    show_bytes_2((byte_pointer) &x, sizeof(float)); 
    return;	
}

void show_pointer(void *x) {
	printf("pval = %p\n", x); 
    show_bytes((byte_pointer) &x, sizeof(void *));
    show_bytes_2((byte_pointer) &x, sizeof(void *));
	return;	
}