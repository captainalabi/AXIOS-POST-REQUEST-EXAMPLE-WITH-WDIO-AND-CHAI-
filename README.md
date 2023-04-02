#AXIOS POST REQUEST EXAMPLE WITH WDIO AND CHAI 
Demonstrates the usefulness of Axios in API testing. 
the example makes a post request to an API end point that receives
an object data in form of title of an article. the response to the request 
includes and id that could be obtained from the response data. Chai expect
is used to verify that the id returned is greater than 0 because the id value 
cannot be determined before response is made (a random value is always returned) but
it is not expected to be less than or equal to 0.
