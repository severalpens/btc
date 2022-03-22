This is a discussion on AWS Amplify

Advantages
When I've created full stack applications in the past, I inevitably come up against browser CORS restrictions (Cross Origin Resource Sharing). There are properties and resources that can be added to resolve these but I've always been uneasy with these especially as security becomes more of an issue. The main advantage with Amplify is many of these security and infrastructure problems are offloaded to AWS. Another large advantage is in built dev-ops so all that's needed for deployment is to push changes to Github.

Disadvantages
If using the data modelling (back end) tools, amplify cli knowledge is needed. This can get confusing but after using it for a while I started repeatedly using the same 3 or 4 commands. Probably the biggest annoyance is the speed of updates. Any change to the data model can take minutes to update which can add hours per day to development time.

An obscure annoyance I've also come across is the AWSJson datatype that I assumed accepted JSON. It turns out it only stores strings that are parsed in storage.

Amplify is a javascript based environment but there is the option to add in a C# .Net api as an alternative to Graphql or javascript api. 

