# Manual Test Cases

|ID|Title|Preconditions|Steps|Test Data|Expected Result|Priority|
|---|---|---|---|---|---|---|
|TC001|Successful Registration|App running|Register valid user|Valid|201 Created|High|
|TC002|Name length 4|Register|Enter 4 chars|Abcd|Validation|High|
|TC003|Name length 5|Register|Enter 5 chars|Aksha|Accepted|Medium|
|TC004|Name length 24|Register|Enter 24 chars|24 chars|Accepted|Medium|
|TC005|Name length 25|Register|Enter 25 chars|25 chars|Validation|High|
|TC006|Invalid Email|Register|Invalid email|abc@|Validation|High|
|TC007|Duplicate Email|Existing user|Register twice|duplicate@gmail.com|409|High|
|TC008|Password 11 chars|Register|11 chars|Password123|Validation|High|
|TC009|Password 12 chars|Register|12 chars|Password1234|Accepted|High|
|TC010|Password mismatch|Register|Mismatch|P1/P2|Error|High|
|TC011|Blank Name|Register|Leave blank|-|Required|High|
|TC012|Blank Email|Register|Leave blank|-|Required|High|
|TC013|Blank Password|Register|Leave blank|-|Required|High|
|TC014|Successful Login|Registered|Login|Valid|Dashboard|High|
|TC015|Invalid Password|Registered|Wrong password|Wrong|401|High|
|TC016|Unknown Email|Login|Unknown|nouser|401|High|
|TC017|Dashboard with JWT|Logged in|Open dashboard|JWT|Accessible|High|
|TC018|Dashboard without JWT|Logged out|Open dashboard|No JWT|Redirect|High|
|TC019|Logout|Logged in|Logout|-|JWT removed|High|
|TC020|Uppercase Email|Register|Uppercase|USER|Lowercase|Medium|
|TC021|Leading Spaces|Register|Spaces| test |Trimmed|Medium|
|TC022|Unicode Name|Register|Unicode|Ákshay|Handled|Low|
|TC023|SQL Injection|Login|Injection|' OR 1=1 --|Rejected|High|
|TC024|XSS|Register|<script>|Script|Rejected|High|
|TC025|Concurrent Email|Concept|Two users|same|One success|Medium|
