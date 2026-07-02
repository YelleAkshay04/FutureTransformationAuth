# Boundary Test Cases

\---

Test ID    Field       Test Input         Expected Result     Expected Outcome

\---

BTC-001    Name        4 characters       Validation error    Fail
displayed

BTC-002    Name        5 characters       Registration        Pass
allowed

BTC-003    Name        24 characters      Registration        Pass
allowed

BTC-004    Name        25 characters      Validation error    Fail
displayed

BTC-005    Password    11 characters      Validation error    Fail
displayed

BTC-006    Password    12 characters      Registration        Pass
(letters \&         allowed  
numbers)

BTC-007    Email       USER@EXAMPLE.COM   Converted to        Pass
lowercase and  
accepted

BTC-008    Email       Leading/trailing   Spaces trimmed      Pass
spaces             before validation

BTC-009    Email       Invalid format     Validation error    Fail
(user@domain)      displayed

BTC-010    Email       Valid email with   Accepted if within  Pass
maximum supported  supported limit  
length

BTC-011    Confirm     Does not match     Validation error    Fail
Password    Password           displayed

BTC-012    Confirm     Matches Password   Registration        Pass
Password                       allowed

BTC-013    Rate        10 registration    Requests allowed    Pass
Limiting    attempts within  
one hour

BTC-014    Rate        11th registration  HTTP 429 Too Many   Fail
Limiting    attempt within one Requests  
hour

BTC-015    Duplicate   Existing email     HTTP 409 Conflict   Fail
Email       address            returned

BTC-016    JWT Access  Access Dashboard   Redirect to Login   Fail
without JWT        page

BTC-017    JWT Access  Access Dashboard   Dashboard displayed Pass
with valid JWT     successfully

BTC-018    JWT Access  Access Dashboard   Redirect to Login   Fail
with expired JWT   or Unauthorized  
response
---



