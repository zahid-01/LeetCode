#include <iostream>

using namespace std;

class Solution
{
public:
  int climbStairs(int n)
  {
    if (n == 1)
      return 1;
    if (n == 2)
      return 2;

    int last = 2, secondLast = 1;
    int next = 0;

    for (int i = 2; i < n; i++)
    {
      next = last + secondLast;
      secondLast = last;
      last = next;
    }

    return next;
  }
};

int main()
{
  Solution so;
  cout << so.climbStairs(5);
}