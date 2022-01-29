/*
 * Name: Jet Simon
 * Student number: 301302188
 */

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
/*
The output I get is

Address - 39
Address - 30
Address - 00
Address - 00

The only way this adds up to 12345 is 3 * 16^3 + 3 * 16^1 + 9 * 16^0
Therefore the LSB is stored in the first address we find.
If we are looking at addresses in increasing order and we see the address with LSB first,
Then we must be in Little Endian
*/

void show_bytes_2(byte_pointer start, size_t len) {
    size_t i;

    for (i = 0; i < len; i++)
		printf("%p %.2x\n", (start+i), *(start+i)); 	
    printf("\n");
    return;		
}

// Put your answer to Question 3 d) here

//This function loops through all the different bitshifts of an int to determine the binary value
void show_bits(int n) {
    for(int i = 31; i >= 0; i--) // for each shift we can do from 0 to 31 for all range of ints
    {
        //bit shift i times and & it to determine if 1 or 0 then print
        printf("%d", (n >> i) & 1);
    }

    printf("\n");
}

// Put your answer to Question 3 e) here
int mask_LSbits(int n)
{
    //Make sure not greater than word length, if is make sure mask returned all ones
    if(n >= sizeof(n) * 8) n = (sizeof(n) * 8) - 1;

    //Make sure not less than word length, if is set to 0
    if(n <= 0) n = 0;

    //We just need to shift 1 by n bits to generate a mask because it will
    //Pad with n 1s
    //Must subtract 1 because bitmask shift 0 is still 1 so we must offset
    return (1 << n) - 1;
}

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