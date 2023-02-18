let temperature = 37.2

if (temperature >= 37.5){
    console.log('febre alta')
}else if(temperature< 37.5 && temperature >= 37){
    console.log('febre moderada')
}else{
    console.log('saudável')
}

let expression = 'x'

switch(expression){
    case 'a':
        console.log('a')
        break
    case 'b':
        console.log('b')
    default:
        console.log('nenhuma das alternativas')
        break
}

 function sayMyName(name = ''){
    if (name ===''){
        throw new Error('nome é necessário')
    }
    console.log('depois do erro')
 }

sayMyName()

console.log('após a função de erro')

 //continua com a aplicação depois do catch
//  try{
//     sayMyName()
//  }catch(e){
//     console.log(e)
//  }