// ThisisC++.cpp: 콘솔 응용 프로그램의 진입점을 정의합니다.
//

#include "stdafx.h"
#include "iostream"

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

int main()
{
	USERDATA user = { 10, "철수" };
	user.Print();
	return 0;
}

