const http=require('http')
const homePage=`
<html>
<head><title>nodejs</title></head> 
<body>hello world</body>
</html>
`
http.createServer((req,res)=>{
  res.end(homePage)
})
.listen(3000,()=>{console.log('server running at 3000');})