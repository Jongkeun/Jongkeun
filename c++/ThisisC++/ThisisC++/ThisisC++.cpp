// ThisisC++.cpp: 콘솔 응용 프로그램의 진입점을 정의합니다.
//

#include "stdafx.h"
#include "iostream"
using namespace std;

void TestFunc1(int &rParam) 
{
	rParam = 100;
}
void TestFunc2(int rParam)
{
	rParam = 100;
}

int main()
{
	int nData = 0;

	TestFunc1(nData);
	cout << nData << endl;
	nData = 2;
	TestFunc2(nData);
	cout << nData << endl;

	return 0;
}

