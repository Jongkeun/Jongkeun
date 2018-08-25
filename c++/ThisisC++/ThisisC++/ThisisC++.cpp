// ThisisC++.cpp: 콘솔 응용 프로그램의 진입점을 정의합니다.
//

#include "stdafx.h"
#include "iostream"
using namespace std;

int main()
{
	int aList[5] = { 10,20,30,40,50 };

	for (int i = 0; i < sizeof(aList)/ sizeof(*aList); i++)
		cout << aList[i] << " ";

	cout << endl;

	//c++11
	for (auto n : aList)
	{
		n = 10;
		cout << n << " ";
	}
		

	cout << endl;

	for (auto &n : aList)
	{
		n = 20;
		cout << n << ' ';
	}

	cout << endl;

	return 0;
}

