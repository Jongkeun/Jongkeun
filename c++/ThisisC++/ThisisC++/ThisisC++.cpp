// ThisisC++.cpp: 콘솔 응용 프로그램의 진입점을 정의합니다.
//

#include "stdafx.h"
#include "iostream"
#include <functional>
#include <algorithm>
using namespace std;

class USERDATA
{
public:
	int nAge;
	char szName[32];

	void Print(void) 
	{
		printf("%d, %s\n", nAge, szName);
	}
};

string test(string &s) {
	//std::vector<std::string> s;
	cout << less<int>()(10, 20);
	//sort(s.begin(), s.end());
	return s;
}
int main()
{
	int NumberList[] = { 1,2,3,4,5 };
	// 값을 복사
	for (auto n : NumberList) 
	{
		n = 0;
	}
	std::cout << NumberList[0] << std::endl;
	// 실제 NuberList 내부 값
	for (auto &n : NumberList) 
	{
		n = 0;
	}
	std::cout << NumberList[0] << std::endl;
	string a = "hello";
	string b = "hello2";
	string t = test(a);
	string t2 = test(b);
	
	return 0;
}

