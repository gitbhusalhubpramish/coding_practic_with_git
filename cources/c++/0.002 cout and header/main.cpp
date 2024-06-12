#include<iostream>//this is including a header a file which keep the informaiton of some function like here iostream takes the information of cin and cout there are 2 types of header files 
//1 made by computer 
//2 made by user
#include<string>//this has the information of string datatype we will learn string leater
//you can see the defination of a function in include file by ctrl+click
using namespace std;//we are writing this to avoid the std 
//like if we are using iostream

int main(){
	string a;//making a variable
	//";" must be at the end
 	cout<<"hello "<<"say something"<<endl;//cout is a function which is in iostream if we did not wrote 'using namespace std;' we had to write std:cout
 	//it displays the output we write "<<"in cout and ">>" in cin instent of ()in cpp(c++)
 	//in cout if we write "hello" it displays "hello" and if we write hello it display a variable called hello here is no hello named variable so it throws error
 	
 	cin>>a;//cin means to take the input of user and store as a
 	cout<<a;//here we display a(what user give)
}

